import { fireEvent, render } from '@testing-library/react'
import ButtonDownloadAlert from '../DownloadWithAlert'

describe('Download button with alert should:', () => {
    test('set correct name as provided', async () => {
        const name = 'Download now!'
        const { container } = render(
            <ButtonDownloadAlert
                name={name}
                disabled={true}
                message={['Hello', 'world']}
            />
        )
        const button = container.querySelector('.download_btn')
        expect(button?.innerHTML).toBe(name)
    })

    test('display message in window alert when message is a collection', async () => {
        const spyOnAlert = jest
            .spyOn(window, 'alert')
            .mockImplementation(() => {})
        const name = 'Download now!'
        const message = ['Hello', 'World']
        const { container } = render(
            <ButtonDownloadAlert
                name={name}
                message={message}
                disabled={false}
            />
        )
        const button = container.querySelector('.download_btn')

        fireEvent.click(button!)

        expect(spyOnAlert).toHaveBeenCalledWith(`"Hello"\n\n\n"World"\n\n\n`)
    })

    test('display message in window alert when message is string', async () => {
        const spyOnAlert = jest
            .spyOn(window, 'alert')
            .mockImplementation(() => {})
        const name = 'Download now!'
        const message = 'Hello World'
        const { container } = render(
            <ButtonDownloadAlert
                name={name}
                message={message}
                disabled={false}
            />
        )
        const button = container.querySelector('.download_btn')

        fireEvent.click(button!)

        expect(spyOnAlert).toHaveBeenCalledWith(message)
    })
})
