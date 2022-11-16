import { Button, Grid, Dialog, DialogContent } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

import ViewAccord from "../components/Accordions/ViewAccord"
import DeviceAccord from "../components/Accordions/DeviceAccord"
import PhotoAccord from "../components/Accordions/PhotoAccord"
import LocationAccord from "../components/Accordions/LocationAccord"
import ColorAccord from "../components/Accordions/ColorAccord"
import QualityAccord from "../components/Accordions/QualityAccord"
import DescriptionAccord from "../components/Accordions/DescriptionAccord"
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos"
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault"

const Admin = ({ isOpened }) => {
    const navigate = useNavigate()

    let onHandleClick = () => {
        setTimeout(() => {
            navigate(-1)
        }, 300)
    }

    return (
        <div>
            <Dialog open onClose={onHandleClick}>
                <DialogContent sx={{ backgroundColor: "#3e503c" }}>
                    <Grid
                        container
                        sx={{
                            fontFamily: "Montserrat Alternates",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Grid item>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "10px",
                                    fontSize: "24px",
                                    color: "#f3ecf8",
                                }}
                            >
                                <AddToPhotosIcon
                                    sx={{
                                        color: "#f3ecf8, fontSize:24px",
                                        marginRight: "10px",
                                        fontSize: "24px",
                                    }}
                                />
                                Добавить:
                            </div>
                            <PhotoAccord />
                            <hr
                                style={{
                                    border: "none",
                                    backgroundColor: "#283827",
                                    color: "#283827",
                                    height: "2px",
                                    borderRadius: "20px",
                                    margin: "20px 40px 0px 40px",
                                }}
                            />
                            <DescriptionAccord />
                            <ViewAccord />
                            <LocationAccord />
                            <DeviceAccord />
                            <QualityAccord />
                            <ColorAccord />
                        </Grid>
                        <Grid
                            item
                            sx={{
                                fontFamily: "Montserrat Alternates",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                marginTop: 3,
                            }}
                        >
                            <Button
                                color='error'
                                onClick={onHandleClick}
                                style={{ fontFamily: "Montserrat Alternates" }}
                            >
                                Выйти
                                <DisabledByDefaultIcon
                                    sx={{
                                        color: "error",
                                        marginLeft: "10px",
                                        fontSize: "14px",
                                    }}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Admin
