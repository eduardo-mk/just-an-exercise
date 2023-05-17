import { DataItem } from '../types/table-data-response'

interface RowProps {
    item: DataItem
    onClickHandler: (name: string) => void
}
export default function Row({ item, onClickHandler }: RowProps) {
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
