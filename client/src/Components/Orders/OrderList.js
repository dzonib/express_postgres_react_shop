import React, { Component } from 'react'
import Order from './Order';
import {connect} from 'react-redux'
import { getOrders } from '../../redux/actions/orders/orders';


class OrderList extends Component {

    componentDidMount() {
        this.props.getOrders()
    }
    
    render() {
        return (
            <div>
                <Order orders={this.props.orders}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.ordersReducer
    }
}

export default connect(mapStateToProps, {getOrders})(OrderList)