import { Card } from "antd-mobile"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import data from './digitCollection.json'
import data2 from './digitCollection1.json'

const items = data.result.itemViewList.map((item, index) => {
    <div className="digitcollection">
        <img className="digitcolleciton-citem" src={item.itemCoverImg} />
        <div className="digitcollection-item" id={item.itemId}>
            {item.itemName}
        </div>
        <div className="digitcollection-creator">{item.creatorName}</div>
        <div className="digitcollection-price">￥ {item.itemPrice.amount}</div>
    </div>
})


function DigitCollection() {
    const navigate = useNavigate()
    const pathname = useLocation()

    return (
        <>
            <div >
                <Card title={items}></Card>
            </div>
        </>
    )
}




