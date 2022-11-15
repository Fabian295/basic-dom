class BLA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'The Bucket List App II',
      sub: 'Get all your most wanted Activities in a bucket list',
      options: ['One', 'optionTwo', 'optionThree']
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    // alert('handle Pick item!')
    const randomOption = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomOption]
    console.log(option)
  }

  handleAddOption(option) {
    console.log(option)

    if(!option) {
      return 'Enter an actual option string';
    } else if(this.state.options.indexOf(option) > -1) {
      return `There already exist a " ${option} " in your BLA list`
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        }
      })
    }

  }

  render() {

    return (
      <div>
        <Header 
        title={this.state.title}
        subtitle={ this.state.sub }
        />
        <Action 
        hasOptions={ !this.state.options.length > 0 }
        handlePick={this.handlePick}
        />
        <Options 
        handleDeleteOptions={ this.handleDeleteOptions }
        options={ this.state.options }
        />
        <AddOption 
        handleAddOption={ this.handleAddOption }
        />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subtitle }</h2>
      </div>
    )
  }
}


const Action = (props) => {

    return (
      <div>
        <button 
        onClick={ props.handlePick }
        disabled={ props.hasOptions }
        >What should I do</button>
      </div>
    )

}

// class Action extends React.Component {

//   render() {
//     return (
//       <div>
//         <button 
//         onClick={ this.props.handlePick }
//         disabled={ this.props.hasOptions }
//         >What should I do</button>
//       </div>
//     )
//   }
// }

class Options extends React.Component {
  render() {
    return (
      <ol>
        <button onClick={this.props.handleDeleteOptions}> Remove All </button>
        {
          this.props.options.map((option, index) => {
            return (
              <Option key={index} optionText={ option } />
            )
          })
        }
      </ol>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <li>{ this.props.optionText }</li>
      </div>
    )
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    // this.handleAddOption = this.handleAddOption.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.state = {
      error: undefined
    }
  }
  // handleAddOption(e) {
  handleAdd(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)
    
    // if(option) {
    //   this.props.handleAddOption(option)
    // } else {

    // }
      
      this.setState(() => {
        return {
          error,
        }
      })
    
    e.target.elements.option.value = '';
  }
  
  render() {
    return (
      <div>
        {/* <form name="option" onSubmit={ this.handleAddOption }> */}
        <form name="option" onSubmit={ this.handleAdd }>
          { this.state.error && <h4>{ this.state.error }</h4> }
          <input type="text" name="option" id="" />
          <button >Add Option</button>
        </form>
        <p>The AddOption Component</p>
      </div>
    )
  }
}

const DOMContainer = document.getElementById('app')
const root = ReactDOM.createRoot(DOMContainer)
root.render(<BLA />)