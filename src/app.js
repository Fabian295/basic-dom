console.log('app-js for react!')
// const template = <p>This is JSX compiled to public folder app.js with config file from Babel</p> 
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
      <p className="card__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, dolores!</p>
      <p className="card__price">€ 500</p>
      <footer className="card__footer">FK inc &copy; 2022</footer>
    </div>
  )
}

const DOMContainer = document.getElementById('app')
const root = ReactDOM.createRoot(DOMContainer)
root.render(<Card />)