import React from 'react'

export default class RecipesItems extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.RecipesData()

    }
    RecipesData = () => {
        let valueData = localStorage.getItem("searchData")
        this.setState({data:JSON.parse(valueData)},() => {
            console.log("respecies",this.state.data)
        })
    }

    RecipeDetails = () => {
        let details = []
        for(let[key,value] of Object.entries(this.state.data)){
            console.log("recipe",value.recipe.label)
            details.push(<div className="col-md-4 " >
                <img src={value.recipe.image}/>
            <p className="text_it">{value.recipe.label}</p>
        </div>)
        }
        return details
    }

    render(){
        let title = localStorage.getItem('search')
        return(
            <div className="container" style={{marginTop:'30px'}}>
                <h3>Recipes Items {title}</h3>
                <div className="row col-md-12" style={{marginTop:"30px"}}>
                   {this.RecipeDetails()}
                </div>

            </div>
        )
    }
}