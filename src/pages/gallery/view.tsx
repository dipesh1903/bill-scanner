import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { Dialog, DialogContent } from "../../components/ui/dialog";
import LoaderIcon from '../../assets/spinner.svg';
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils/reactUtility";

export default function GalleryView() {
    const storage = getStorage();
    const [loader , setLoader] = useState<boolean>(false)
    const [imgUrls , setImgUrls] = useState<string[]>([]);
    const [imgPreview, setimgPreview] = useState<boolean>(false);
    const [currImgIndex, setCurrImgIndex] = useState<number>(0);
    const [rotate, setRotate] = useState<number>(0);

    useEffect(() => {
        saveBills();
    }, [])

    function saveBills() {
        setLoader(true)
          listAll(ref(storage, 'bills'))
          .then(async (res) => {
              const urls: any[] | PromiseLike<any[]> = [];
              await Promise.all(res.items.map(async (itemRef) => {
              const url = await getDownloadURL(itemRef);
              urls.push(url);
              }));
              return urls;
          })
          .then(urls => setImgUrls(urls))
          .catch((_) => {
          })
          .finally(() => setLoader(false))
    }

    function setImg(index: number) {
        setRotate(0);
        if (index < 0) {
            setCurrImgIndex(imgUrls.length - 1)
        } else if (index >= imgUrls.length) {
            setCurrImgIndex(0)
        } else {
            setCurrImgIndex(index)
        }
    }

    function rotateImg() {
        const itr = rotate / 90;
        setRotate(itr === 4 ? 0 : (itr + 1) * 90)
    }

    return (
        <div className="flex flex-col max-w-2xl overflow-hidden h-[100vh] m-auto">
            <>
                <header className="bg-slate-300 p-4 mb-4 flex justify-between items-center">
                    <h1 className="font-semibold">Bills Gallery</h1>
                </header>
                <main>
                    <div className="flex flex-wrap flex-row">
                    {
                        imgUrls && imgUrls.length && imgUrls.map((url, index) => {
                            return (
                                <img onClick={() => {
                                    setimgPreview(true);
                                    setCurrImgIndex(0);
                                }} key={index} className="p-2 flex-[25%]" src={url} width={'25%'} />
                            )
                        })
                    }
                    </div>
                </main>
            </>
            {
                loader && 
                    <Dialog open={loader} onOpenChange={() => setLoader(false)}>
                        <DialogContent onInteractOutside={(e) => e.preventDefault()}
                            className="w-fit border-none bg-transparent">
                            <img width={80} className="stroke-slate-800" src={LoaderIcon} />
                        </DialogContent>
                    </Dialog>
            }
            {
                imgPreview &&
                <Dialog open={imgPreview} onOpenChange={() => setimgPreview(false)}>
                    <DialogContent
                        className="h-[80vh] w-[80vw] border-none bg-transparent">
                        <div className="flex flex-col bg-white">
                            <div className="w-fit justify-self-end" onClick={() => rotateImg()}>Rotate</div>
                            <div>
                                <div className="flex items-center">
                                    <ChevronLeft width={40} onClick={() => setImg(currImgIndex - 1)}/>
                                        <div className="flex-1 h-[70vh] overflow-scroll">
                                        <img style={{rotate: `${rotate}deg`}} className={cn("stroke-slate-800 h-100% w-100% object-fit flex-1", 
                                            `rotate-[${rotate}deg]`)} src={imgUrls[currImgIndex]} />
                                        </div>
                                    <ChevronRight width={40} onClick={() => setImg(currImgIndex + 1)}/>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            }
        </div>
    )
}