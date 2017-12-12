import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index.js';
var rows = new Array(10).fill(-1);
var columns = new Array(10).fill(-1);
var board = new Array(10).fill(rows);
// value 1 mean X
// value 0 mean O
// value -1 mean nothing
const Cell = (props) => {
        return(
            <button className="cell" id={props.id} onClick={props.onClick}></button>
        )
}

const Board = (props) => {
    const renderRow = () => {
        return rows.map((data,index) =>
                <Cell onClick={props.onClick} key={index+1} id ={index+1}/>
        )
    }

    const renderBoard = () => {
        return columns.map((data,index) => (
                <div className="board-row" key={index+1} id ={index + 1}>
                    {renderRow()}
                </div>
            )
        )
    }
    return(
          <div className="board-game">
              {renderBoard()}
          </div>
        )
}


class Game extends Component{
    handleBold = e =>{
        var elems = document.getElementsByTagName("li");
        for (var i = 0; i<elems.length; i++) {
                elems[i].style.fontWeight = 'normal';
        }

        e.target.style.fontWeight = "bold";
    }

    renderMovelist(){
        const moveList = this.props.moveList;
        return moveList.map((data,index) =>
                    <li key={index+1} id={index} onClick={this.handleBold}>{data}</li>
                )
    }

    handleRestart = () =>{
        window.location.reload();
    }

    handleClick = e =>{
        var {turn,isEnd} = this.props;
        var moveText = "Moved to ";
        var row = e.target.parentNode.id-1;
        var column = e.target.id-1;
        //var temp = board[row];
        moveText += "col "+ e.target.id + " row " + e.target.parentNode.id;
        if(e.target.innerText === "" && isEnd === false){
            if(turn === "X"){
                //board[row][column] = 1;
                e.target.innerText = "X";
                e.target.style.color = "red";
                this.props.dispatch(actions.turnToO(moveText));
            }
            if(turn === "O"){
                //board[row][column] = 0;
                e.target.innerText = "O";
                e.target.style.color = "blue";
                this.props.dispatch(actions.turnToX(moveText));
            }
            //isEnd = false;
            if(isEnd === true){
              console.log("game ended !")
              this.props.dispatch(actions.setWinner());
            }
        }
    }

    handleReverseList = () => {
        this.props.dispatch(actions.reverseList());
    }
    checkWin(){

    }

    componentWillMount(){
    }

    render(){
        return(
            <div className="container">
            <Board onClick={this.handleClick}/>

            <div className="infor">
                <div className="status">{this.props.status} : {this.props.turn}</div>
                <button className="restart-btn" onClick={this.handleRestart}>Restart</button>

                <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round" onClick={this.handleReverseList}></span>
                </label>

                <div className="move-list">
                    Move list:
                    <ul>
                        {this.renderMovelist()}
                    </ul>
                </div>
            </div>

            </div>
        )
    }
}
const mapStateToProps = (state) =>{
  return {
    status: state.mainReducer.status,
    turn: state.mainReducer.turn,
    winner: state.mainReducer.winner,
    isEnd: state.mainReducer.isEnd,
    moveList: state.mainReducer.moveList,
  };
}
export default connect (mapStateToProps)(Game);
