
import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'
import  CollectionItem  from '../../components/collection-item/collection-item.component'

import './collection.styles.scss'

const CollectionPage = (props)=>{
    console.log("porps props", props)
    console.log("porps match", props.match)
    const { title , items } = props.collection;
     return (
             <div className="collection-page">
                 <h2 className="title">{title}</h2>
                 <div className="items">
                 {
                     items.map(item=>
                        <CollectionItem item = {item} />
                        )
                 }
                 </div>
             </div>
            )
}
const mapStateToProps = (state, ownProps)=>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)