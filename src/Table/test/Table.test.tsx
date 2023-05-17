import { render, screen } from '@testing-library/react'
import Table from '..'
import { DataItem } from '../../types/table-data-response'

const data = [
    {
        name: 'smss.exe',
        device: 'Stark',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
        status: 'available',
        selected: false,
    },
    {
        name: 'explorer.exe',
        device: 'Winterfell',
        path: '\\Device\\HarddiskVolume3\\Windows\\System32\\explorer.exe',
        status: 'running',
        selected: false,
    },
    {
        name: 'notepad.exe',
        device: 'The Wall',
        path: '\\Device\\HarddiskVolume4\\Windows\\System32\\notepad.exe',
        status: 'stopped',
        selected: false,
    },
]

const dispatch = jest.fn()

it('should render the table with the correct props', () => {
    const {container} = render(<Table data={data} dispatch={dispatch} />)

    expect(screen.getByRole('table')).toBeTruthy()
    expect(container.getElementsByClassName('row')).toHaveLength(3)
})
