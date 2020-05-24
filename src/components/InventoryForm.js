import React, {Component} from 'react';
import userService from "../utils/userService"
import AddPageInfo from "../components/AddPageInfo"
import {Route, Link, Redirect} from 'react-router-dom' 

class InventoryForm extends Component {
    state = {
        category: "",
        qty: "",
        name: "",
        price_per_item: "",
        total_cost: "",
        created_at: ""
    }


    //POST request
    handleSubmit = (event) => {
        event.preventDefault() 
        //send data to server
        fetch(`http://localhost:3000/users/${userService.getUser().id}/inventories`, {
            method: 'POST',
            body: JSON.stringify({
                category: this.state.category,
                qty: this.state.qty,
                name: this.state.name,
                price_per_item: this.state.price_per_item,
                total_cost: this.state.total_cost
            }),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        //server responses with json
        })
        .then (res => res.json())
        .then (resJson => {
            this.props.handleAddRequest(resJson)
            // this.props.history.push('/dashboard/input-form')
        }).catch (error => console.error({'Error': error}))
    }

    //setting state to what is typed in
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
    }

    isFormInvalid() {
        return !(this.state.category && this.state.qty && this.state.name && this.state.price_per_item && this.state.total_cost);
      }

render(){
    console.log(this.props)
    return(
        <div>
            {this.props.userInfo === "" 
            ? 
            <Redirect push to="/dashboard"/> 
            :  
            <div className="add-page">
                <div className="inventory-form">
                    <form onSubmit={this.handleSubmit}>
                        <select onChange={this.handleChange} name="category" value={this.state.category} id="category">
                            <option value="">Type</option>
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
                        
                        <input
                            onChange={this.handleChange}
                            name="name"
                            placeholder="Item Name/Description"
                            type="text"
                            value={this.state.name}
                            id="name"
                            />

                        <input
                            onChange={this.handleChange}
                            name="qty"
                            placeholder="Quantity"
                            type="text"
                            value={this.state.qty}
                            id="qty"
                        />
                        
                        <input
                            onChange={this.handleChange}
                            name="price_per_item"
                            placeholder="Price Per Item Sold"
                            type="text"
                            value={this.state.price_per_item}
                            id="price_per_item"
                            />

                        <input
                            onChange={this.handleChange}
                            name="total_cost"
                            placeholder="Total Cost"
                            type="text"
                            value={this.state.total_cost}
                            id="total_cost"
                            />
                        <br/>
                        <input disabled={this.isFormInvalid()} id="button" type="submit" value="Add Inventory"/>
                    </form>
                </div>
                <AddPageInfo userInfo={this.props.userInfo}/>
            </div>
            }
        </div>
        )
    } 
}








export default InventoryForm;