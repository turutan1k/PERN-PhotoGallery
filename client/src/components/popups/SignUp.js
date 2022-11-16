import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Dialog, Grid } from "@mui/material"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { DialogTitle, DialogContentText } from "@mui/material"
import { DialogContent } from "@mui/material"
import { LOGIN_ROUTE } from "../../utils/consts"
import { registration } from "./../../http/userAPI"
import { useState } from "react"
import { observer } from "mobx-react-lite"
import { SHOP_ROUTE } from "../../utils/consts"
import { useContext } from "react"
import { Context } from "../../index"
import HowToRegIcon from "@mui/icons-material/HowToReg"
import CancelIcon from "@mui/icons-material/Cancel"

const SignUp = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const click = async (data) => {
        try {
            data = await registration(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    const styles = (theme) => ({
        multilineColor: {
            color: "red",
        },
    })

    let onHandleClick = () => {
        setTimeout(() => {
            navigate(-1)
        }, 300)
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
                <HowToRegIcon
                    sx={{
                        fontSize: "16px",
                        color: "#f3ecf8",
                        marginRight: "10px",
                    }}
                />
                Регистрация
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#3e503c" }}>
                <DialogContentText
                    sx={{
                        fontFamily: "Montserrat Alternates",
                        color: "#f3ecf8",
                    }}
                >
                    Есть аккаунт?
                    <NavLink
                        to={LOGIN_ROUTE}
                        style={{
                            fontFamily: "Montserrat Alternates",
                            textDecoration: "none",
                            color: "#7f886a",
                        }}
                    >
                        {"\u00A0"}Вход
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
                            alignItems: "center",
                        }}
                    >
                        <HowToRegIcon
                            sx={{
                                fontSize: "14px",
                                color: "#f3ecf8",
                                marginRight: "10px",
                            }}
                        />
                        Зарегестрироваться
                    </Button>
                    <Button
                        color='error'
                        onClick={onHandleClick}
                        style={{ fontFamily: "Montserrat Alternates" }}
                    >
                        Отмена
                        <CancelIcon
                            sx={{
                                fontSize: "14px",
                                color: "error",
                                marginLeft: "10px",
                            }}
                        />
                    </Button>
                </Grid>
            </DialogContent>
        </Dialog>
    )
})

export default SignUp
