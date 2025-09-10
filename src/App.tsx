import { useState, useRef, useEffect } from "react"
import AriaLiveStatus from "./components/AriaLiveStatus"
import Header from "./components/Header"
import DiceContainer from "./components/DiceContainer"
import Button from "./components/Button"

import { nanoid } from "nanoid"


//import Confetti from "react-confetti"

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice())
  const buttonRef = useRef(null)

  const gameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus()
    }
  }, [gameWon])

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }))
  }

  function rollDice() {
    if (!gameWon) {
      setDice(oldDice => oldDice.map(die =>
        die.isHeld ?
          die :
          { ...die, value: Math.ceil(Math.random() * 6) }
      ))
    } else {
      setDice(generateAllNewDice())
    }
  }

  function hold(id) {
    setDice(oldDice => oldDice.map(die =>
      die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    ))
  }


  return (
    <main>
      {gameWon && <Confetti />}
      <AriaLiveStatus 
        won={gameWon}
      />
      <Header />
      <DiceContainer 
        dice={dice}
        hold={hold}
        />
      <Button
        ref={buttonRef}
        won={gameWon}
        onRoll={rollDice} />
    </main>
  )
}