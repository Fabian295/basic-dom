const template = <p>This is JSX compiled to public folder app.js with config file from Babel</p> 
// const template = React.createElement('p', null, 'This is JSX from app.js via CDN')

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1 className="hello">
          Hello World!
        </h1>
      </div>
    )
  }
}

const Card = () => {
  return (
    <div>
      <h2 className="card__title">The Card Title</h2>
      <p className="card__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, fdolores!</p>
      <p className="card__price">€ 500</p>
      <footer className="card__footer">FK inc &copy; 2022</footer>
    </div>
  )
}



class MovieList extends React.Component {
  render() {
    return (
      <div>
        <h2>Movie List Collection</h2>
        <h3>
          {this.props.subTitle}
        </h3>
        <ul>
          <Movie listItem="Bourne premacy" />
          <Movie listItem="Aquaman" />
          <Movie listItem="Lord of the Rings" />
        </ul>
      </div>
    )
  }
}

const Movie = (props) => {
  // listItem =  "Star Wars"
  return (
 
      <li>
        {props.listItem}
      </li>
   
  )
}

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



/*********************************************
 *  Branch St4 - St6 ,
 *  branch St7 is at toggle.js
 ****************************************************/

 console.log('app-js running!')

 const app = {
   title: 'BLA',
   subTitle: 'Let program decide your activities',
   options: []
 }
 
 const onFormSubmit = (e) => {
   e.preventDefault()
   console.log('Form Submitted!!')
 
   const option = e.target.elements.option.value;
 
   if(option) {
     app.options.push(option)
     console.log(app.options.length)
 
     e.target.elements.option.value = '';
     render();
   }
 }
 
 const handleRemove = (e) => {
   // app.options.splice(0, app.options.length)
   // console.log(e.target)
   app.options = []
   console.log(app.options)
   console.log(app.options.length)
   render()
 }
 
 const DOMContainer = document.getElementById('app')
 const root = ReactDOM.createRoot(DOMContainer)
 
 const render = () => {
 
   const randomNum = Math.floor(Math.random() * app.options.length)
   const option = app.options[randomNum]
   console.log('randomNum:', randomNum)
   const getRandomOption = (e) => {
     console.log('app.options[option:', app.options[option])
     console.log('option:', option)
     render()
 
     alert((option))
   }
 
   const template = (
     <div>
       <h1>The BLA</h1>
       { app.subTitle && <p>{ app.subTitle }</p> }
       <p>{ app.options.length > 0 ? 'Here are your options : ' : 'There are no options!' }</p>
       <p>{ app.options.length }</p>
   
       <ol>
         { app.options.map((option, index) => {
           return (
             <li key={index}>{ option }</li>
           )
         }) }
       </ol>
   
       <form action="" onSubmit={onFormSubmit}>
         <input type="text" name="option" id="" />
         <button >Add Option</button>
       </form>
         <button  onClick={handleRemove}>Remove Option</button>
     </div>
   );
 
   root.render( template )
 };
 
 render();
 
 
/********************* *********************/ 

