import React, { Component } from 'react';
import CollectionPreview from '../collectionpreview/collectionpreview.component.jsx';
import SHOP_DATA from './shop.data.js';

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.collections.map(({ id, ...rest }) => (
                        <CollectionPreview key={id} {...rest} />
                    ))
                }

            </div>
        )
    }
}

export default Shop