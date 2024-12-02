import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductListType, ProductType } from "../../type";
import { PrimaryButton } from "../../components/ui/button";
import { useContextDispatch, useContextStore } from "../../store/products/context";
import BillSheet from "../../components/bill-sheet";

export default function ProductSettings({value}: {value?: ProductListType}) {

    const formRef = useRef<HTMLFormElement>(null);
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

    function updatedInput(productIds: string[]) {
        const productList: ProductListType = {};
        const textareas = formRef.current?.getElementsByTagName('textarea')
        if (textareas) {
            for (let textarea of textareas) {
                const colName = textarea.getAttribute('data-col')
                const colKey = textarea.getAttribute('data-key');
                console.log('col keys and col names are', colKey, colName);
                if (!colKey || !colName) continue;
                if (productIds.includes(colKey || '')) {
                    if (!productList[colKey]) productList[colKey] = {} as ProductType
                    productList[colKey][colName as keyof ProductType] = textarea.value
                }
            }
        }
        return productList;
    }

    function onSave() {
        const savedProductId = Object.keys(allProducts || {})
        const productIds = Object.keys(products || {})
        const productIdsToSave = productIds.filter(id => !savedProductId.includes(id))
        const productList: ProductListType = updatedInput(productIdsToSave);
        // (productIdsToSave || []).forEach(id => productList[id] = products[id])
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
            {/* {
                Object.keys(products || {}).map((key, index) => (
                    <div
                        key={key} 
                        className="my-2">
                        <ProductCard
                        isReadOnly={viewOnly}
                        product={products[key]}/>
                    </div>
                ))
            } */}
            <BillSheet viewOnly={viewOnly} ref={formRef} rowData={products} columns={['description', 'hsn', 'quantity', 'rate']} />
        </div>
    )
}