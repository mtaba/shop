import { connect} from 'react-redux';
import selectShopCollections from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collectionpreview/collectionpreview.component'

import "./collections-overview.styles.scss";


const CollectionsOverview =({collections})=>(
<div className="collections-overview">
{
                    collections.map(({ id, ...rest }) => (
                        <CollectionPreview key={id} {...rest} />
                    ))
                }  </div>
)


const mapStateToProps = createStructuredSelector({
    collections :  selectShopCollections
})

export default  connect(mapStateToProps)(CollectionsOverview)