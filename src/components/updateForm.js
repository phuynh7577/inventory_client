import React from "react";

class Form extends React.Component {
  state = {
        qty: "",
        name: "",
        price_per_item: "",
        total_cost: ""
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };


  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();
    const { qty, name, price_per_item, total_cost } = this.state;
    const userInfo = {
      qty: qty,
      name: name,
      price_per_item: price_per_item,
      total_cost: total_cost
    };
    if (this.props.userInfo) userInfo.id = this.props.userInfo.id;
    this.props.handleSubmit(event, userInfo);
  };


  componentDidMount() {
    if (this.props.userInfo) {
      const { qty, name, price_per_item, total_cost, id } = this.props.userInfo;
      this.setState({
        qty: qty || "",
        name: name || "",
        price_per_item: price_per_item || "",
        total_cost: total_cost || "",
        id: id || ""
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="edit-form">
        <input
          onChange={this.handleChange}
          name={"name"}
          type={"text"}
          value={this.state.name}
          id={"name"}
        />
        <input
          onChange={this.handleChange}
          name={"qty"}
          type={"text"}
          value={this.state.qty}
          id={"qty"}
        />
        <input
          onChange={this.handleChange}
          name={"price_per_item"}
          type={"text"}
          value={this.state.price_per_item}
          id={"price_per_item"}
        />
        <input
          onChange={this.handleChange}
          name={"total_cost"}
          type={"text"}
          value={this.state.total_cost}
          id={"total_cost"}
        />
        <input
          type="submit"
          value="Update"
        />
      </form>
    );
  }
}

export default Form;