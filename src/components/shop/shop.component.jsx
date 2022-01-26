import React from 'react'
import {Route} from 'react-router-dom'

import CollectionOverview from '../collection-overview/collections-overview.component'
import CategoryPage from '../../pages/category/categorypage.component'

import './shop.styles.scss'

const Shop =({ match })=> {
  
    return  (
        <div>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CategoryPage} />

        </div>
    )

}

       

export default Shop