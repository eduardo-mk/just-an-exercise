import { fireEvent, render } from '@testing-library/react'
import App from './App'

describe('App should:', () => {
    test('render a table by default', async () => {
        const { container } = render(<App />)
        const rows = container.querySelectorAll('.row')
        expect(rows).toHaveLength(5)
    })

    test('provide option to select all elements', async () => {
        const { container } = render(<App />)
        const checkbox = container.querySelector('.app_options input')
        fireEvent.click(checkbox!)

        const individualCheckBoxesInsideDataTable =
            container.querySelectorAll<HTMLInputElement>('.row input')

        individualCheckBoxesInsideDataTable.forEach((checkbox) => {
            expect(checkbox.checked).toBeTruthy()
        })
    })

    test('provide option to unselect all elements', async () => {
        const { container } = render(<App />)
        const checkbox = container.querySelector('.app_options input')
        fireEvent.click(checkbox!)

        const individualCheckBoxesInsideDataTable =
            container.querySelectorAll<HTMLInputElement>('.row input')

        individualCheckBoxesInsideDataTable.forEach((checkbox) => {
            expect(checkbox.checked).toBeTruthy()
        })
        fireEvent.click(checkbox!)
        individualCheckBoxesInsideDataTable.forEach((checkbox) => {
            expect(checkbox.checked).toBeFalsy()
        })
    })

    test('set select-all button to indeterminate when user clicks one or more elements', async () => {
        const { container } = render(<App />)
        const checkbox =
            container.querySelector<HTMLInputElement>('.app_options input')
        fireEvent.click(checkbox!)

        const individualCheckBoxesInsideDataTable =
            container.querySelectorAll<HTMLInputElement>('.row input')

        individualCheckBoxesInsideDataTable.forEach((checkbox) => {
            expect(checkbox.checked).toBeTruthy()
        })

        fireEvent.click(individualCheckBoxesInsideDataTable[2]!)

        expect(checkbox!.indeterminate).toBeTruthy()
    })
})
