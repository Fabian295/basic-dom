// console.log('app-js running!')

// const app = {
//   title: 'BLA',
//   subTitle: 'Let program decide your activities',
//   options: []
// }

// const onFormSubmit = (e) => {
//   e.preventDefault()
//   console.log('Form Submitted!!')

//   const option = e.target.elements.option.value;

//   if(option) {
//     app.options.push(option)
//     console.log(app.options.length)

//     e.target.elements.option.value = '';
//     render();
//   }
// }

// const handleRemove = (e) => {
//   // app.options.splice(0, app.options.length)
//   // console.log(e.target)
//   app.options = []
//   console.log(app.options)
//   console.log(app.options.length)
//   render()
// }

// const DOMContainer = document.getElementById('app')
// const root = ReactDOM.createRoot(DOMContainer)

// const render = () => {

//   const randomNum = Math.floor(Math.random() * app.options.length)
//   const option = app.options[randomNum]
//   console.log('randomNum:', randomNum)

//   const getRandomOption = (e) => {
//     console.log('app.options[option:', app.options[option])
//     console.log('option:', option)
//     render()
//     alert((option))
//   }

//   const template = (
//     <div>
//       <h1>The BLA</h1>
//       { app.subTitle && <p>{ app.subTitle }</p> }
//       <p>{ app.options.length > 0 ? 'Here are your options : ' : 'There are no options!' }</p>
//       <p>{ app.options.length }</p>

  
//       <form action="" onSubmit={onFormSubmit}>
//         <input type="text" name="option" id="" />
//         <button >Add Option</button>
          
//         <ol>
//           { app.options.map((option, index) => {
//             return (
//               <li key={index}>{ option }</li>
//             )
//           }) }
//         </ol>
//       </form>
       
//         <p>
//         <button  
//         onClick={handleRemove}
//         disabled={ app.options.length === 0 }
//         >Remove Option</button>
//           <button
//           onClick={ getRandomOption }
//           >
//           Get Random Option
//           </button>
//         </p>
//     </div>
//   );

//   root.render( template )
// };

// render();


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

    // const title = 'The Bucket List App II';
    // const sub = 'All your most wanted Activities!!';
    // const options = ['optionOne', 'optionTwo', 'optionThree']

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

class Action extends React.Component {

  render() {
    return (
      <div>
        <button 
        onClick={ this.props.handlePick }
        disabled={ this.props.hasOptions }
        >What should I do</button>
      </div>
    )
  }
}

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