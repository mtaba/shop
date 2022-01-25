import React  from 'react';
import { connect} from 'react-redux';

import CollectionPreview from '../collectionpreview/collectionpreview.component.jsx';
import selectShopCollections from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const Shop =({collections})=> 
        (
            <div>
                {
                    collections.map(({ id, ...rest }) => (
                        <CollectionPreview key={id} {...rest} />
                    ))
                }

            </div>
        )
    

const mapStateToProps = createStructuredSelector({
    collections :  selectShopCollections
})
export default connect(mapStateToProps)(Shop)