type AriaLiveStatusProps = {
    won: boolean
}

function AriaLiveStatus({ won }: AriaLiveStatusProps) {
    return (

        <div aria-live="polite" className="sr-only">
            {won && <p>Congratulations! You won! Press "New Game" to start again.</p>}
        </div>

    )
}

export default AriaLiveStatus

