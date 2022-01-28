import React from 'react';
import CustomBotton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import './collection-item.styles.scss'


const CollectionItem = ({item, addItem})=>{  
        const {name, price, imageUrl} = item
        return (
            <div className="collection-item">
                <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
                <CustomBotton inverted  onClick={()=>addItem(item)}>ADD TO CART</CustomBotton>
                <div className="collection-footer">
                    <span> {name} </span>
                    <span>{price}</span>
                </div>
              
            </div>
        )
    }

const mapDispatchToProps = dispatch =>({
    addItem:  (item)=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)