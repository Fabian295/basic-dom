console.log('app-js running!')

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: true,
    }
    this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck() {
    this.setState({
      checked: !this.state.checked
    })

  }
  render() {
    let msg
    if(this.state.checked) {
      msg = 'CHECKED'
    } else {
      msg = "NOT CHECKED"
    }
    return (
      <div>
        <input  type="checkbox" 
        onChange={this.handleCheck}
        defaultChecked={this.state.checked} />
        <p>The box is {msg}</p>
      </div>
    )
  }
}

const DOMContainer = document.getElementById('app')
const root = ReactDOM.createRoot(DOMContainer)
root.render(<Checkbox  />)