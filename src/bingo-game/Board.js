import React from "react";
import {Square} from "./Square";
import {Dictionary} from "./Dictionary";
import {Random} from "../utility/Random";
import {Common} from "../utility/Common";
import {ResetButton} from "./ResetButton";

const boardRowSize = 5;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(boardRowSize * boardRowSize).fill(false),
            randomWordIdxArr: Random.getUniqueElementArr(boardRowSize * boardRowSize, Dictionary.length - 1),
            greens: Array(boardRowSize * boardRowSize).fill(false),
            gameOver: false
        };
    }
    
    resetBoard(){
        const initialState = {
            squares: Array(boardRowSize * boardRowSize).fill(false),
            randomWordIdxArr: Random.getUniqueElementArr(boardRowSize * boardRowSize, Dictionary.length - 1),
            greens: Array(boardRowSize * boardRowSize).fill(false),
            gameOver: false
        };
        this.setState(initialState)
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if ( !squares[i] && !this.state.gameOver ) {
        squares[i] = !squares[i]
            const detectedPattern = Common.getPatternDetectedArray(squares, boardRowSize)
            if ( detectedPattern.indexOf(true) > -1 ) {
                this.setState({squares: squares, greens: detectedPattern, gameOver: true});
            }
            else
                this.setState({ squares: squares});
        }
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                word={Dictionary[this.state.randomWordIdxArr[i]]}
                isGreen={this.state.greens[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {

        const rows = Array(boardRowSize).fill(0).map((it, row) => {
            const columns = Array(boardRowSize).fill(0).map((it, col) =>
                this.renderSquare(row * boardRowSize + col)
            )
            return (
                <div >
                    {columns}
                </div>
            )
        })

        return (
            <div>
                {rows}
                <div>
                <ResetButton
                    onClick={() => this.resetBoard()}
                />
                </div>
            </div>
        );
    }
}

export { Board };
