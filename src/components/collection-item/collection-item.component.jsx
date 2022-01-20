import React, { Component } from 'react';
import CustomBotton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import './collection-item.styles.scss'


class CollectionItem extends Component {
  
    handleAddToCart=()=>{
        const {addItem, item} =  this.props;
        console.log("object")
        let newItem = {
            id: item.id,
            name: item.name,
            price : item.price,
            imageUrl: item.imageUrl
        }
        console.log("item",newItem)
        addItem(newItem)
    }

    render(){
        const {name, price, imageUrl} = this.props.item
        return (
            <div className="collection-item">
                <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
                <CustomBotton inverted  onClick={this.handleAddToCart}>ADD TO CART</CustomBotton>
                <div className="collection-footer">
                    <span> {name} </span>
                    <span>{price}</span>
                </div>
              
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    addItem:  (item)=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)