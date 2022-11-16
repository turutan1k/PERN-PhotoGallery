import React from "react"
import { LOGIN_ROUTE } from "../../utils/consts"
import { useLocation } from "react-router"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { observer } from "mobx-react-lite"

const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return <div>{isLogin ? <SignIn /> : <SignUp />}</div>
})

export default Auth
