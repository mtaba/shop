import React from 'react'
import {Route} from 'react-router-dom'

import CollectionOverview from '../collection-overview/collections-overview.component'
import CollectionPage from '../../pages/collection/collection.component'

import './shop.styles.scss'

const Shop =({ match })=>(
        <div>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )

export default Shop