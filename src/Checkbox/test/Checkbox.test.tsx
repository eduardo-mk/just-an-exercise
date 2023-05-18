import { render } from '@testing-library/react'
import Checkbox from '../'

describe('Checkbox should:', () => {
    test('set empty state', async () => {
        const onClick = jest.fn()
        const { container } = render(
            <Checkbox labelName="Selected" value="empty" onClick={onClick} />
        )
        const checkbox = container.querySelector<HTMLInputElement>(`input`)
        expect(checkbox?.checked).toBeFalsy()
    })
    test('set checked state', async () => {
        const onClick = jest.fn()
        const { container } = render(
            <Checkbox labelName="Selected" value="checked" onClick={onClick} />
        )
        const checkbox = container.querySelector<HTMLInputElement>(`input`)
        expect(checkbox?.checked).toBeTruthy()
    })
    test('set indeterminate state', async () => {
        const onClick = jest.fn()
        const { container } = render(
            <Checkbox
                labelName="Selected"
                value="indeterminate"
                onClick={onClick}
            />
        )
        const checkbox = container.querySelector<HTMLInputElement>(`input`)
        expect(checkbox?.indeterminate).toBeTruthy()
        expect(checkbox?.checked).toBeFalsy()
    })
})
