console.log('App.js is running!');
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit=(e)=>
{ e.preventDefault();
    const option=e.target.elements.options.value;
    if(option)
   { app.options.push(option);
    e.target.elements.options.value='';
    render();
   }
};
//15
const onMakeDecision=()=>{
 const randomNum=Math.floor(Math.random()*app.options.length);
 const option=app.options[randomNum];
alert(option);
 //console.log(randomNum);
};
const onRemoveAll= () =>{
app.options=[];
    render();
};
const numbers=[11,1,2,1];
const appRoot = document.getElementById('app');
const render= () =>{
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <button disabled={app.options.length===0} onClick={onMakeDecision}>What I Should Do?</button>
    <button onClick={onRemoveAll}>Remove all</button>
    {
     /*   numbers.map((number) =>{
         return <p key={number}>Number:{number}</p>
        })*/
    }
    <ol>
     {
         app.options.map((option)=>{
             return <li key={option}>{option}</li>
         })
     }
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="options"></input>
        <button>Add Options</button>     
    </form>
  </div>
);
ReactDOM.render(template,appRoot);
};
render();