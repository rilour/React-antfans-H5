import React from "react"
import { MessageOutline } from 'antd-mobile-icons'
import { Link } from "react-router-dom"
import { Route } from "react-router-dom"

let login = 1   //  登录判断

function Message(props) {
    return (
        <Route>
            <MessageOutline className="message-icon" onClick={() => {
                if (login) {
                    {<Link to='/message>' />}
                }
                else {<Link to='/login>' />}
            }} />
        </Route>
    )
}

export default Message