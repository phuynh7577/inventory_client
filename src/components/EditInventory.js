import React, { Component } from 'react';
import {Redirect} from 'react-router-dom' 
import Inventory from "./Inventory"

class EditInventory extends Component {
    state = {
        filteredCategory: "all",
    }

    // handle category change and if date input date should populate or not.
    handleCategoryChange = e => {
        if (e.target.value === "all") {
            this.setState({
                filteredCategory: e.target.value
            })
        }
        else {
            this.setState({
                filteredCategory: e.target.value
            })
        }
        console.log(this.state.inputDate)
    }

    // // handle date change
    // handleDateChange = e => {
    //     this.setState({
    //       date: e.target.value
    //     })
    //   }    

    render() {
        return (
            <div className="edit">
                {this.props.userInfo === null ? 
                <Redirect push to="/dashboard"/>
                : 
                <>
                    <div className="edit-options">
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
                        <h4>*Click on name to update your inventory.</h4>          
                    </div> 
                    <ul className="edit-info info header">
                        <li></li>
                        <li>Type</li>
                        <li>Name</li>
                        <li>Quanity</li>
                        <li>Price</li>
                        <li>Total Cost</li>
                    </ul>
                    <>
                        {this.state.filteredCategory === "all" ? this.props.userInfo
                            .map(userInfo => 
                            <Inventory 
                                key={userInfo.id} 
                                userInfo={userInfo}
                                handleDelete={this.props.handleDelete}
                                handleUpdate={this.props.handleUpdate}/>)
                        :
                        <>
                        {this.props.userInfo
                            .filter(inventories => inventories.category === `${this.state.filteredCategory}`)
                            .map(userInfo => 
                                <Inventory 
                                    key={userInfo.id} 
                                    userInfo={userInfo}
                                    handleDelete={this.props.handleDelete}
                                    handleUpdate={this.props.handleUpdate}/>)}
                        </>}
                    </>
                </>
                }
            </div>
          )
      }
    }

export default EditInventory;