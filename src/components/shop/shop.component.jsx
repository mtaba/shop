import React from 'react'
import {Route} from 'react-router-dom'

import { collection, query, onSnapshot} from 'firebase/firestore'
import {connect} from 'react-redux'

import {db, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils'
import CollectionOverview from '../collection-overview/collections-overview.component'
import CollectionPage from '../../pages/collection/collection.component'
import updateCollections from '../../redux/shop/shop.actions'
import WithSnipper  from '../with-snipper/with-snipper.component'

import './shop.styles.scss'

class Shop extends React.Component{
    constructor(){
        super()
        this.state={
            isLoading: true
        }
    }

    unSubscribeFromSnapshot = null;
    componentDidMount(){
        const q = query(collection(db, "collections"));
        
        this.unSubscribeFromSnapshot = onSnapshot(q, (snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        this.props._updateCollections(collectionMap);
        this.setState({
            isLoading:false
        })
    });
    }
  
    render(){
        const {match} = this.props;

        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={WithSnipper(this.state.isLoading)(CollectionPage)} />
            </div>
        )
    }
}
// const Shop =({ match })=>
const mapDispatchToProps=(dispatch)=>({
    _updateCollections : collections=>dispatch(updateCollections(collections))
})

export default connect(null,mapDispatchToProps)(Shop)