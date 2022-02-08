import { connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCollectionForPreview} from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collectionpreview/collectionpreview.component'

import "./collections-overview.styles.scss";
 
const CollectionsOverview =({collections})=>{
return(
<div className="collections-overview">
   {
      collections.map(({ id, ...otherCollectionProps })=>(
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))  
   }  </div>
)

            }

const mapStateToProps = createStructuredSelector({
    collections :  selectCollectionForPreview
})

export default  connect(mapStateToProps)(CollectionsOverview)