import React from 'react'

class TacoForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'d-name',
      price:'d-price'
    }
  }

  handleChange=(e)=>{
    console.log('value:', e.target.value)
   //lets get price working
   this.setState({
     //hardcode price and set equal to e.target.value
     price:e.target.value 
   })
  }
  render(){
    return(
      <div>
      <h1>TacoForm</h1>
        <form>
          <p>name</p>
          <input value={this.state.name} />
          <p>price</p>
          <input value={this.state.price}/>
          <button>add</button>
        </form>
      </div>
    )
  }
}
export default TacoForm