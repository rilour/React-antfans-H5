
const pics = {

}

function MainMenu(props) {
    return (
        <div>
            <div className="menu-home">
                <div className="menu-home-icon" src=""></div>
                <div className="menu-home-text">首页</div>
            </div>
            <div className="menu-found">
                <div className="menu-found-icon"></div>
                <div className="menu-found-text">发现</div>
            </div>
            <div className="menu-collection">
                <div className="menu-collection-icon"></div>
                <div className="menu-collection-text">藏品</div>
            </div>
            <div className="menu-mine">
                <div className="menu-mine-icon"></div>
                <div className="menu-mine-text">我的</div>
            </div>
        </div>
    )
    
}

export default MainMenu