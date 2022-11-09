console.log('app-js for react!')
{/* <p>This is JSX from app.js</p> */}
const template = React.createElement('p', null, 'This is JSX from app.js')

const DOMContainer = document.getElementById('app')
const root = ReactDOM.createRoot(DOMContainer)
root.render(template)