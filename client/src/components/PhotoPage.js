import { Grid, Box, Button, ImageListItem } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

import { Dialog } from "@mui/material"
import { DialogContent } from "@mui/material"
import { DialogTitle } from "@mui/material"
import { DialogContentText } from "@mui/material"
import { Paper } from "@mui/material"
import { useParams } from "react-router-dom"

import PanoramaIcon from "@mui/icons-material/Panorama"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown"
import ColorLensIcon from "@mui/icons-material/ColorLens"
import CameraIcon from "@mui/icons-material/Camera"
import DescriptionIcon from "@mui/icons-material/Description"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import InfoIcon from "@mui/icons-material/Info"

import {
    fetchViews,
    fetchDevices,
    fetchLocations,
    fetchOnePhoto,
    fetchQualities,
    fetchColors,
    fetchDescriptions,
} from "../http/photoAPI"
import { useState } from "react"
import { useEffect } from "react"
const PhotoPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [photo, setPhoto] = useState({ info: [] })
    const [views, setViews] = useState([])
    const [locations, setLocations] = useState([])
    const [devices, setDevices] = useState([])
    const [colors, setColors] = useState([])
    const [qualities, setQualities] = useState([])
    const [descriptions, setDescriptions] = useState([])

    useEffect(() => {
        fetchOnePhoto(id).then((data) => setPhoto(data))
        fetchViews().then((data) => setViews(data))
        fetchLocations().then((data) => setLocations(data))
        fetchDevices().then((data) => setDevices(data))
        fetchColors().then((data) => setColors(data))
        fetchQualities().then((data) => setQualities(data))
        fetchDescriptions().then((data) => setDescriptions(data))
    }, [id])

    let onHandleClick = () => {
        setTimeout(() => {
            navigate(-1)
        }, 300)
    }

    let viewName =
        views.length !== 0 && photo.viewId
            ? views.find((view) => view.id === photo.viewId)
            : { name: "Не определено" }
    let locationName =
        locations.length !== 0 && photo.locationId
            ? locations.find((location) => location.id === photo.locationId)
            : { name: "Не определено" }
    let deviceName =
        devices.length !== 0 && photo.deviceId
            ? devices.find((device) => device.id === photo.deviceId)
            : { name: "Не определено" }
    let colorName =
        colors.length !== 0 && photo.colorId
            ? colors.find((color) => color.id === photo.colorId)
            : { name: "Не определено" }
    let qualityName =
        qualities.length !== 0 && photo.qualityId
            ? qualities.find((quality) => quality.id === photo.qualityId)
            : { name: "Не определено" }
    let descriptionName =
        descriptions.length !== 0 && photo.descriptionId
            ? descriptions.find(
                  (description) => description.id === photo.descriptionId
              )
            : { name: "Не определено" }

    return (
        <Dialog
            open
            onClose={onHandleClick}
            aria-labelledby='form-dialog-title'
        >
            <DialogTitle
                sx={{
                    fontFamily: "Montserrat Alternates",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    fontSize: "24px",
                    color: "#f3ecf8",
                    background: "#3e503c",
                }}
            >
                <InfoIcon
                    sx={{
                        color: "#f3ecf8",
                        marginRight: "10px",
                        fontSize: "24px",
                    }}
                />
                Информация о фото:
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#3e503c" }}>
                <Box sx={{ fontFamily: "Montserrat Alternates", flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3} spacing={1}>
                            <Paper
                                variant='outlined'
                                alt='photo.info'
                                sx={{
                                    fontFamily: "Montserrat Alternates",
                                    display: "flex",
                                    flexDirection: "column",
                                    flexGrow: "1",
                                    flexShrink: "1",
                                    flexBasics: "100%",
                                }}
                            >
                                <ImageListItem key={photo.img}>
                                    <img
                                        sx={{
                                            fontFamily: "Montserrat Alternates",
                                            maxWidth: "100%",
                                            height: 400,
                                            objectFit: "cover",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            objectPosition: "center",
                                            padding: "2",
                                        }}
                                        src={
                                            process.env.REACT_APP_API_URL +
                                            photo.img
                                        }
                                        alt='Item from page'
                                    />
                                </ImageListItem>
                            </Paper>
                        </Grid>
                        <Grid
                            item
                            xs={9}
                            sx={{
                                fontFamily: "Montserrat Alternates",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                            }}
                        >
                            <DialogContentText
                                sx={{
                                    fontFamily: "Montserrat Alternates",
                                    color: "#f3ecf8",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "5px",
                                }}
                            >
                                <DescriptionIcon
                                    color='#f3ecf8'
                                    sx={{ marginRight: "10px" }}
                                />
                                {descriptionName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Montserrat Alternates",
                                    color: "#f3ecf8",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "5px",
                                }}
                            >
                                <PanoramaIcon
                                    color='#f3ecf8'
                                    sx={{
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {viewName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Montserrat Alternates",
                                    color: "#f3ecf8",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "5px",
                                }}
                            >
                                <LocationOnIcon
                                    color='#f3ecf8'
                                    sx={{
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {locationName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Montserrat Alternates",
                                    color: "#f3ecf8",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "5px",
                                }}
                            >
                                <DeviceUnknownIcon
                                    color='#f3ecf8'
                                    sx={{
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {deviceName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Montserrat Alternates",
                                    color: "#f3ecf8",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "5px",
                                }}
                            >
                                <ColorLensIcon
                                    color='#f3ecf8'
                                    sx={{
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {colorName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Montserrat Alternates",
                                    color: "#f3ecf8",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "5px",
                                }}
                            >
                                <CameraIcon
                                    color='#f3ecf8'
                                    sx={{
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {qualityName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Montserrat Alternates",
                                    color: "#f3ecf8",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <CalendarMonthIcon
                                    color='#f3ecf8'
                                    sx={{
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {photo.postDate}
                            </DialogContentText>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    container
                    sx={{
                        fontFamily: "Montserrat Alternates",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <Box>
                        <Button
                            color='error'
                            style={{ fontFamily: "Montserrat Alternates" }}
                            onClick={onHandleClick}
                        >
                            Закрыть
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
export default PhotoPage
