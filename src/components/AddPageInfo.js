import React, { Component } from 'react';

class AddPageInfo extends Component { 


    render() {
    


        return(
            <div className="display">
                <div className="display-one">
                    {/* <h4>Last 25 Inventory Added</h4> */}
                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Beers</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Beer").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Wine</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Wine").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Hard Cider</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Hard Cider").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Mead</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Mead").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Saky</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Saky").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Gin</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Gin").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Brandy</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Brandy").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Whiskey</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Whiskey").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Rum</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Rum").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Tequila</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Tequila").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Vodka</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Vodka").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Everclear</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Everclear").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
                                </tr>
                                
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagescroll">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Absinthe</th>
                                    <th>QTY</th>
                                </tr>
                                {this.props.userInfo.filter(inventories => inventories.category === "Absinthe").map((userInfo) => (
                                <tr key={userInfo.id} className="info">
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.qty}</td>
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

















