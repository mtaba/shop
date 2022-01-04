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
        const { id, ...otherCellectionProps } = this.state.collections;
        return (
            <div>
                {
                    this.state.collections.map(c => (
                        CollectionPreview
                    ))
                }
                {/* {
                    this.state.collections.map(collection => <CollectionPreview key={id}
                        otherCellectionProps={otherCellectionProps} />)
                } */}
            </div>
        )
    }
}

export default Shop