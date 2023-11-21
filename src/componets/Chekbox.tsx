import { FC } from "react"

interface Props {
    checked: boolean;
    setChecked: (checked: boolean) => void;
    onClick?: () => void;
}

export const Checbox:FC<Props> = ({ checked, setChecked }) => {
    // const [checked, setChecked] = useState(true)

    const handleCheck = () => {
        setChecked(!checked)
    }
    
    return (
        <div className="div-checkbox flex items-center relative ">
            <input
                className="check"
                type="checkbox"
                id="check1"
                checked={checked}
                onChange={handleCheck}
            />
            <label className="labelcheck" htmlFor="check1"> </label>
        </div>
    )
}
