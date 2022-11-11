import { Card } from "antd-mobile";
import {Link, Route} from "react-router-dom"
import data from "./handpick.json"

const items = data.app.handpick.map((item) => {
    <Route>
        <Card title={
            <div className="handpick-box">
                <img src={item.coverImg} />
                <div className="handpick-title">{item.title}</div>
                <div className="handpick-content">{item.desc}</div>
            </div>
        }
        onClick={()=>{<Link to={item.url} />}}
        >{item.desc}</Card>
    </Route>
})

function Handpick() {
    return <items />
}

export default Handpick