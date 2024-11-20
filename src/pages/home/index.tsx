import { ChangeEvent, useRef, useState } from "react";
import { PrimaryButton } from "../../components/ui/button";

export default function HomePage() {
    const [file, setFile] = useState<File>();
    const [videoState, setVideoState] = useState<{video: MediaStream| null}>();
    const inputRef= useRef<HTMLInputElement>(null);
    const webcamRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [image, setImage] = useState(false);
    const [videoConstraints, setVideoConstraints] = useState({facingMode: { exact: 'environment' }});
    function onSelectInput() {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    async function getVideo() {
        const video = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true
        });
        webcamRef.current.srcObject  = video;
        webcamRef?.current?.play();
        setVideoState({ video });
    }
    
    function stopVideo() {
        if (videoState?.video) {
            videoState.video.getTracks().forEach(track => track.stop());
            setVideoState({ video: null });
        }
    }

    function handleVideoClick() {
        if (videoState?.video) {
            stopVideo();
        } else {
            getVideo();
        }
    }

    function dataURItoBlob(dataURI: string) {
        let mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
        let binary = atob(dataURI.split(',')[1]);
        let array = [];
        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: mime});
    }

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        if(e.target.files && e.target.files.length) {
            setFile(e.target.files[0]);
            console.log('cew fewf w', URL.createObjectURL(e.target.files[0]))
        }
    }

    function onClickScreenshot() {
        const ctx = canvasRef?.current?.getContext('2d');
        if (webcamRef.current && ctx) {
            ctx.drawImage(webcamRef.current, 0, 0, 400, 400)
            let image = canvasRef?.current?.toDataURL("image/png").replace("image/png", "image/octet-stream");
            console.log(URL.createObjectURL(dataURItoBlob(image)));
        } 
    }

    console.log('The file is', file);
    // camera.startCamera();

    return (
        <div className="flex flex-col max-w-2xl overflow-hidden h-[100vh] m-auto">
            <header className="bg-slate-300 p-4 mb-4">
                <h1 className="font-semibold">Bill Scanner</h1>
            </header>
            <main className="flex flex-col items-center">
                <div className="w-fit">
                    <PrimaryButton onClick={onSelectInput}>Select Bill Image</PrimaryButton>
                    <input ref={inputRef}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e)} type="file" className="hidden" />
                </div>
                <div>
                    <button onClick={handleVideoClick}>
                        {videoState?.video ? 'Vid On' : 'Vid Off'}
                    </button>
                    <button onClick={onClickScreenshot}>click picture</button>
                    <div className="relative">
                        <video height={400} width={400} ref={webcamRef}></video>
                        <canvas ref={canvasRef} height={400} width={400}></canvas>
                    </div>
                </div>
            </main>
        </div>
    )
}