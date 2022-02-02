import React from 'react'
import {Route} from 'react-router-dom'

import { collection, query, onSnapshot} from 'firebase/firestore';

import {db, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';
import CollectionOverview from '../collection-overview/collections-overview.component'
import CollectionPage from '../../pages/collection/collection.component'

import './shop.styles.scss'

class Shop extends React.Component{
    
    unSubscribeFromSnapshot = null;
    componentDidMount(){
        const q = query(collection(db, "collections"));
        
         onSnapshot(q, (snapshot) => {
        console.log(convertCollectionsSnapshotToMap(snapshot));
    });
    }
  
    render(){
        const {match} = this.props;

        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}
// const Shop =({ match })=>

export default Shop