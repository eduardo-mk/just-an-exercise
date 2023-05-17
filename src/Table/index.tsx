import { CustomAction } from '../App'
import { DataItem } from '../types/table-data-response'
import Row from './Row'
import './style.css'

export interface DataTableProps {
    data: DataItem[]
    dispatch: React.Dispatch<CustomAction>
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
