import { fireEvent, render, screen } from '@testing-library/react'
import Row from '../Row'

const item = {
    name: 'JohnDoe',
    device: 'iPhone',
    path: '/home/johndoe',
    status: 'available',
    selected: false,
}

const spy = jest.fn()

describe('Row should:', () => {
    test('render a row', async () => {
        render(
            <table>
                <tbody>
                    <Row item={item} onClickHandler={spy} />
                </tbody>
            </table>
        )
        expect(spy).toHaveBeenCalledTimes(0)
        const row = screen.getByTestId(`row-${item.name}`)
        expect(row).toBeTruthy()
        row.click()
        expect(spy).toHaveBeenCalledTimes(1)
    })

    test('call handler', async () => {
        render(
            <table>
                <tbody>
                    <Row item={item} onClickHandler={spy} />
                </tbody>
            </table>
        )
        expect(spy).toHaveBeenCalledTimes(0)
        const row = screen.getByTestId(`row-${item.name}`)
        row.click()
        expect(spy).toHaveBeenCalledTimes(1)
    })

    test('default selection as false in the first render', async () => {
        const { container } = render(
            <table>
                <tbody>
                    <Row item={item} onClickHandler={spy} />
                </tbody>
            </table>
        )
        const checkbox = container.querySelector<HTMLInputElement>(
            `#select-item-${item.name}`
        )
        expect(checkbox?.checked).toBeFalsy()
        fireEvent.click(checkbox!)
    })

    test('add a green dot for available status', async () => {
        const isAvailable = render(
            <table>
                <tbody>
                    <Row item={item} onClickHandler={spy} />
                </tbody>
            </table>
        )
        let greenDot =
            isAvailable.container.querySelector<HTMLInputElement>(`.dot-green`)
        expect(greenDot).toBeTruthy()
        const isNotAvailable = render(
            <table>
                <tbody>
                    <Row
                        item={{
                            name: 'JohnDoe',
                            device: 'cmd',
                            path: '/home/johndoe',
                            status: 'stopped',
                            selected: false,
                        }}
                        onClickHandler={spy}
                    />
                </tbody>
            </table>
        )
        greenDot =
            isNotAvailable.container.querySelector<HTMLInputElement>(
                `.dot-green`
            )
        expect(greenDot).toBeFalsy()
    })
})
