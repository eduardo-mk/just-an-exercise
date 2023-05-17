import { useRef, useEffect } from 'react'

const States = {
    checked: 'checked',
    indeterminate: 'indeterminate',
    empty: 'empty',
}

interface CheckboxProps {
    labelName: string
    value: string
    onClick: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ labelName, value, onClick }) => {
    const checkboxRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (checkboxRef.current) {
            if (value === States.checked) {
                checkboxRef.current.checked = true
                checkboxRef.current.indeterminate = false
            } else if (value === States.empty) {
                checkboxRef.current.checked = false
                checkboxRef.current.indeterminate = false
            } else if (value === States.indeterminate) {
                checkboxRef.current.checked = false
                checkboxRef.current.indeterminate = true
            }
        }
    }, [value])

    return (
        <label onClick={onClick}>
            <input ref={checkboxRef} type="checkbox" />
            {labelName}
        </label>
    )
}

export default Checkbox
