import React from 'react'

export default class SearchBoxRecipes extends React.Component{
    constructor(){
        super();
        this.state = {
            search:'',
            data:[],
            recipiestype:[{"recipe":"chicken","id":0},{"recipe":"lunch","id":1},{"recipe":"Dinner","id":2},{"recipe":"Breakfast","id":3},],
            checkdetails:false,
              value:'MealType'
        }
      this.OnchangeHandlar = this.OnchangeHandlar.bind(this)
      this.onclickHandler = this.onclickHandler.bind(this)  
    }
    OnchangeHandlar(event){
        this.setState({search:event.target.value})
    }

    onclickHandler(){
        console.log("handle",this.state.search)
        fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=efdc73a3&app_key=fb871ecb7d51a13c94eb04149e09f4a7&from=0&to=3`,{
            method:'GET',
        }).then((response) => response.json()).then((result)=>{
            console.log("search data",result.hits)
            this.setState({data:result.hits},() => {
                localStorage.setItem("searchData",JSON.stringify(this.state.data)) 
            })
            localStorage.setItem("search",this.state.search)
            this.props.history.push("/recipes")
        })
    }
      handleChange = (event) => {
          this.setState({value:event.target.value},()=>{
              console.log("meal",this.state.value)
          })
      }

    render(){
        return(
            <div className="container" style={{marginTop:"30px"}}>
                <h3>Find Your Best Recipe</h3>
                <div style={{display:'flex'}}>
                <input type="text" id="myInput" onChange={this.OnchangeHandlar} placeholder="Search the Recipe.." title="Type in a name" style={{outline:'none'}} />
                <button className="search_btn" onClick={this.onclickHandler} style={{height:'50px',outline:'none',width: "100px"}}>search</button>
                </div>
                <div className="" style={{display:'flex',justifyContent:'space-around',marginTop:"20px"}}>
                    <div>
                    <lable>MealType</lable>
                <select className="select_option" value={this.state.value} onChange={this.handleChange}>
                    {this.state.recipiestype.map((item,i) => 
                     <option value={item.recipe}>{item.recipe}</option>
                    )}
                   
                </select>
                </div>
               
                   
                </div>
            </div>
        )
    }
}
