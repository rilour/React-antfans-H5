import { Card } from "antd-mobile";
import {Link, Route} from "react-router-dom"
import data from "./handpick.json"

const items = data.app.handpick.map((item) => {
    <Route>
        <Card title={
            <>
                <img src={item.coverImg} />
                <div>{item.title}</div>
            </>
        }
        onClick={()=>{<Link to={item.url} />}}
        >{item.desc}</Card>
    </Route>
})

function Handpick() {
    return <items />
}

export default Handpick