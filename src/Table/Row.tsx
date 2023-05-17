import { DataItem } from '../types/table-data-response'

interface RowProps {
    item: DataItem
    onClickHandler: (name: string) => void
}
export default function Row({ item, onClickHandler }: RowProps) {
    const markForStatus =
        item.status === 'available' ? <span className="dot-green"></span> : null
    return (
        <tr className="row" onClick={() => onClickHandler(item.name)}>
            <td>
                <input type="checkbox" defaultChecked={item.selected} />
            </td>
            <td>{item.name}</td>
            <td>{item.device}</td>
            <td>{item.path}</td>
            <td>
                {markForStatus} {item.status}
            </td>
        </tr>
    )
}
