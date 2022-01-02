import './homepage.style.scss'
const Homepage = () => {
    return <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                        Hats
                    </h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                        Blouz
                    </h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">
                        Tshirt
                    </h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>
}

export default Homepage;