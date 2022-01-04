import './collectionpreview.styles.css'
const CollectionPreview = ({ title, routeName, items }) => {
    return (
        <div>

            collection CollectionPreview

            <h2>{title}</h2>
            {
                items.map(item => item.name)
            }

        </div>
    )
}

export default CollectionPreview;