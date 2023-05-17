import { CustomAction } from '../App'
import Checkbox from '../Checkbox'
import { DataItem } from '../types/table-data-response'

export interface DataTableProps {
    data: DataItem[]
    dispatch: React.Dispatch<CustomAction>
}

interface RowProps {
    item: DataItem
    onClickHandler: (name: string) => void
}
function Row({ item, onClickHandler }: RowProps) {
    return (
        <tr onClick={() => onClickHandler(item.name)}>
            <td>
                <input type="checkbox" checked={item.selected} />
            </td>
            <td>{item.name}</td>
            <td>{item.device}</td>
            <td>{item.path}</td>
            <td>{item.status}</td>
        </tr>
    )
}
export default function Table({ data, dispatch }: DataTableProps) {
    function onClickRowHandler(name: string) {
        dispatch({ type: 'select/one', payload: name })
        dispatch({ type: 'count/selections', payload: null })
        dispatch({ type: 'update/checkbox', payload: null })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Device</th>
                    <th>Path</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                    <Row
                        key={index}
                        item={item}
                        onClickHandler={onClickRowHandler}
                    />
                ))}
            </tbody>
        </table>
    )
}
