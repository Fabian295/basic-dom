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
  render() {

    const title = 'The B.L. App';
    const sub = 'Get all Activities you want in a list';
    const options = ['optionOne', 'optionTwo', 'optionThree']

    return (
      <div>
        <Header 
        title={title}
        subtitle={ sub }
        />
        <Action />
        <Options 
        options={ options }
        />
        <AddOption 
        
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
  handlePick() {
    alert('handle Pick item!')
  }

  render() {
    return (
      <div>
        <button onClick={ this.handlePick }>What should I do</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options)
    // alert('Reemove qll')
    this.props.options = [];
  }
  render() {
    return (
      <ol>
        <button onClick={this.handleRemoveAll}> Remove All </button>
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
  addOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    
    if(option) {
      alert(option)
    }

  }
  
  render() {
    return (
      <div>
        <form name="option" onSubmit={ this.addOption }>
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