

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            value: null
        }
    }

    render() {
        return (
            <button className="square" onClick={() => {console.log(this.stat); }}>
                {this.props.value}
            </button>
        )
    }
}


class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />
    }

    render() {
        const status = 'Next player: X'

        return (
            <div>
                <div className="status">{status}</div>
                <div className='board-row'>
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
           
        )
    }
}

class Game extends React.Component {
    render() {
      return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
        </div>
      );
    }
  }


ReactDOM.render(<Game />, document.getElementById("root"));