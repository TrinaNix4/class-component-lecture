import { render } from '@testing-library/react'
import React from 'react'
import TacoForm from './TacoForm';

class List extends React.Component{
    constructor(props){
      super(props);
      //init state
      //have a 'tacos' state that has a name and a price
      this.state={
        tacos:[
          {name:'beef', price:2.99},
          {name: 'chicken' , price:2.99}, 
        ],
        showForm: false,
      };
    }
  
    addTaco =(taco) =>{
      //db call (skipping)

      //update state
      let updateTacos = [taco, ...this.state.tacos]
      this.setState({
        tacos:updateTacos
      })
      //what is would look like in a functional component
      //let updateTacos = [taco,...tacos]
      //this.setTacos(updateTacos)

    }

    deleteTaco = (tacoName)=>{
      // DELETE FROM DB SKIPPED
      // REMOVE FROM STATE
      let filteredTacos = this.state.tacos.filter(t => t.name !== tacoName)
      // setState update state trigger render to be called 
      this.setState({
          tacos:filteredTacos
      })
  }
      //class component so need 'this' keyword
      //tacos is an array of obj with a name and price
      
      renderTacos=()=>{
        //want to grab the tacos and map over them; 
        //use this.state to do that. this.state.tacos
        return this.state.tacos.map(t=>{
            return(
              <div className='border'>
                <h1>{t.name}</h1>
                <p>${t.price}</p>
                <button onClick={()=>this.deleteTaco(t.name)}>delete</button>
              </div>
            );
         });
      };
      //had to make an arrow function cause it said 'this undefined' in error message 
      toggleForm=()=>{
        this.setState({
          showForm: !this.state.showForm 
        })
      }
  //have to define render
   render(){
    //could be cleaner but using code below  
    //const{showForm} = this.state then can clean up code and just have {showForm &&}
      return(
      <div>

      <button onClick={this.toggleForm}>{this.state.showForm ? 'hide' : 'show'}</button>
      {/* go grab the value of showForm state, if it's true, render the taco form
      if false, don't render the taco form */}
      {/* if it's false, don't show it, if it's true, show it */}
      {this.state.showForm && <TacoForm addTaco={this.addTaco} />}
        <h1>List</h1>
      
        {/* call the function renderTacos */}
        {this.renderTacos()}
      </div>
    );
      }
    }

      export default List; 
