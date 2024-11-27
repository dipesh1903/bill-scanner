/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ProductListType } from "../../type";
import storePersist, { LOCAL_STORAGE_KEY } from "../storePersist";

export type contextType = {
    products: ProductListType
}

const storageContextValue = createContext<contextType>({} as contextType);
const dispatchContext = createContext<React.Dispatch<React.SetStateAction<contextType>>>(() => {});


export function StorageContext({children}: {children: ReactNode} ) {
    const [state, setState] = useState<contextType>(storePersist.get(LOCAL_STORAGE_KEY.PRODUCT_LIST) || {});
    
    useEffect(() => {
        if (Object.keys(state).length) {
            const exisitngProducts = storePersist.get(LOCAL_STORAGE_KEY.PRODUCT_LIST);
            storePersist.set(LOCAL_STORAGE_KEY.PRODUCT_LIST, {products: {...(exisitngProducts?.products || {}),  ...state.products}})
        }
    }, [state]) 

    return (
        <storageContextValue.Provider value={state}>
            <dispatchContext.Provider value={setState}>
                {children}
            </dispatchContext.Provider>
        </storageContextValue.Provider>
    )
}

export function useContextStore(): contextType {
    return useContext(storageContextValue)
}

export function useContextDispatch(): React.Dispatch<React.SetStateAction<contextType>> {
    return useContext(dispatchContext)
}