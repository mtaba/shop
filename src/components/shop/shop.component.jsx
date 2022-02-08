import React from 'react'
import {Route} from 'react-router-dom'

import { collection, query, onSnapshot} from 'firebase/firestore'
import {connect} from 'react-redux'

import {db, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils'
import CollectionOverview from '../collection-overview/collections-overview.component'
import CollectionPage from '../../pages/collection/collection.component'
import updateCollections from '../../redux/shop/shop.actions'
import WithSpinner  from '../with-snipper/with-spinner.component'

import './shop.styles.scss'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component{
     
         state={
            loading: true
         }

    unSubscribeFromSnapshot = null;
    componentDidMount(){
        const q = query(collection(db, "collections"));
        
        this.unSubscribeFromSnapshot = onSnapshot(q, (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        this.props._updateCollections(collectionsMap);
        this.setState({
            loading:false
        })
    });
    }
  
    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    _updateCollections : collectionsMap=>dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(Shop)