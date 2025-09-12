import { forwardRef } from "react"
import type { JSX } from "react"

type ButtonProps = {
    won: boolean
    onRoll(): void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button({ won, onRoll }, ref): JSX.Element {
        return (
            <button
                ref={ref}
                className="roll-dice"
                onClick={onRoll}>
                {won ? "New Game" : "Roll"}
            </button>
        )
    }
)
export default Button