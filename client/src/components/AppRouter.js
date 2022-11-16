import React from "react"
import { Context } from "../index"
import { authRoutes, publicRoutes } from "../routes"
import { SHOP_ROUTE } from "../utils/consts"
import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { observer } from "mobx-react-lite"
const AppRouter = observer(() => {
    const { user } = useContext(Context)
    return (
        <Routes>
            {user.isAuth &&
                authRoutes &&
                authRoutes?.map(({ path, Component }) => (
                    <Route
                        path={path}
                        element={<Component />}
                        key={Component.toString()}
                    />
                ))}
            {publicRoutes &&
                publicRoutes?.map(({ path, Component }) => (
                    <Route
                        path={path}
                        element={<Component />}
                        key={Component.toString()}
                    />
                ))}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    )
})

export default AppRouter
