import { connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCollectionForPreview} from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collectionpreview/collectionpreview.component'

import "./collections-overview.styles.scss";
 
const CollectionsOverview =({collections})=>{
        console.log("collections",collections)
return(
<div className="collections-overview">
   {
      collections.map(col=>(
        <CollectionPreview key={col.id} items={col.items} title={col.title} />
      ))  
   }  </div>
)

            }

const mapStateToProps = createStructuredSelector({
    collections :  selectCollectionForPreview
})

export default  connect(mapStateToProps)(CollectionsOverview)