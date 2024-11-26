import { useForm } from "react-hook-form"
import { ProductType } from "../../type"
import { cn } from "../../utils/reactUtility"
import { InputLabel } from "../../components/ui/input-label"
import { TextInput } from "../../components/ui/input-string"
type props = {
    product?: ProductType,
    onSave?: (product?: ProductType) => void
}

export default function ProductCard({product}: props) {
    const {register} = useForm<ProductType>({
        defaultValues: {
            description: product ? product.description : '',
            hsn: product ? product.hsn : undefined,
            rate: product ? product.rate : undefined,
        }
    })


    return (
        <div className={cn("p-4 rounded-lg bg-white border-[1px] shadow-product-cards")}>
            <div className="relative">
                <InputLabel>Description</InputLabel>
                <TextInput
                {
                    ...register('description', {
                        required: 'Cannot be empty'
                    })
                }
                placeholder="description"
                autoFocus
                />
            </div>
            <div className="flex flex-row gap-4 pt-3">
                <div>
                    <InputLabel>Hsn Code</InputLabel>
                        <TextInput
                            {
                                ...register('hsn', {
                                    required: 'Cannot be empty'
                                })
                            }
                            placeholder="HSN"
                            />
                </div>
                <div>
                    <InputLabel>Rate</InputLabel>
                        <TextInput
                            {
                                ...register('rate', {
                                    required: 'Cannot be empty'
                                })
                            }
                            placeholder="Rate"
                            />
                </div>
            </div>
        </div>
    )
}