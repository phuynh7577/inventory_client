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
        <table className="edit-inventory view-table table" id="table">
            <tbody>
                <tr key={userInfo.id} className="info">
                    <td><img className="x" onClick={() =>this.props.handleDelete(userInfo)} src="../x.png" width="22px" alt="x"/></td>
                    <td>{userInfo.category}</td>
                    <td className="name" onClick={this.toggleForm}>{userInfo.name}</td>
                    <td>{userInfo.qty}</td>
                    <td><span>$</span>{userInfo.price_per_item}</td>
                    <td><span>$</span>{userInfo.total_cost}</td>
                </tr>
            </tbody>
        </table>
        </>
        }
        </>
     )
  }
}

export default Inventory