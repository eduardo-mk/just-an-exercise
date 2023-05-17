import { DataItem } from '../types/table-data-response'

interface ButtonDownloadProps {
    name: string
    message: any[] | string
    disabled: boolean
}

function basicParseByLine(messageArr: Array<any>) {
    let msg = ''
    messageArr.forEach((elementOfMessage: any) => {
        msg = msg + `${JSON.stringify(elementOfMessage)}\n\n\n`
    })

    return msg
}

export default function ButtonDownloadAlert({
    name,
    disabled,
    message,
}: ButtonDownloadProps) {
    let finalMessage: string = ''
    if (Array.isArray(message)) {
        finalMessage = basicParseByLine(message)
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
