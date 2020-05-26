import React, { Component } from "react";
import Order from "../../components/Orders/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hocComp/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        console.log(res.data);
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({
          loading: false,
          orders: fetchedOrders,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    let order = <Spinner />;
    if (!this.state.loading) {
      order = this.state.orders.map((order) => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        );
      });
    }

    return <div>{order}</div>;
  }
}

export default withErrorHandler(Orders, axios);
