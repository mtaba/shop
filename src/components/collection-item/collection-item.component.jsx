import React from 'react';

import './collection-item.styles.scss'

const CollectionItem = ({ ...otherProps }) => {
    const { name, price, imageUrl } = otherProps;
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span> {name} </span>
                <span>{price}</span>

            </div>
        </div>
    )


}

export default CollectionItem;