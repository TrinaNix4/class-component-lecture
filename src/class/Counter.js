import React from 'react'


class Counter extends React.Component{

//initializer
constructor(props){
  super(props) //calling constructor in the react component class
console.log('Counter constructor called')
//this refers to this instance of the class 
//this.state (for the state) and an js object
this.state={count:0}
}
//defined by react component class
componentDidMount(){
      console.log('componentDidMount: Counter class mounted')
}
//use arrow functions for now (binds this)
//esp with event handlers: use arrow functions
add = ()=> {
  //want to setState here; change state; 
  //setState does 2 things; updates state object, and 
  //whenever that happens, render is called
  this.setState({
    count: this.state.count + 1 
  })

}


  //when i extend from react component
  //i must define the render method 
  //since in  a class only need to call method
  render(){
    console.log('counter render method called')
      return(
        <div className="border">
          <h1>Counter</h1>
          {/* in this instance, look at the state object, and grab the count key */}
          <p>count: {this.state.count}</p> 
          {/* take "this" component and call the add method */}
          <button onClick={this.add}>add</button>

        </div>
      )
  }
}

export default Counter

//take this instance, call the add method and for this instance,
//call teh set state method, set count equal to the instance
//that clicked it, grab that state's count and add 1
//and now counter works 


//when add is clicked render method is called and state is updating 

//same basic process in functional and class components 
//there's an event, you change the state, and that triggers a rerender