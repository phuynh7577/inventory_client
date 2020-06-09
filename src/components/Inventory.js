import React from 'react'
import Form from './updateForm'

class Inventory extends React.Component {
  state = {
    formVisible: false
  }

    // handle toggle
    toggleForm = () => {
        this.setState({formVisible: !this.state.formVisible})
        // console.log(this.state.formVisible)
      }

    // handle update
    handleUpdate = (event, inventory) => {
        this.props.handleUpdate(event, inventory)
        // console.log(event)
        // console.log(inventory)
        this.toggleForm()
      }


  
  render () {
    const {userInfo} = this.props
    return(
        <>
        {this.state.formVisible
        ? <Form userInfo={userInfo} handleSubmit={this.handleUpdate}>
        </Form>

        : 
        <>

                <ul key={userInfo.id} className="edit-info info">
                    <li><img className="x" onClick={() =>this.props.handleDelete(userInfo)} src="../x.png" width="22px" alt="x"/></li>
                    <li>{userInfo.category}</li>
                    <li className="name" onClick={this.toggleForm}>{userInfo.name}</li>
                    <li>{userInfo.qty}</li>
                    <li><span>$</span>{userInfo.price_per_item}</li>
                    <li><span>$</span>{userInfo.total_cost}</li>
                </ul>

        </>
        }
        </>
     )
  }
}

export default Inventory