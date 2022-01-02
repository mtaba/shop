import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}
            style={{
                backgroundImage: `url(${imageUrl})`
            }
            }
        >
            <div className="content">
                <h1 className="title">
                    {title}
                </h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div >
    )
}

export default MenuItem;