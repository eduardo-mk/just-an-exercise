import { DataItem } from '../types/table-data-response'

interface ButtonDownloadProps {
    name: string
    message: any[] | string
    disabled: boolean
}
export default function ButtonDownloadAlert({
    name,
    disabled,
    message,
}: ButtonDownloadProps) {
    let finalMessage: string = ''
    if (Array.isArray(message)) {
        message.forEach((elementOfMessage) => {
            finalMessage =
                finalMessage + `${JSON.stringify(elementOfMessage)}\n\n\n`
        })
    } else if (typeof message === 'string') {
        finalMessage = message
    }
    function triggerAlertBox() {
        window.alert(finalMessage)
    }

    return (
        <button disabled={disabled} onClick={triggerAlertBox}>
            {name}
        </button>
    )
}
