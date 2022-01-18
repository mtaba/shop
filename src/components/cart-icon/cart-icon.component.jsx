
import React, { Component } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'


export default class CartIcon extends Component {
    render() {
        return (
            <div className="cart-icon" >
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">0</span>
            </div>
        )
    }
}
