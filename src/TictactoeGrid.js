import React from 'react'

function TictactoeGrid(props) {
    return (
        <div>
            <button 
                className="grid" 
                id="1"
                onClick={props.onClick} 
                value="1">
            </button>
            <button 
                className="grid" 
                id="2"
                onClick={props.onClick} 
                value="2">
            </button>
            <button 
                className="grid" 
                id="3"
                onClick={props.onClick} 
                value="3">
            </button>
            <button 
                className="grid" 
                id="4"
                onClick={props.onClick} 
                value="4">
            </button>
            <button 
                className="grid" 
                id="5"
                onClick={props.onClick} 
                value="5">
            </button>
            <button 
                className="grid" 
                id="6"
                onClick={props.onClick} 
                value="6">
            </button>
            <button 
                className="grid" 
                id="7"
                onClick={props.onClick} 
                value="7">
            </button>
            <button 
                className="grid" 
                id="8"
                onClick={props.onClick} 
                value="8">
            </button>
            <button 
                className="grid" 
                id="9"
                onClick={props.onClick} 
                value="9">
            </button>
        </div>
    )
}

export default TictactoeGrid