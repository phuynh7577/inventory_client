import React, { Component } from 'react';
import {Redirect} from 'react-router-dom' 



class EditInventory extends Component {
    state = {
        filteredCategory: "all",
        date: this.props.userInfo ? "" : this.props.userInfo[0].date,
        // inputDate: true
    }

    // handle category change and if date input date should populate or not.
    handleCategoryChange = e => {
        if (e.target.value === "all") {
            this.setState({
                // inputDate: true,
                filteredCategory: e.target.value
            })
        }
        else {
            this.setState({
                // inputDate: false,
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
      }    

    render() {
        return (
            <div className="edit">
                {this.props.userInfo === null ? 
                    <Redirect push to="/dashboard"/>
                    : 
                    <div>
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

                                            
                        </div> 

                                <div className="edit-inventory">
                                    <table className="view-table table" id="table">
                                        <tbody>
                                            <tr>
                                                <th></th>
                                                {/* <th className="table-date">Input Date</th> */}
                                                <th>Type</th>
                                                <th>Name</th>
                                                <th>QTY</th>
                                                <th>Price Per Item</th>
                                                <th>Total Cost</th>
                                            </tr>

                                            {this.state.filteredCategory === "all" ? this.props.userInfo
                                                .map(inventories => (
                                                    <tr key={inventories.id} className="info" id={inventories.id % 2 === 0 ? "dos" : "uno"}>
                                                        <td><img className="x" onClick={() =>this.props.handleDelete(inventories)} src="../x.png" width="22px" alt="x"/></td>
                                                        {/* <td className="table-date">{inventories.date}</td> */}
                                                        <td>{inventories.category}</td>
                                                        <td className="name">{inventories.name}</td>
                                                        <td>{inventories.qty}</td>
                                                        <td><span>$</span>{inventories.price_per_item}</td>
                                                        <td><span>$</span>{inventories.total_cost}</td>
                                                    </tr>
                                            ))
                                            :
                                            <>
                                            {this.props.userInfo
                                                .filter(inventories => inventories.category === `${this.state.filteredCategory}`)
                                                .map(inventories => (
                                                    <tr key={inventories.id} className="info">
                                                        <td><img className="x" onClick={() =>this.props.handleDelete(inventories)} src="../x.png" width="22px" alt="x"/></td>
                                                        {/* <td className="table-date">{inventories.date}</td> */}
                                                        <td>{inventories.category}</td>
                                                        <td className="name">{inventories.name}</td>
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

// {/* <div className="edit-options">
//                             <select onChange={this.handleCategoryChange} name="category" value={this.state.filteredCategory} id="filteredCategory">
//                                     <option value="all">All</option>
//                                     <option value="Beer">Beer</option>
//                                     <option value="Wine">Wine</option>
//                                     <option value="Hard Cider">Hard Cider</option>
//                                     <option value="Mead">Mead</option>
//                                     <option value="Sake">Sake</option>
//                                     <option value="Gin">Gin</option>
//                                     <option value="Brandy">Brandy</option>
//                                     <option value="Whiskey">Whiskey</option>
//                                     <option value="Rum">Rum</option>
//                                     <option value="Tequila">Tequila</option>
//                                     <option value="Vodka">Vodka</option>
//                                     <option value="Absinthe">Absinthe</option>
//                                     <option value="Everclear">Everclear</option>
//                                 </select>

//                                             {/* Render if input is false */}
//                             {this.state.inputDate === false ? 
//                                 <input 
//                                     type="text" 
//                                     onChange={this.handleDateChange}
//                                     value={this.state.date || this.props.userInfo[0].date}
//                                     id="date"
//                                     placeholder="YYYY-MM-DD"
//                                     name="date"
//                                     />
//                                     : 
//                                     null
//                                 }
//                         </div> 

//                                 <div className="edit-inventory">
//                                     <table className="table"  id="table">
//                                         <tbody>
//                                             <tr>
//                                                 <th></th>
//                                                 <th className="table-date">Input Date</th>
//                                                 <th>Type</th>
//                                                 <th>Name</th>
//                                                 <th>QTY</th>
//                                                 <th>Price Per Item</th>
//                                                 <th>Total Cost</th>
//                                             </tr>

//                                             {this.state.filteredCategory === "all" ? this.props.userInfo
//                                             // .filter(inventories => )
//                                                 .map(inventories => (
//                                                     <tr key={inventories.id} className="info" id={inventories.id % 2 === 0 ? "dos" : "uno"}>
//                                                         <td><img className="x" onClick={() =>this.props.handleDelete(inventories)} src="../x.png" width="22px" alt="x"/></td>
//                                                         <td className="table-date">{inventories.date}</td>
//                                                         <td>{inventories.category}</td>
//                                                         <td>{inventories.name}</td>
//                                                         <td>{inventories.qty}</td>
//                                                         <td><span>$</span>{inventories.price_per_item}</td>
//                                                         <td><span>$</span>{inventories.total_cost}</td>
//                                                     </tr>
//                                             ))
//                                             :
//                                             <>
//                                             {this.props.userInfo
//                                                 .filter(inventories => inventories.category === `${this.state.filteredCategory}` && inventories.date === `${this.state.date === "" ? this.props.userInfo[0].date : this.state.date}`)
//                                                 .map(inventories => (
//                                                     <tr key={inventories.id} className="info" id={inventories.id % 2 === 0 ? "dos" : "uno"}>
//                                                         <td><img className="x" onClick={() =>this.props.handleDelete(inventories)} src="../x.png" width="22px" alt="x"/></td>
//                                                         <td className="table-date">{inventories.date}</td>
//                                                         <td>{inventories.category}</td>
//                                                         <td>{inventories.name}</td>
//                                                         <td>{inventories.qty}</td>
//                                                         <td><span>$</span>{inventories.price_per_item}</td>
//                                                         <td><span>$</span>{inventories.total_cost}</td>
//                                                     </tr>
//                                                 ))}
//                                             </>
//                                             }
//                                         </tbody>
//                                     </table>
//                                     </div>




//                     </div>
//                 } */}