import React, { useContext } from "react"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"
import { Context } from "../../index"
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "./../../utils/consts"
import CollectionsIcon from "@mui/icons-material/Collections"
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos"
import LogoutIcon from "@mui/icons-material/Logout"
import LoginIcon from "@mui/icons-material/Login"
export default function Header() {
    const navigate = useNavigate()
    const { user } = useContext(Context)
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem("token")
    }
    return (
        <div
            style={{
                display: "flex",
            }}
        >
            <Box
                sx={{
                    padding: "0px",
                    display: "flex",
                    fontFamily: "Montserrat Alternates",
                    flexGrow: 1,
                }}
            >
                <AppBar
                    position='static'
                    sx={{
                        fontFamily: "Montserrat Alternates",
                        background: "#3e503c",
                    }}
                >
                    <Toolbar>
                        <Typography
                            variant='h6'
                            component='div'
                            sx={{
                                fontFamily: "Montserrat Alternates",
                                flexGrow: 1,
                            }}
                        >
                            <NavLink
                                style={{
                                    fontFamily: "Montserrat Alternates",
                                    fontSize: "24px",
                                    color: "#f3ecf8",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                to={SHOP_ROUTE}
                            >
                                <CollectionsIcon
                                    sx={{
                                        color: "#f3ecf8, fontSize:24px",
                                        marginRight: "10px",
                                        fontSize: "24px",
                                    }}
                                />
                                PhotoGallery
                            </NavLink>
                        </Typography>
                        {user.isAuth ? (
                            <>
                                <Button
                                    variant='outline-light'
                                    onClick={() => navigate(ADMIN_ROUTE)}
                                    style={{
                                        fontFamily: "Montserrat Alternates",
                                        color: "#f3ecf8",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <AddToPhotosIcon
                                        sx={{
                                            color: "#f3ecf8, fontSize:24px",
                                            marginRight: "10px",
                                            fontSize: "14px",
                                        }}
                                    />
                                    Добавить пост
                                </Button>
                                <Button
                                    variant='outline-light'
                                    onClick={() => logOut()}
                                    style={{
                                        fontFamily: "Montserrat Alternates",
                                        color: "#f3ecf8",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <LogoutIcon
                                        sx={{
                                            color: "#f3ecf8, fontSize:24px",
                                            marginRight: "10px",
                                            fontSize: "14px",
                                        }}
                                    />
                                    Выйти
                                </Button>
                            </>
                        ) : (
                            <Button
                                variant={"outline-light"}
                                onClick={() => navigate(LOGIN_ROUTE)}
                                style={{
                                    fontFamily: "Montserrat Alternates",
                                    color: "#f3ecf8",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <LoginIcon
                                    sx={{
                                        color: "#f3ecf8, fontSize:14px",
                                        marginRight: "10px",
                                    }}
                                />
                                Авторизация
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
