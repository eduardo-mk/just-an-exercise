import { CustomAction } from '../App'
import { DataItem } from '../types/table-data-response'
import HeadConfigurator from './Head'
import Row from './Row'
import './style.css'

export interface DataTableProps {
    data: DataItem[]
    dispatch: React.Dispatch<CustomAction>
    titleSpecs: Array<{ title: string }>
}

export default function Table({ data, dispatch, titleSpecs }: DataTableProps) {
    function onClickRowHandler(name: string) {
        dispatch({ type: 'select/one', payload: name })
        dispatch({ type: 'count/selections', payload: null })
        dispatch({ type: 'update/checkbox', payload: null })
    }

    return (
        <table data-testid="table">
            <HeadConfigurator titleSpecs={titleSpecs} />
            <tbody>
                {data.map((item) => (
                    <Row
                        key={item.name}
                        item={item}
                        onClickHandler={onClickRowHandler}
                    />
                ))}
            </tbody>
        </table>
    )
}
