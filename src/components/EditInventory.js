import React, { Component } from 'react';
import {Route, Link, Redirect} from 'react-router-dom' 

class EditInventory extends Component {

//     //UPDATE likes
//     addSupport = (recipe) => {
//         fetch(`http://localhost:3000/users/${this.props.userInfo.id}/inventories/${recipe.id}`, {
//         method: 'PUT',
//         body: JSON.stringify({likes: recipe.likes + 1}),
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type' : 'application/json'
//         }
//         }).then(res => res.json())
//         .then(resJson => {
//             const copyRecipes = [...this.state.recipe]
//             const findIndex = this.state.recipe.findIndex(recipe => recipe.id === resJson.id)
//             copyRecipes[findIndex].likes = resJson.likes;
//             this.setState({recipe: copyRecipes})
//         })
//   }

    render() {
        console.log(this.props.userInfo)
        return (
            <div className="edit">
                {this.props.userInfo === "" ? 
                    <Redirect push to="/dashboard"/>
                    : 
                    <div className="edit-inventory">
                        {this.props.userInfo 
                            ?                 
                            this.props.userInfo.inventories.map(inventories => (
                                <div className="index" key={inventories.id}>
                                    <ul>
                                        <li>{inventories.name}</li>
                                    </ul>
                                </div>
                            ))
                        :
                        ""}
                    </div>
                }
            </div>
          );
      }
    }

export default EditInventory;