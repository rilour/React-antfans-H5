import { Card } from "antd-mobile"
import { useNavigate, useLocation } from "react-router-dom"
import data1 from './digitCollection.json'
import data2 from './digitCollection1.json'

const da1 = data1.result.itemViewList
const da2 = data2.result.itemViewList
let data = [ ...da1, ...da2]
// let data = data1.result.itemViewList.concat(data2.result.itemViewList)

let items = data.map((item, index) => {
    return(
        <div className="digitcollection">
            <img className="digitcolleciton-citem" src={item.itemCoverImg} />
            <div className="digitcollection-item" id={item.itemId}>
                {item.itemName}
            </div>
            <div className="digitcollection-creator">{item.creatorName}</div>
            <div className="digitcollection-price">￥ {item.itemPrice.amount}</div>
        </div>
    )
})


function DigitCollection() {

    console.log(items);
    return (
        <>
            <Card title={ items }></Card>
        </>
    )
}

export default DigitCollection


