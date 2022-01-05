import CollectionItem from '../collection-item/collection-item.component';
import './collectionpreview.styles.scss'
const CollectionPreview = ({ ...rest }) => {
    const { title, items } = rest;
    return (

        <div className="collection-preview">
            {<h1 className="title">{title.toUpperCase()}</h1>}
            <div className="preview">
                {

                    items
                        .filter((item, index) => index < 4)
                        .map(({ id, ...otherProps }) => (
                            <CollectionItem key={id} {...otherProps} />
                        ))
                }
            </div>

        </div>
    )
}

export default CollectionPreview;