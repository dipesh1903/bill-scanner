import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductListType } from "../../type";
import { PrimaryButton } from "../../components/ui/button";
import { useContextDispatch, useContextStore } from "../../store/products/context";

export default function ProductSettings({value}: {value?: ProductListType}) {

    const { state, pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useContextDispatch();
    const allProducts = useContextStore()
    const [viewOnly, setViewOnly] = useState(false);
    const [products, setProducts] = useState<ProductListType>(() => {
    return state && state.value ? (state.value || {}) : (value ? value : {})
    });

    useEffect(() => {
        if(pathname.includes('all')) {
            setViewOnly(true);
            setProducts(allProducts.products)
        }
    }, [pathname])

    function onSave() {
        const savedProductId = Object.keys(allProducts || {})
        const productIds = Object.keys(products || {})
        const productIdsToSave = productIds.filter(id => !savedProductId.includes(id))
        const productList: ProductListType = {};
        (productIdsToSave || []).forEach(id => productList[id] = products[id])
        if (productIdsToSave.length) {
            dispatch({products: {...allProducts.products, ...productList}})
            navigate(-1)
        }
    }

    return (
        <div className="flex flex-col max-w-2xl h-[100vh] m-auto p-4">
            <header className="bg-slate-300 p-4 mb-4 flex justify-between">
                <h1 className="font-semibold">Products</h1>
                {!viewOnly &&  <PrimaryButton className="w-fit" onClick={() => onSave()}>save</PrimaryButton>}
            </header>
            {
                Object.keys(products || {}).map((key, index) => (
                    <div
                        key={key} 
                        className="my-2">
                        <ProductCard
                        isReadOnly={viewOnly}
                        product={products[key]}/>
                    </div>
                ))
            }
        </div>
    )
}