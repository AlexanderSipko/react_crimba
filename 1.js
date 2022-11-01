
/* 
    - Create a new h1 lement
    - Give it some textContnetn
    - Giv it a class name of "header"
    - append it as child of the div#root  
*/

/*
const h1 = document.createElement('h1')
h1.textContent = 'Some text there'
h1.classList.add('header')
document.querySelector('#root').append(h1)
*/

/*
    Create a navbar in JSX
    - 
*/

// class HelloMessage extends React.Component {
//     render() {
//       return <div>Hello {this.props.name}</div>;
//     }
//   }
  
//   ReactDOM.render(<HelloMessage name="Alex" />, document.querySelector('#root'));

// const page = (
//     <nav>
//         <h1>website</h1>
//         <ul>
//             <li>Prising</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )



// ReactDOM.render(
//     page
//     , document.querySelector('#root'))


// JSX


class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }
  
class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }

    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div>{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
  ReactDOM.render(<Game />, document.getElementById("root"));
  

