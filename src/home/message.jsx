import React from "react"
import {MessageOutline} from 'antd-mobile-icons'
import { Link } from "react-router-dom"


function Message(props) {
    return (
        <>
            <MessageOutline className="message-icon" onClick={<Link to='/message>' />} />
        </>
    )
}