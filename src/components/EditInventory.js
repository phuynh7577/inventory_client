import React, { Component } from 'react';
import {Route, Link, Redirect} from 'react-router-dom' 
import userService from "../utils/userService"


class EditInventory extends Component {
    state = {
        filteredCategory: "all",
        date: !this.props.userInfo ? "" : this.props.userInfo[0].date,
        inputDate: true
    }

    // handle category change and if date input date should populate or not.
    handleCategoryChange = e => {
        if (e.target.value === "all") {
            this.setState({
                inputDate: true,
                filteredCategory: e.target.value
            })
        }
        else {
            this.setState({
                inputDate: false,
                filteredCategory: e.target.value
            })
        }
        console.log(this.state.inputDate)
    }

    // handle date change
    handleDateChange = e => {
        this.setState({
          date: e.target.value
        })
      };

    
        // delete/destroy

//   handleDelete = (inventory) => {
//     fetch(`http://localhost:3000/users/${userService.getUser().id}/inventories/${inventory.id}`, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       }
//     })
//   .then(json => {
//     const inventory = this.props.userInfo.filter(userInfo => userInfo.id !== userInfo.id)
//     this.setState({inventory})
//     console.log( inventory)
//   })
//   .catch(error => 
//     console.log(error)
//     )
// }



    render() {
        console.log(this.props.userInfo)
        console.log(this.state.date)
        console.log(this.state.filteredCategory)
        return (
            <div className="edit">
                {this.props.userInfo === null ? 
                    <Redirect push to="/dashboard"/>
                    : 
                    <div>
                            <select onChange={this.handleCategoryChange} name="category" value={this.state.filteredCategory} id="filteredCategory">
                                    <option value="all">All</option>
                                    <option value="Beer">Beer</option>
                                    <option value="Wine">Wine</option>
                                    <option value="Hard Cider">Hard Cider</option>
                                    <option value="Mead">Mead</option>
                                    <option value="Sake">Sake</option>
                                    <option value="Gin">Gin</option>
                                    <option value="Brandy">Brandy</option>
                                    <option value="Whiskey">Whiskey</option>
                                    <option value="Rum">Rum</option>
                                    <option value="Tequila">Tequila</option>
                                    <option value="Vodka">Vodka</option>
                                    <option value="Absinthe">Absinthe</option>
                                    <option value="Everclear">Everclear</option>
                                </select>

                                            {/* Render if input is false */}
                            {this.state.inputDate === false ? 
                                <input 
                                    type="text" 
                                    onChange={this.handleDateChange}
                                    value={this.state.date}
                                    id="date"
                                    placeholder="YYYY-MM-DD"
                                    name="date"
                                    />
                                    : 
                                    null
                                }
                                

                                <div className="edit-inventory">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th></th>
                                                <th className="table-date">Input Date</th>
                                                <th>Type</th>
                                                <th>Inventory</th>
                                                <th>QTY</th>
                                                <th>Price Per Item</th>
                                                <th>Total Cost</th>
                                            </tr>

                                            {this.state.filteredCategory === "all" ? this.props.userInfo
                                                .map(inventories => (
                                                    <>
                                                    <tr key={inventories.id} className="info" id={inventories.id % 2 === 0 ? "dos" : "uno"}>
                                                        <td><img className="x" onClick={() =>this.props.handleDelete(inventories)} src="../x.png" width="22px"/></td>
                                                        <td className="table-date">{inventories.date}</td>
                                                        <td>{inventories.category}</td>
                                                        <td>{inventories.name}</td>
                                                        <td>{inventories.qty}</td>
                                                        <td><span>$</span>{inventories.price_per_item}</td>
                                                        <td><span>$</span>{inventories.total_cost}</td>
                                                    </tr>
                                                    </>
                                            ))
                                            :
                                            <>
                                            {this.props.userInfo
                                                .filter(inventories => inventories.category === `${this.state.filteredCategory}` && inventories.date === `${this.state.date}`)
                                                .map(inventories => (
                                                    <tr key={inventories.id} className="info" id={inventories.id % 2 === 0 ? "dos" : "uno"}>
                                                        <td className="table-date">{inventories.date}</td>
                                                        <td>{inventories.category}</td>
                                                        <td>{inventories.name}</td>
                                                        <td>{inventories.qty}</td>
                                                        <td><span>$</span>{inventories.price_per_item}</td>
                                                        <td><span>$</span>{inventories.total_cost}</td>
                                                    </tr>
                                                ))}
                                            </>
                                            }
                                        </tbody>
                                    </table>
                                    </div>




                    </div>
                }
            </div>
          );
      }
    }

export default EditInventory;



{/* <>
                                            {this.props.userInfo
                                                .filter(inventories => inventories.category === `${this.state.filteredCategory}` && inventories.date === `${this.state.date}`)
                                                .map(inventories => (
                                                    <tr key={inventories.id} className="info" id={inventories.id % 2 === 0 ? "dos" : "uno"}>
                                                        <td className="table-date">{inventories.date}</td>
                                                        <td>{inventories.category}</td>
                                                        <td>{inventories.name}</td>
                                                        <td>{inventories.qty}</td>
                                                        <td><span>$</span>{inventories.price_per_item}</td>
                                                        <td><span>$</span>{inventories.total_cost}</td>
                                                    </tr>
                                                ))}
                                            </> */}








// `${this.state.startDate}`


                        // {this.props.userInfo 
                        //     ?                 
                        //     this.props.userInfo.map(inventories => (
                        //         <div className="index" key={inventories.id}>
                        //             <ul>
                        //                 <li>{inventories.name}</li>
                        //             </ul>
                        //         </div>
                        //     ))
                        // :
                        // ""} 







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