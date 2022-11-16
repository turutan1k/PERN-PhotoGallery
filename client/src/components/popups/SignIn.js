import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, Grid } from "@mui/material"
import { Dialog } from "@mui/material"
import { DialogContent } from "@mui/material"
import { DialogTitle } from "@mui/material"
import { DialogContentText } from "@mui/material"
import { TextField } from "@mui/material"
import { NavLink } from "react-router-dom"
import { REGISTRATION_ROUTE, SHOP_ROUTE } from "../../utils/consts"
import { login } from "../../http/userAPI"
import { useState } from "react"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../../index"
import VpnKeyIcon from "@mui/icons-material/VpnKey"
import LoginIcon from "@mui/icons-material/Login"
import CancelIcon from "@mui/icons-material/Cancel"

const SignIn = observer(() => {
    const { user } = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    let onNavigateToShopRouteClick = () => {
        setTimeout(() => {
            navigate(SHOP_ROUTE)
        }, 300)
    }
    let onHandleClick = () => {
        setTimeout(() => {
            navigate(-1)
        }, 300)
    }
    const click = async () => {
        try {
            let data = await login(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            onNavigateToShopRouteClick()
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Dialog open onClose={onHandleClick}>
            <DialogTitle
                sx={{
                    color: "#f3ecf8",
                    backgroundColor: "#3e503c",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <VpnKeyIcon
                    sx={{
                        color: "#f3ecf8",
                        marginRight: "10px",
                        fontSize: "20px",
                    }}
                />
                Авторизация
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#3e503c" }}>
                <DialogContentText
                    sx={{
                        fontFamily: "Montserrat Alternates",
                        color: "#f3ecf8",
                        backgroundColor: "#3e503c",
                    }}
                >
                    Нет аккаунта?
                    <NavLink
                        to={REGISTRATION_ROUTE}
                        style={{
                            fontFamily: "Montserrat Alternates",
                            textDecoration: "none",
                            color: "#7f886a",
                            backgroundColor: "#3e503c",
                        }}
                    >
                        {"\u00A0"}Регистрация
                    </NavLink>
                </DialogContentText>
                <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Email Adress'
                    type='email'
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id='pass'
                    label='Password'
                    type='password'
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    color='primary'
                />
                <Grid
                    sx={{
                        fontFamily: "Montserrat Alternates",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        onClick={click}
                        style={{
                            fontFamily: "Montserrat Alternates",
                            color: "#f3ecf8",
                            display: "flex",
                            alignItems: "cemter",
                        }}
                    >
                        <LoginIcon
                            sx={{
                                color: "#f3ecf8",
                                marginRight: "10px",
                                fontSize: "14px",
                            }}
                        />
                        Войти
                    </Button>
                    <Button
                        color='error'
                        onClick={onHandleClick}
                        style={{
                            fontFamily: "Montserrat Alternates",
                            display: "flex",
                            alignItems: "cemter",
                        }}
                    >
                        Отмена
                        <CancelIcon
                            sx={{
                                color: "error",
                                marginLeft: "10px",
                                fontSize: "14px",
                            }}
                        />
                    </Button>
                </Grid>
            </DialogContent>
        </Dialog>
    )
})

export default SignIn
