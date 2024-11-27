import { useRef } from "react";
import { Outlet } from "react-router-dom";


export default function AppContainer() {
    const ref = useRef(null);

    return (
        <div className="max-w-2xl min-h-dvh flex-1 m-auto" ref={ref}>
            <Outlet/>
        </div>
    )
}
