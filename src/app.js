console.log('app-js for react!')
const template = <p>This is JSX compiled to public folder app.js with config file from Babel</p> 
// const template = React.createElement('p', null, 'This is JSX from app.js via CDN')

const DOMContainer = document.getElementById('app')
const root = ReactDOM.createRoot(DOMContainer)
root.render(template)