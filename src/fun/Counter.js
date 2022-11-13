class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.state = {
      count: 0,
    }
  }

  handleAddOne() {
    console.log('handleAddOne')
    this.setState((prevState) => {
      console.log(prevState)
      return {
        count: prevState.count + 10,
      }
    })
  }

  handleMinusOne() {
    console.log('handleMinusOne')
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset()  {
    console.log('handleReset')
    this.setState( () => {
      
        return {
          count: 0
        }
  } )
  }
  render() {
    return (
      <div>
        <h1>Counter: </h1>
        <h2>{ this.state.count }</h2>
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