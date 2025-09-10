function Button(props) {
    console.log(props)
    return (
        <button ref={props.ref} className="roll-dice" onClick={props.onRoll}>
                {props.won ? "New Game" : "Roll"}
            </button> 
    )
}

export default Button









{/* <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button> */}