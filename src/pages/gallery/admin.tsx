import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useLocation } from "react-router-dom"
import { PrimaryButton } from "../../components/ui/button";
import { Dialog, DialogContent } from "../../components/ui/dialog";
import LoaderIcon from '../../assets/spinner.svg';
import { useState } from "react";
import { STORAGE_DIRECTORY } from "../../constant";

export default function Gallery() {
    const { state } = useLocation();
    const files: FileList  = state.files;
    const storage = getStorage();
    const [loader , setLoader] = useState<boolean>(false)

    function saveBills() {
        setLoader(true)
        Promise.all(Array.from(files).map(function(file) {
            const fileRef = ref(storage, `${STORAGE_DIRECTORY}/${file.name}`)
            return uploadBytes(fileRef, file)
          })).then(res => {
            console.log('response is', res);
          }).finally(() => {
            setLoader(false)
          })
    }

    return (
        <div className="flex flex-col max-w-2xl overflow-hidden h-[100vh] m-auto">
            <>
                <header className="bg-slate-300 p-4 mb-4 flex justify-between items-center">
                    <h1 className="font-semibold">Bills Gallery</h1>
                </header>
                <main>
                    <PrimaryButton onClick={saveBills}>Save Bills</PrimaryButton>
                    <div className="flex flex-wrap flex-row">
                    {
                        files && Array.from(files).map((file, index) => {
                            const src = URL.createObjectURL(file);
                            return (
                                <img key={index} className="p-2 flex-[25%]" src={src} width={'25%'} />
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
        </div>
    )
}