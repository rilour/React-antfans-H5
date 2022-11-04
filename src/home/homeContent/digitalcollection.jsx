import { Card } from "antd-mobile"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import data1 from './digitCollection.json'
import data2 from './digitCollection1.json'

const data = data1.data.result.itemViewList.concat(data2.data.result.itemViewList)

const items = data.map((item, index) => {
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
            <Card title={items}></Card>
        </>
    )
}

export default DigitCollection


