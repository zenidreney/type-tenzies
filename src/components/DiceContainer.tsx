import Die from "./Die"

function DiceContainer({ dice, hold }) {
    //console.log(props)

    const diceElements = dice.map(dieObj => (
        <Die
          key={dieObj.id}
          value={dieObj.value}
          isHeld={dieObj.isHeld}
          hold={() => hold(dieObj.id)}
        />
      ))
    
    return (
        <div className="dice-container">
            {diceElements}
        </div>
    )
}

export default DiceContainer


