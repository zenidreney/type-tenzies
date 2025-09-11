import type { JSX } from "react"

function Header():JSX.Element {
    return (
        <>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </>

    )
}
export default Header


