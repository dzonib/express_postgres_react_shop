import React from 'react'

const Order = (props) => {
    return <div>
        {
            props.orders.length === 0 ? <div>Loading</div>:
            <div>
                {props.orders.map( order => {
                    return <div key={order.id}>
                        <h1>Order {order.id}</h1>
                        <p>products:</p>
                        {order.products.map(product => {
                            return (
                                <div key={product.id}>{product.title}({product.orderItem.quantity})</div>
                            )
                        })}
                    </div>
                })}
            </div>
        }

    </div>
}

export default Order
