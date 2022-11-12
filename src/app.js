
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

