class IndecisionApp extends React.Component{
    //to register event by binding current object 
    constructor(props){
      //setting parent  attributes
      super(props);
      //make event handler to have current object reference
      this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
      this.handlePick=this.handlePick.bind(this);
      this.handleAddOption= this.handleAddOption.bind(this);
      //options will change so state use to determine changes
      //this is defaultstate
      this.state={
        options:[]
      };
    }
    
    //child to parent data possible using function passing as props 
    //and the child will call this function to change option
    //tomodify data in parent 
  handleDeleteOptions(){
    this.setState(() => {
     return {
       options: []
     };
   });
  }
  
  handlePick(){
    const randomNum=Math.floor(Math.random()*this.state.options.length);
   const option=this.state.options[randomNum];
  alert(option);
  }
  
  handleAddOption(option)
  { if(!option) {
     return 'enter valid ';
    }
    else if(this.state.options.indexOf(option)>-1){
   return 'already exist';
    }
    this.setState((prevState) => {
     return { 
       options: prevState.options.concat(option)
  };
    });
  }
  render(){
      const title='Indecision App';
    const subtitle='Put your life in the hands of a computer';
    //now options will change help of state which rerender whenever state changes
    //const options=['one','two','three'];
    //now to pass option use this.state
    //action needs to chck length>0 if yes then show button   
    return (
        <div>
      <Header title={title} subtitle={subtitle}/>
      <Action
      hasOptions={this.state.options.length >0}
      handlePick={this.handlePick}
      />
      <Options 
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOption 
      handleAddOption={this.handleAddOption}
      />
        </div>
      );
    } 
    }
    const Header= (props) => {
      return (
        <div>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </div>
      );
  
    }
  
   
  class Action extends React.Component{
  
    render(){
    return (
      <div>
        <button 
        disabled={!this.props.hasOptions}
        onClick={this.props.handlePick}>What should I Do?</button>
      </div>
    );
  } 
  }
  
  class Options extends React.Component{
    //now remove func  so no need constructor to bind and this func
    /*handleRemoveAll(){
      alert('removed');}*/
    render(){
      return (
        <div>
         <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
         { this.props.options.map((option)=> <Option key={option} optionText={option}/>)}
          </div>
      );
    } 
    }
    class Option extends React.Component{
      render(){
        return (
          <div>
          Option:{this.props.optionText}
           </div>
        );
      } 
      }
    class AddOption extends React.Component{
      constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
         error:undefined
        };
      }
      handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);
        this.setState(() =>{
         return {
            error
         };
        });
      }
      render(){
        return (
          <div>
            {this.state.error&&<p>{this.state.error}</p>}
           <form onSubmit={this.handleAddOption}>
           <input type="text" name="option"></input>
           <button>AddOption</button>
           </form>
           </div>
        );
      } 
      }
      
    
  const appRoot = document.getElementById('app');
  
  ReactDOM.render(<IndecisionApp />,appRoot);