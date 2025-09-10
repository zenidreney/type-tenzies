function AriaLiveStatus(props) {
    return (

        <div aria-live="polite" className="sr-only">
            {props.won && <p>Congratulations! You won! Press "New Game" to start again.</p>}
        </div>

    )
}

export default AriaLiveStatus

