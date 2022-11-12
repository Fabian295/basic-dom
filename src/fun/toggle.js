// headline
// button -text toggle hide /show
// paragraph togles from show to hide text

console.log('fun')

const par = {
  title: 'Paragraph to Toggle',
  content: `Just some demo content to show in the paragraph.
  Instead of lorem ipsum, I wrote these few lines.<br/>
  Let us get going with the assignment and make it Toggle!
  `,
  isShown: false,
}



const DOMContainer = document.getElementById('app')
const root = ReactDOM.createRoot(DOMContainer)

const parTextToggle = () => {
  par.isShown = !par.isShown;
  render()
}

const render = () => {
  const template = (
    <div>
      <h2>{ par.title }</h2>
      <button onClick={ parTextToggle }>
        { par.isShown ? 'Hide' : "Show" }
      </button>
      <p>{ par.isShown && par.content }</p>
    </div>
  );

  root.render(template);
}

render()