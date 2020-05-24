import React, { Component } from 'react';
import {Route, Link, Redirect} from 'react-router-dom' 

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditInventory extends Component {
    state = {
        filteredCategory: "all",
        startDate: new Date()
    }

    handleCategoryChange = e => {
            this.setState({
                filteredCategory: e.target.value
            })
            // console.log(e.target.value)
            // console.log(this.state.filteredCategory)
    }

    handleDateChange = (event, date) => {
        let formattedDate = this.formatDate(date);
        console.log(formattedDate);
        this.setState({
            startDate: formattedDate
        });
    };

    formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}





    render() {
        
        console.log(this.state.startDate)
        console.log(this.state.filteredCategory)
        return (
            <div className="edit">
                {this.props.userInfo === "" ? 
                    <Redirect push to="/dashboard"/>
                    : 
                    <div className="edit-inventory">
                        {/* <form action=""></form> */}
                            <select onChange={this.handleCategoryChange} name="category" value={this.state.filteredCategory} id="filteredCategory">
                                    <option value="all">Type</option>
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



                                <DatePicker
                                    dateFormat="yyyy-MM-dd"
                                    selected={this.state.startDate}
                                    onChange={this.handleDateChange}

    
                        
                                />






                            {/* <p>{this.props.userInfo.filter(inventories => 
                                inventories.category === `${this.state.filteredCategory}` && inventories.date === "2020-05-23").map(filterName => (
                                        <li>{filterName.name}</li>
                                    ))}</p> */}


                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th className="table-date">Input Date</th>
                                                <th>Inventory</th>
                                                <th>QTY</th>
                                                <th>Price Per Item</th>
                                                <th>Total Cost</th>
                                            </tr>

                                            {this.state.filteredCategory === "all" ? this.props.userInfo.map(inventories => (
                                            <tr key={inventories.id} className="info" id={inventories.id % 2 === 0 ? "dos" : "uno"}>
                                                <td className="table-date">{inventories.date}</td>
                                                <td>{inventories.name}</td>
                                                <td>{inventories.qty}</td>
                                                <td><span>$</span>{inventories.price_per_item}</td>
                                                <td><span>$</span>{inventories.total_cost}</td>
                                            </tr>
                                            ))
                                            :
                                            <>
                                            {this.props.userInfo
                                                .filter(inventories => inventories.category === `${this.state.filteredCategory}` && inventories.date === "2020-05-23")
                                                .map(inventories => (
                                                    <tr key={inventories.id} className="info" id={inventories.id % 2 === 0 ? "dos" : "uno"}>
                                                        <td className="table-date">{inventories.date}</td>
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
                }
            </div>
          );
      }
    }

export default EditInventory;




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