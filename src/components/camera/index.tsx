import { Check, Circle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type props = {
    onSave: (img: string) => void
}

export default function Camera({onSave}: props) {
    const webcamRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [showActionBtn, setShowActionBtn] = useState<boolean>(false);

    useEffect(() => {
        getVideo();
    }, [])

    async function getVideo() {
        const video = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true
        });
        if (webcamRef && webcamRef.current) {
            webcamRef.current.srcObject  = video;
            webcamRef.current.play();
        }
    }

    function onClickScreenshot() {
        setShowActionBtn(true);
        const ctx = canvasRef?.current?.getContext('2d');
        if (!canvasRef || !canvasRef.current) return;
        canvasRef.current.width = webcamRef?.current?.getBoundingClientRect().width || 400
        canvasRef.current.height = webcamRef?.current?.getBoundingClientRect().height || 400
        if (webcamRef.current && ctx) {
            ctx.drawImage(webcamRef.current, 0, 0, webcamRef.current.getBoundingClientRect().width, webcamRef.current.getBoundingClientRect().height)
        } 
    }

    function reset() {
        setShowActionBtn(false);
        const ctx = canvasRef?.current?.getContext('2d');
        ctx?.reset();
    }

    async function savePhoto() {
        const image = canvasRef?.current?.toDataURL("image/png").split('base64,')[1].trim();
        onSave(image || '');
    }

    return (
        <div className="flex flex-col h-full relative">
            <div className="relative flex-1 flex flex-col">
                <video playsInline ref={webcamRef} width={400} height={400} className="object-fill w-full h-full"></video>
                <canvas ref={canvasRef} width={400} height={400} className="absolute top-0 object-fill"></canvas>
            </div>
            {
                !showActionBtn? 
                <div className="flex justify-center absolute w-full bottom-0 left-0 bg-white bg-opacity-50 p-4">
                    <Circle onClick={onClickScreenshot}/>
                </div> :
                <div className="flex justify-between absolute w-full bottom-0 left-0 bg-white bg-opacity-50 p-4">
                    <X onClick={reset}/>
                    <Circle onClick={onClickScreenshot}/>
                    <Check onClick={savePhoto}/>
                </div>
            }
        </div>
    )
}