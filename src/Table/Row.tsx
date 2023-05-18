import { DataItem } from '../types/table-data-response'

interface RowProps {
    item: DataItem
    onClickHandler: (name: string) => void
}
export default function Row({ item, onClickHandler }: RowProps) {
    const markForStatus =
        item.status === 'available' ? <span className="dot-green"></span> : null
    return (
        <tr
            className={`row${item.selected ? ' row_selected' : ''}`}
            onClick={() => onClickHandler(item.name)}
            data-testid={`row-${item.name}`}
            title={`Name: ${item.name}`}
        >
            <td>
                <label htmlFor={`select-item-${item.name}`}>
                    <input
                        title={item.name}
                        id={`select-item-${item.name}`}
                        type="checkbox"
                        checked={item.selected}
                        readOnly
                        data-testid="checkbox"
                    />
                </label>
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
