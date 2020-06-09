// {this.props.userInfo === null ? 
//     <Redirect push to="/dashboard"/>
//     : 
//     <div>
//         <div className="edit-options">
//             <select onChange={this.handleCategoryChange} name="category" value={this.state.filteredCategory} id="filteredCategory">
//                 <option value="all">All</option>
//                 <option value="Beer">Beer</option>
//                 <option value="Wine">Wine</option>
//                 <option value="Hard Cider">Hard Cider</option>
//                 <option value="Mead">Mead</option>
//                 <option value="Sake">Sake</option>
//                 <option value="Gin">Gin</option>
//                 <option value="Brandy">Brandy</option>
//                 <option value="Whiskey">Whiskey</option>
//                 <option value="Rum">Rum</option>
//                 <option value="Tequila">Tequila</option>
//                 <option value="Vodka">Vodka</option>
//                 <option value="Absinthe">Absinthe</option>
//                 <option value="Everclear">Everclear</option>
//             </select>             
//         </div> 

//         <div className="edit-inventory">
//             <table className="view-table table" id="table">
//                 <tbody>
//                     <tr>
//                         <th></th>
//                         {/* <th className="table-date">Input Date</th> */}
//                         <th>Type</th>
//                         <th>Name</th>
//                         <th>QTY</th>
//                         <th>Price Per Item</th>
//                         <th>Total Cost</th>
//                     </tr>    

//                 {this.state.formVisibile ? 
//                     <Form 
//                         user={this.props.user}
//                         userInfo={this.state.userInfo}
//                         handleSubmit={this.handleUpdate}
//                     />
//                 : 
//                 <>
//                     {this.state.filteredCategory === "all" ? this.props.userInfo
//                         .map(inventories => (
//                             <tr key={inventories.id} className="info" id={inventories.id % 2 === 0 ? "dos" : "uno"}>
//                                 <td><img className="x" onClick={() =>this.props.handleDelete(inventories)} src="../x.png" width="22px" alt="x"/></td>
//                                 {/* <td className="table-date">{inventories.date}</td> */}
//                                 <td>{inventories.category}</td>
//                                 <td className="name" onClick={this.toggleForm}>{inventories.name}</td>
//                                 <td>{inventories.qty}</td>
//                                 <td><span>$</span>{inventories.price_per_item}</td>
//                                 <td><span>$</span>{inventories.total_cost}</td>
//                             </tr>
//                     ))
//                     :
//                     <>
//                     {this.props.userInfo
//                         .filter(inventories => inventories.category === `${this.state.filteredCategory}`)
//                         .map(inventories => (
//                             <tr key={inventories.id} className="info">
//                                 <td><img className="x" onClick={() =>this.props.handleDelete(inventories)} src="../x.png" width="22px" alt="x"/></td>
//                                 {/* <td className="table-date">{inventories.date}</td> */}
//                                 <td>{inventories.category}</td>
//                                 <td className="name" onClick={this.toggleForm}>{inventories.name}</td>
//                                 <td>{inventories.qty}</td>
//                                 <td><span>$</span>{inventories.price_per_item}</td>
//                                 <td><span>$</span>{inventories.total_cost}</td>
//                             </tr>
//                         ))}
//                     </>
//                     }
//                 </>
//                 }
//                 </tbody>
//             </table>
                
//         </div>
        
//     </div>
// }




// {this.state.formVisible ? 
//     <Form 
//         user={this.props.user}
//         userInfo={this.state.userInfo}
//         handleSubmit={this.handleUpdateAgain}
//     />
// : 
//     <div className="edit-inventory">
//         <table className="view-table table" id="table">
//             <tbody>
//                 <tr>
//                     <th></th>
//                     {/* <th className="table-date">Input Date</th> */}
//                     <th>Type</th>
//                     <th>Name</th>
//                     <th>QTY</th>
//                     <th>Price Per Item</th>
//                     <th>Total Cost</th>
//                 </tr>    

//                 {this.state.filteredCategory === "all" ? this.props.userInfo
//                     .map(inventories => (
//                         <tr key={inventories.id} className="info">
//                             <td><img className="x" onClick={() =>this.props.handleDelete(inventories)} src="../x.png" width="22px" alt="x"/></td>
//                             {/* <td className="table-date">{inventories.date}</td> */}
//                             <td>{inventories.category}</td>
//                             <td className="name" onClick={this.toggleForm}>{inventories.name}</td>
//                             <td>{inventories.qty}</td>
//                             <td><span>$</span>{inventories.price_per_item}</td>
//                             <td><span>$</span>{inventories.total_cost}</td>
//                         </tr>
//                 ))
//                 :
//                 <>
//                 {this.props.userInfo
//                     .filter(inventories => inventories.category === `${this.state.filteredCategory}`)
//                     .map(inventories => (
//                         <tr key={inventories.id} className="info">
//                             <td><img className="x" onClick={() =>this.props.handleDelete(inventories)} src="../x.png" width="22px" alt="x"/></td>
//                             {/* <td className="table-date">{inventories.date}</td> */}
//                             <td>{inventories.category}</td>
//                             <td className="name" onClick={this.toggleForm}>{inventories.name}</td>
//                             <td>{inventories.qty}</td>
//                             <td><span>$</span>{inventories.price_per_item}</td>
//                             <td><span>$</span>{inventories.total_cost}</td>
//                         </tr>
//                     ))}
//                 </>
//                 }
//             </tbody>
//         </table>
//     </div>
// }




























