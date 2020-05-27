import React, { Component } from 'react';

class AddPageInfo extends Component { 


    render() {
    


        return(
            <div className="display">
                <div className="display-one">
                    <h4>Last 25 Inventory Added</h4>
                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th className="table-date">Input Date</th>
                                    <th>Type</th>
                                    <th>Name</th>
                                    <th>QTY</th>
                                    <th>Price Per Item</th>
                                    <th>Total Cost</th>
                                </tr>
                                {this.props.userInfo.slice(0, 25).map((userInfo) => (
                                <tr key={userInfo.id} className="info" id={userInfo.id % 2 === 0 ? "dos" : "uno"}>
                                    <td className="table-date">{userInfo.date}</td>
                                    <td>{userInfo.category}</td>
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                    <td><span>$</span>{userInfo.price_per_item}</td>
                                    <td><span>$</span>{userInfo.total_cost}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPageInfo;

















