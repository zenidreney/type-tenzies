import { forwardRef } from "react"

type ButtonProps = {
    won: boolean
    onRoll(): void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button( {won, onRoll} , ref) {
    //console.log(props)
    return (
        <button ref={ref} className="roll-dice" onClick={onRoll}>
            {won ? "New Game" : "Roll"}
        </button>
    )
}
)
export default Button









{/* <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button> */}