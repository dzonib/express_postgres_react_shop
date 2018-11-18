import React, {Component} from 'react'
import {items} from '../../fakeDB'


export default class CartItemsList extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        this.setState({items})
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {
                    this.state.items.map(item => {
                        return <h1 key={item.title}>{item.title}</h1>
                    })
                }
            </div>
        )
    }
}