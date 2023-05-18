import { render, screen } from '@testing-library/react'
import Table from '..'

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

describe('Table should:', () => {
    it('render a table with correct first column props', () => {
        const { container } = render(
            <Table
                data={data}
                dispatch={dispatch}
                titleSpecs={[
                    { title: '', include: true },
                    { title: 'Name', include: true },
                    { title: 'Device', include: true },
                    { title: 'Path', include: true },
                    { title: 'Status', include: true },
                ]}
            />
        )

        expect(screen.getByRole('table')).toBeTruthy()
        expect(container.getElementsByClassName('row')).toHaveLength(3)

        const rows = container.querySelectorAll('.row')

        expect(rows).toHaveLength(3)

        expect(rows[0].querySelectorAll('td')[1].innerHTML).toBe(data[0].name)
        expect(rows[1].querySelectorAll('td')[1].innerHTML).toBe(data[1].name)
        expect(rows[2].querySelectorAll('td')[1].innerHTML).toBe(data[2].name)
    })
})
