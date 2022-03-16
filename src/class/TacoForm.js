import React from 'react'

class TacoForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'d-name',
      price:'d-price',
    }
  }

  handleChange=(e)=>{
    console.log('value:', e.target.value)
    console.log('name:', e.target.name)
   //lets get price working
   this.setState({
     //hardcode price and set equal to e.target.value
     //[price:e.target.value] 
     //instead 
      [e.target.name]:e.target.value //evaluate what's in the bracket
  })           //if e.target.name is 'price' it will evaluate that and make that key 'price'
             }             //the value will be the thing from my form  
  handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        // use addTaco prop to add
        this.props.addTaco(this.state)
    }
  render(){
    return(
      <div>
      <h1>TacoForm</h1>
        <form onSubmit={this.handleSubmit}>
          <p>name</p>
                    <input name='name' value={this.state.name} onChange={this.handleChange}/>
          <p>price</p>
                    <input name='price' value={this.state.price} onChange={this.handleChange} />
          <button>add</button>
        </form>
      </div>
    )
  }
}
export default TacoForm