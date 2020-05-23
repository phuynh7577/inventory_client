import React, { Component } from 'react';
import { mockComponent } from 'react-dom/test-utils';

class AddPageInfo extends Component { 



    render() {
    const lastTwentyFive = this.props.userInfo.inventories
    const items = []
    for (let [index, value] of lastTwentyFive.entries()) {
    
    items.push(<li key={value.id}>{value.name}</li>)
    }
    // console.log(this.props.userInfo.inventories.reverse())

    // const newUserInfo = new Date(this.props.userInfo.inventories.created_at)
    	
//     var formattedTimestamp = Intl.DateTimeFormat('en-US',{
//     year: "numeric",
//     month: "short",
//     day: "2-digit",
//   }).format();
    

        return(
            <div className="display">
                <div className="display-one">
                    <h4>Last 25 Inventory Added</h4>
                    {items}
                </div>

                <div className="display-two">
                    <h4>Inventory Added By Type: Last 30-days</h4>
                </div>
                <div className="display-three">
                    <h3></h3>
                </div>
            </div>
        )
    }
}

export default AddPageInfo;

















