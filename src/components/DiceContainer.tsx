import Die from "./Die"
import type { Dice } from "../App"
import type { JSX } from "react"

type DiceContainerProps = {
  dice: Dice[]
  hold: (id: string) => void
}

function DiceContainer({ dice, hold }: DiceContainerProps):JSX.Element {
    //console.log(props)

    const diceElements:JSX.Element[] = dice.map(dieObj => (
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


