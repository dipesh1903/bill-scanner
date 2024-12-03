import { ChangeEvent, useRef, useState } from "react";
import { PrimaryButton } from "../../components/ui/button";
import Camera from "../../components/camera";
import { getFunctions, httpsCallable } from "firebase/functions";
import { onExtractBillInfo } from "../../utils/extractText";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "../../components/ui/dialog";
import LoaderIcon from '../../assets/spinner.svg';

export default function HomePage() {

    const [ _ , setFile] = useState<File>();
    const [loader , setLoader] = useState(false)
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

    function extractTextFromImg(img: string) {
        setLoader(true)
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
            }).finally(() => setLoader(false))
    }

    function getCameraPic(img: string) {
        setIsCameraOpen(false);
        extractTextFromImg(img);
    }

    function handleFileChange(e: ChangeEvent<HTMLInputElement>, isSaveBills?: boolean) {
        if (isSaveBills) {
            navigate('/gallery', {
                state: {
                    files: e.target.files
                }
            })
            return;
        }
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
                    <header className="bg-slate-300 p-4 mb-4 flex justify-between items-center">
                        <h1 className="font-semibold">Bill Scanner</h1>
                        <PrimaryButton className="w-fit bg-transparent text-black rounded-lg border-[1px] border-black hover:bg-opacity-50" onClick={() => navigate('/product/all')}>View Scanned Items</PrimaryButton>
                    </header>
                    <main className="flex flex-col items-center">
                        <div className="w-fit">
                            <PrimaryButton className="px-6" onClick={onSelectInput}>Scan Bill Image</PrimaryButton>
                            <input ref={inputRef}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e)} type="file" className="hidden" />
                        </div>
                        <div className="flex flex-1 w-full pt-1 pb-1 items-center">
                            <span className="flex flex-1 h-[1px] bg-slate-400"></span><span className="p-2 text-[20px]">or</span><span className="flex flex-1 h-[1px] bg-slate-400"></span>
                        </div>
                        <div className="w-fit">
                            <PrimaryButton className="px-6" onClick={() => setIsCameraOpen(true)}>Scan Bill Photo</PrimaryButton>
                        </div>
                        <div className="flex flex-1 w-full pt-1 pb-1 items-center">
                            <span className="flex flex-1 h-[1px] bg-slate-400"></span><span className="p-2 text-[20px]">or</span><span className="flex flex-1 h-[1px] bg-slate-400"></span>
                        </div>
                        <div className="w-fit my-2">
                            <PrimaryButton className="px-6" onClick={onSelectInput}>Save Bills</PrimaryButton>
                            <input accept="image/*" multiple ref={inputRef}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e, true)} type="file" className="hidden" />
                        </div>
                        <canvas className="mt-4" ref={canvasRef} height={400} width={400}></canvas>
                    </main>
                </>
            }
            {
                loader && 
                <Dialog open={loader} onOpenChange={() => setLoader(false)}>
                    <DialogContent onInteractOutside={(e) => e.preventDefault()}
                        className="w-fit border-none bg-transparent">
                        <img width={80} className="stroke-slate-800" src={LoaderIcon} />
                    </DialogContent>
                </Dialog>
            }
        </div>
    )
}