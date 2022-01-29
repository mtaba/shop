import { connect} from 'react-redux';
import {selectShopCollections} from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collectionpreview/collectionpreview.component'

import "./collections-overview.styles.scss";

function returnCollection(obj){
    let html=[];
    for (var key in obj) {
       
          var val = obj[key];
          console.log("val",val)
          html.push(<CollectionPreview key={val.id} items={val.items} title={val.title} />)
         
        
      }
      return html
}
const CollectionsOverview =({collections})=>{
console.log("colections",collections)
return(
<div className="collections-overview">
{
                    
                    returnCollection(collections)
                        //<CollectionPreview key={id} {...rest} />
                    
                }  </div>
)

            }

const mapStateToProps = createStructuredSelector({
    collections :  selectShopCollections
})

export default  connect(mapStateToProps)(CollectionsOverview)