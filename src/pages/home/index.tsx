import { ChangeEvent, useRef, useState } from "react";
import { PrimaryButton } from "../../components/ui/button";
import Camera from "../../components/camera";
import { getFunctions, httpsCallable } from "firebase/functions";
import { onExtractBillInfo } from "../../utils/extractText";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [file, setFile] = useState<File>();
    const inputRef= useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pageRef = useRef<HTMLDivElement>(null);

    const functions = getFunctions();
    const addMessage = httpsCallable(functions, 'helloWorld');

    function onSelectInput() {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    console.log('g whegfjwegf wgef i am here');

    function extractTextFromImg(img: string) {
        addMessage({image: img})
            .then((result: any) => {
                const results = result.data.res.filter(Boolean)
                const textAnnotation = results[0].responses[0].textAnnotations;
                try {
                    const extractInfo = onExtractBillInfo(textAnnotation);
                    navigate('/product', {
                        state: {
                            value: extractInfo
                        }
                    })
                    console.log('the extracted information is ', extractInfo);
                } catch {
                    console.log('error occured')
                }
            }).catch(err => {
                console.log('error is ', err);
            })
    }

    function getCameraPic(img: string) {
        setIsCameraOpen(false);
        extractTextFromImg(img);
    }

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {

        if(e.target.files && e.target.files.length) {
            setFile(e.target.files[0]);
            const ctx = canvasRef?.current?.getContext('2d');
            if (!canvasRef || !canvasRef.current) return;
            (async function() {
                if (!e.target.files) return;
                let blob = await fetch(URL.createObjectURL(e.target.files[0])).then(r => r.blob());
                let dataUrl = await new Promise(resolve => {
                  let reader = new FileReader();
                  reader.onload = () => resolve(reader.result);
                  reader.readAsDataURL(blob);
                });
                extractTextFromImg((dataUrl as string).split('base64,')[1].trim());
            })();

            let base_image = new Image();
            base_image.width = pageRef?.current?.getBoundingClientRect().width || 400;
            base_image.height = 400;
            base_image.src = URL.createObjectURL(e.target.files[0]);
            base_image.onload = function() {
                if (canvasRef.current) {
                    canvasRef.current.width = base_image.width
                    canvasRef.current.height = base_image.height
                    ctx?.drawImage(base_image, 0, 0, base_image.width, base_image.height);
                }
            }
        }
    }

    return (
        <div ref={pageRef} className="flex flex-col max-w-2xl overflow-hidden h-[100vh] m-auto">
            {
                isCameraOpen ? <Camera onSave={getCameraPic}/> :
                <>
                    <header className="bg-slate-300 p-4 mb-4">
                        <h1 className="font-semibold">Bill Scanner</h1>
                    </header>
                    <main className="flex flex-col items-center">
                        <div className="w-fit">
                            <PrimaryButton onClick={onSelectInput}>Select Image</PrimaryButton>
                            <input ref={inputRef}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e)} type="file" className="hidden" />
                        </div>
                        <div>or</div>
                        <div className="w-fit">
                            <PrimaryButton onClick={() => setIsCameraOpen(true)}>Click Photo</PrimaryButton>
                        </div>
                        <canvas className="mt-4" ref={canvasRef} height={400} width={400}></canvas>
                    </main>
                </>
            }
        </div>
    )
}