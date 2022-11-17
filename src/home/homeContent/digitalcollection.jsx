import { Card } from "antd-mobile"
import { useNavigate, useLocation } from "react-router-dom"
import data1 from './digitCollection.json'
import data2 from './digitCollection1.json'
import './digitalCollection.css'

const da1 = data1.result.itemViewList
const da2 = data2.result.itemViewList
let data = [ ...da1, ...da2]
// let data = data1.result.itemViewList.concat(data2.result.itemViewList)

let items = data.map((item, index) => {
    return(
        <div className="digitcollection-content" key={index} >
            <img className="digitcollection-img" src={item.itemCoverImg} />
            <div className="digitcollection-profile">
                <div className="digitcollection-item" id={item.itemId}>{item.itemName}</div>
                <div className="digitcollection-itemnum">
                    <div className="digitcollection-limit">限量</div>
                    <div className="digitcollection-num">{item.itemNum}</div>
                </div>
                <div className="digitcollection-creator">
                    <img className="digitcollection-creator-avatar" src={item.creatorAvatar} />
                    <div className="digitcollection-creator-name">{item.creatorName}</div>
                </div>
                <div className="digitcollection-price">￥ {item.itemPrice.amount}</div>
            </div>
        </div>
    )
})


function DigitCollection() {

    return (
        <div className="digitcollection">
            <Card title={ items }></Card>
        </div>
    )
}

export default DigitCollection


