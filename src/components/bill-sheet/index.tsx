import { forwardRef } from "react"
import { ProductListType, ProductType } from "../../type"

type props = {
    rowData: ProductListType,
    columns: string[],
    viewOnly: boolean
}
export default forwardRef<HTMLFormElement, props>(function BillSheet({rowData, columns, viewOnly}: props, ref) {
    return (
        <div className="overflow-scroll">
            <form ref={ref}>
                <table>
                    <thead>
                        {columns.map((item, index) => <th className="p-3 text-left capitalize border-r-2 border-b-2 border-t-2 first:border-l-2" key={index}>{item}</th>)}
                    </thead>
                    <tbody>
                        {
                            [...Object.keys(rowData).map((data: string) => {
                                return (<tr key={data}>
                                    {(columns || []).map((col, index) => (
                                    <td className="p-3 text-left border-r-2 border-b-2 first:border-l-2" key={index}><textarea readOnly={viewOnly} data-col={col} data-key={data} className="resize-none focus:outline-none" defaultValue={rowData[data][col as keyof ProductType]} /></td>
                                ))}
                                </tr>)
                            })]
                        }
                    </tbody>
                </table>
            </form>
        </div>
    )
})