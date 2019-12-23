import React from 'react'

function PlayerInput(props) {
    return (
        <form>
            <input 
                type="text" 
                placeholder="Player 1 (X)"
                value={props.data.player1}
                name="player1"
                onChange={props.handleChangeNameInput}
            />
            <input 
                type="text" 
                placeholder="Player 2 (O)"
                value={props.data.player2}
                name="player2"
                onChange={props.handleChangeNameInput}
            />
            <h3>{props.data.player1 || props.data.player2 
                ? `${props.data.player1.toUpperCase()} vs ${props.data.player2.toUpperCase()}` 
                : 'Player 1 vs Player 2'}
            </h3>
        </form>
    )
}

export default PlayerInput