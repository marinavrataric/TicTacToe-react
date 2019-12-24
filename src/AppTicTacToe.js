import React, { Component } from 'react'

import PlayerInput from './PlayerInput'
import TictactoeGrid from './TictactoeGrid'

class AppTicTacToe extends Component {
    constructor(){
        super()
        this.state = {
            value: 'X',
            player1: '',
            player2: ''
        }
        this.handleChangeNameInput = this.handleChangeNameInput.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    handleChangeNameInput(e){
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    onClick(e){
        let grid = document.querySelectorAll('.grid')

        grid.forEach( grid => {
            if (e.target.value === grid.value && grid.innerHTML === '') 
            {
                if (this.state.value == 'X') {
                    grid.style.color = 'rgb(194, 15, 15)'
                } else {
                    grid.style.color = 'rgb(85, 34, 109)'
                }

                this.setState(prevState => {
                    prevState.value === 'X' ? prevState.value = 'O' : prevState.value = 'X'
                    return {
                        value: prevState.value
                    }
                })
                if (this.state.player1 != '' && this.state.player2 != '') {
                    grid.innerHTML = this.state.value
                } else {
                    grid.innerHTML = ''
                    alert('Please, input players to start the game.')
                }
            } 
            if (e.target.value === 'reset') {
               this.resetGame()
            }
        })   
        this.play()
    }

    play(){
        var box1 = document.getElementById('1')
        var box2 = document.getElementById('2')
        var box3 = document.getElementById('3')
        var box4 = document.getElementById('4')
        var box5 = document.getElementById('5')
        var box6 = document.getElementById('6')
        var box7 = document.getElementById('7')
        var box8 = document.getElementById('8')
        var box9 = document.getElementById('9')

        if (box1.innerHTML != '' && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) { 
            this.isWinner()
            box1.style.backgroundColor = 'yellow'   
            box2.style.backgroundColor = 'yellow'            
            box3.style.backgroundColor = 'yellow'     
        } 
        else if (box1.innerHTML != '' && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
            this.isWinner()
            box1.style.backgroundColor = 'yellow'   
            box4.style.backgroundColor = 'yellow'            
            box7.style.backgroundColor = 'yellow'     
        }
        else if (box1.innerHTML != '' && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
            this.isWinner()
            box1.style.backgroundColor = 'yellow'   
            box5.style.backgroundColor = 'yellow'            
            box9.style.backgroundColor = 'yellow'     
        }
        else if (box4.innerHTML != '' && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
            this.isWinner()
            box4.style.backgroundColor = 'yellow'   
            box5.style.backgroundColor = 'yellow'            
            box6.style.backgroundColor = 'yellow'            
        } 
        else if (box7.innerHTML != '' && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
            this.isWinner()
            box7.style.backgroundColor = 'yellow'   
            box8.style.backgroundColor = 'yellow'            
            box9.style.backgroundColor = 'yellow'
        } 
        else if (box3.innerHTML != '' && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
            this.isWinner()
            box3.style.backgroundColor = 'yellow'   
            box5.style.backgroundColor = 'yellow'            
            box7.style.backgroundColor = 'yellow'
        } 
        else if (box2.innerHTML != '' && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
            this.isWinner()
            box2.style.backgroundColor = 'yellow'   
            box5.style.backgroundColor = 'yellow'            
            box8.style.backgroundColor = 'yellow'
        } 
        else if (box3.innerHTML != '' && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
            this.isWinner()
            box3.style.backgroundColor = 'yellow'   
            box6.style.backgroundColor = 'yellow'            
            box9.style.backgroundColor = 'yellow'
        } 
        else if (box1.innerHTML != '' && box2.innerHTML != '' && box3.innerHTML != '' && box4.innerHTML != '' && 
        box5.innerHTML != '' && box6.innerHTML != '' && box7.innerHTML != '' && box8.innerHTML != '' && box9.innerHTML != '') {
            this.isTie()
        }
    }

    isWinner() {
        let winner
       
        if (this.state.value === 'X') {
            winner = `Winner is ${this.state.player1}`
        } else if (this.state.value === 'O') {
            winner = `Winner is ${this.state.player2 }`
        } else if (this.state.value === '') {
            winner = 'Play again'
        }

        document.querySelector('.winner').innerHTML = winner
        this.setState({ 
            value: '' 
        })
    }

    isTie(){
        document.querySelector('.winner').innerHTML = 'Tie, play again.'
        this.setState({ 
            value: '' 
        })
    }

    resetGame() {
        let grid = document.querySelectorAll('.grid')
        grid.forEach( grid => { 
            grid.innerHTML = ''
            grid.style.backgroundColor = 'white'
        })
        
        document.querySelector('.winner').innerHTML = ''
        this.setState({
            value: 'X'
        })
    }

    nextPlayer(){
        let nextPlayer
        if(this.state.player1 != '' && this.state.player2 != ''){
            if(this.state.value === 'X'){
                nextPlayer =`Turn on: ${this.state.player1}`
            }else if(this.state.value === 'O') {
                nextPlayer = `Turn on: ${this.state.player2}`
            }
        }
        return nextPlayer
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1 className="title tic">Tic</h1>
                    <h1 className="title tac">Tac</h1>
                    <h1 className="title toe">Toe</h1>
                </header>
                
                <PlayerInput 
                    data = {this.state}
                    handleChangeNameInput = {this.handleChangeNameInput}
                />

                <h5 className='nextPlayer'>{this.nextPlayer()}</h5>
                <h1 className="winner"></h1>

                <TictactoeGrid onClick = {this.onClick} />

                <button 
                    className="btnPlayAgain" 
                    onClick={this.onClick}
                    value="reset"
                >Play again</button>
            </div>
        )
    }
}

export default AppTicTacToe