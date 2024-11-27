import { useState } from "react";
import ProductCard from "./product-card";
import { useLocation } from "react-router-dom";
import { ProductType } from "../../type";
import { PrimaryButton } from "../../components/ui/button";

export default function ProductSettings({value}: {value?: ProductType[]}) {
    const { state } = useLocation();
    const [products , setProducts] = useState<ProductType[]>(() => {
    return state && state.value ? (state.value || []) : (value ? value : [])
    });

    function onSave(product?: ProductType, index?: number) {
        if (product) {
            if (index || index === 0) {
                const result = [...products]
                result[index] = product;
                setProducts([...result]);
            } else {
                setProducts([...products, product]);
            }
        } else {
            if (index || index === 0) {
                const result = [...products]
                result.splice(index, 1)
                setProducts([...result]);
            }
        }
    }

    return (
        <div className="flex flex-col max-w-2xl h-[100vh] m-auto p-4">
            <header className="bg-slate-300 p-4 mb-4 flex justify-between">
                <h1 className="font-semibold">Products</h1>
                <PrimaryButton className="w-fit">save</PrimaryButton>
            </header>
            <PrimaryButton className="mb-2" onClick={() => onSave({} as ProductType)}>Add Product</PrimaryButton>
            {
                products.map((product, index) => (
                    <div
                        key={index} 
                        className="my-2">
                        <ProductCard
                        product={product}/>
                    </div>
                ))
            }
        </div>
    )
}