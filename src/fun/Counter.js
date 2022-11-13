class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleResset = this.handleReset.bind(this)
  }

  handleAddOne() {
    console.log('handleAddOne')
  }

  handleMinusOne() {
    console.log('handleMinusOne')
  }

  handleReset()  {
    console.log('handleReset')
  } 

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={ this.handleAddOne }>+</button>
        <button onClick={ this.handleMinusOne }>-</button>
        <button onClick={ this.handleReset }>RESET</button>
      </div>
    )
  }
}

const DOMContainer = document.getElementById('app')
const root = ReactDOM.createRoot(DOMContainer)
root.render(<Counter />)