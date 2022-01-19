import React, { Component } from 'react';
import CustomBotton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import './collection-item.styles.scss'


class CollectionItem extends Component {
  
    handleAddToCart=()=>{
        const {addItem, name, price, imageUrl} =  this.props;
        
        let item = {
            name: name,
            price : price,
            imageUrl: imageUrl
        }
        addItem(item)
    }

    render(){
        const {name, price, imageUrl} = this.props
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