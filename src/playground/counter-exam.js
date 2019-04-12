let count = 0;
const addOne = () => {
    count++;
    renderCountApp();
  //console.log('addOne');
};
const minusOne = () => {
  count--;
  renderCountApp();
    //console.log('minusOne');
};
const reset = () => {
    count=0;
    renderCountApp();
  //console.log('reset');
};


const renderCountApp =()=>{
         const templateTwo = (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={addOne}>+1</button>
          <button onClick={minusOne}>-1</button>
          <button onClick={reset}>reset</button>
        </div>
);
ReactDOM.render(templateTwo, appRoot);
}
renderCountApp();