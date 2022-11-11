import { Card } from "antd-mobile";
import { Route, Routes } from "react-router-dom";
import data from "./saleCalendar.json"

const items = data.result.calendarVOList.map((item, index)=> {
    <div className="sale-calendar">
        <img className="sale-calendar-date" src={item.calendarUrl} />

        <Card id={item.itemId} 
            title={<img src={item.thumbnail} />}
            extra={
                <>
                    <div className="sale-calendar-item">{item.itemTitle}</div>
                    <div className="sale-calendar-limit">限量</div>
                    <div className="sale-calendar-quantity">{item.quantity}份</div>
                    <div className="sale-calendar-price">￥ {item.price}</div>
                    <div className="sale-calendar-sale">开售提醒</div>
                </>

            }
        >
        </Card>
    </div>
} )

function SaleCalendar() {
    return (
        <>
            <items />
        </>
    )
}


export default SaleCalendar