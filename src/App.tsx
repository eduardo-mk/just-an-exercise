import { useReducer } from 'react'
import Table from './Table'
import { DataItem } from './types/table-data-response'
import Checkbox from './Checkbox'
import ButtonDownloadAlert from './Buttons/DownloadWithAlert'
import './main.css'

const data = [
    {
        name: 'smss.exe',
        device: 'Stark',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
        status: 'scheduled',
        selected: false,
    },

    {
        name: 'netsh.exe',
        device: 'Targaryen',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
        status: 'available',
        selected: false,
    },

    {
        name: 'uxtheme.dll',
        device: 'Lannister',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
        status: 'available',
        selected: false,
    },

    {
        name: 'cryptbase.dll',
        device: 'Martell',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
        status: 'scheduled',
        selected: false,
    },

    {
        name: '7za.exe',
        device: 'Baratheon',
        path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
        status: 'scheduled',
        selected: false,
    },
]

export interface CustomAction {
    type: string
    payload: any
}

interface AppState {
    data: DataItem[]
    checkBoxState: string
    selectedCount: number
}

function reducer(state: AppState, action: CustomAction) {
    switch (action.type) {
        case 'select/one':
            const selectOneDataUpdated = state.data.map((item) =>
                item.name === action.payload
                    ? { ...item, selected: !item.selected }
                    : item
            )
            return { ...state, data: selectOneDataUpdated }
        case 'select/all':
            const selectAll = state.data.map((item) => ({
                ...item,
                selected: true,
            }))
            return { ...state, data: selectAll }
        case 'unselect/all':
            const unselectAll = state.data.map((item) => ({
                ...item,
                selected: false,
            }))
            return { ...state, data: unselectAll }
        case 'count/selections':
            const selectedCount = state.data.filter(
                (item) => item.selected
            ).length
            return { ...state, selectedCount }
        case 'update/checkbox':
            const allAreSelected = state.data.every((item) => item.selected)
            const noneSelected = state.data.every((item) => !item.selected)
            let checkBoxState = ''
            if (allAreSelected) {
                checkBoxState = 'checked'
            } else if (noneSelected) {
                checkBoxState = 'empty'
            } else {
                checkBoxState = 'indeterminate'
            }
            return { ...state, checkBoxState }
        default:
            return state
    }
}

const initialAppState: AppState = {
    data: data,
    checkBoxState: 'empty',
    selectedCount: 0,
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialAppState)

    function selectAllHandler() {
        const current = state.checkBoxState
        if (current === 'checked') {
            dispatch({ type: 'unselect/all', payload: null })
        } else if (current === 'empty') {
            dispatch({ type: 'select/all', payload: null })
        } else {
            // NOTE: Discuss with UX what state is next here.
            // This is just a proposal but needs confirmation.
            dispatch({ type: 'select/all', payload: null })
        }
        dispatch({ type: 'update/checkbox', payload: null })
        dispatch({ type: 'count/selections', payload: null })
    }

    return (
        <div className="app">
            <section className="app_options">
                <Checkbox
                    labelName={
                        state.selectedCount !== 0
                            ? `Selected: ${state.selectedCount}`
                            : 'Not selected'
                    }
                    value={state.checkBoxState}
                    onClick={selectAllHandler}
                />
                <ButtonDownloadAlert
                    name={'Download'}
                    disabled={state.selectedCount === 0}
                    message={state.data
                        .filter(
                            (item) =>
                                item.status === 'available' && item.selected
                        )
                        .map((item) => ({
                            device: item.device,
                            path: item.path,
                        }))}
                />
            </section>
            <Table
                data={state.data}
                dispatch={dispatch}
                titleSpecs={[
                    { title: '' },
                    { title: 'Name' },
                    { title: 'Device' },
                    { title: 'Path' },
                    { title: 'Status' },
                ]}
            />
        </div>
    )
}
