/* eslint-disable */
import React from "react"
import { Accordion, Grid, TextField, Button, MenuItem } from "@mui/material"
import { AccordionSummary } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Typography } from "@mui/material"
import { AccordionDetails } from "@mui/material"
import { Context } from "../../index"
import { useContext, useEffect } from "react"
import { useState } from "react"
import {
    fetchViews,
    fetchDevices,
    fetchLocations,
    fetchQualities,
    fetchDescriptions,
    fetchColors,
} from "../../http/photoAPI"
import { observer } from "mobx-react-lite"
import { createPhoto } from "./../../http/photoAPI"
import { useNavigate } from "react-router-dom"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"
const PhotoAccord = observer(() => {
    const { photo } = useContext(Context)
    const [postDate, setPostDate] = useState("")
    const [file, setFile] = useState(null)
    const [view, setView] = useState("")
    const [location, setLocation] = useState("")
    const [device, setDevice] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("")
    const [quality, setQuality] = useState("")
    const [info, setInfo] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchViews().then((data) => photo.setViews(data))
        fetchLocations().then((data) => photo.setLocations(data))
        fetchDevices().then((data) => photo.setDevices(data))
        fetchDescriptions().then((data) => photo.setDescriptions(data))
        fetchQualities().then((data) => photo.setQualities(data))
        fetchColors().then((data) => photo.setColors(data))
    }, [photo])

    const addPhoto = () => {
        const formData = new FormData()
        formData.append("postDate", postDate)
        formData.append("img", file)
        formData.append("viewId", photo.selectedView.id)
        formData.append("locationId", photo.selectedLocation.id)
        formData.append("deviceId", photo.selectedDevice.id)
        formData.append("colorId", photo.selectedColor.id)
        formData.append("qualityId", photo.selectedQuality.id)
        formData.append("descriptionId", photo.selectedDescription.id)
        formData.append("info", JSON.stringify(info))
        createPhoto(formData).then((data) => navigate(-1))
    }

    const postDateChange = (e) => {
        setPostDate(e.target.value)
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const viewChange = (e) => {
        setView(e.target.value)
    }

    const locationChange = (e) => {
        setLocation(e.target.value)
    }

    const deviceChange = (e) => {
        setDevice(e.target.value)
    }
    const colorChange = (e) => {
        setColor(e.target.value)
    }
    const qualityChange = (e) => {
        setQuality(e.target.value)
    }
    const descriptionChange = (e) => {
        setDescription(e.target.value)
    }

    return (
        <div style={{ margin: "10px" }}>
            <Accordion
                sx={{
                    fontFamily: "Montserrat Alternates",
                    marginTop: 3,
                    background: "#7f886a",
                }}
            >
                <AccordionSummary
                    style={{ background: "#7f886a", borderRadius: "5px" }}
                    expandIcon={<ExpandMoreIcon style={{ color: "#f3ecf8" }} />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography
                        style={{
                            fontFamily: "Montserrat Alternates",
                            color: "#f3ecf8",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <AddPhotoAlternateIcon
                            color='#f3ecf8'
                            sx={{ marginRight: "10px", fontSize: "16px" }}
                        />
                        Фотографию
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "#3e503c" }}>
                    <Grid
                        container
                        sx={{
                            fontFamily: "Montserrat Alternates",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Grid
                            item
                            sx={{
                                fontFamily: "Montserrat Alternates",
                                padding: 1,
                            }}
                        >
                            <TextField
                                onChange={descriptionChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Описание'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите описание для вашей фотографии'
                            >
                                {photo.descriptions &&
                                    photo.descriptions?.map((description) => (
                                        <MenuItem
                                            value={description.name}
                                            onClick={() =>
                                                photo.setSelectedDescription(
                                                    description
                                                )
                                            }
                                            key={description.id}
                                        >
                                            {description.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={viewChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Вид'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите вид фотографии'
                            >
                                {photo.views &&
                                    photo.views?.map((view) => (
                                        <MenuItem
                                            key={view.id}
                                            value={view.name}
                                            onClick={() =>
                                                photo.setSelectedView(view)
                                            }
                                        >
                                            {view.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={locationChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Геолокация съемки'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите локацию, где была сделана данная фотография'
                            >
                                {photo.locations &&
                                    photo.locations.map((location) => (
                                        <MenuItem
                                            value={location.name}
                                            onClick={() =>
                                                photo.setSelectedLocation(
                                                    location
                                                )
                                            }
                                            key={location.id}
                                        >
                                            {location.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={deviceChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Устройство'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите устройство, на которые была сделана фотография'
                            >
                                {photo.devices &&
                                    photo.devices?.map((device) => (
                                        <MenuItem
                                            value={device.name}
                                            onClick={() =>
                                                photo.setSelectedDevice(device)
                                            }
                                            key={device.id}
                                        >
                                            {device.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={qualityChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Качество'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите качество фотографии'
                            >
                                {photo.qualities &&
                                    photo.qualities?.map((quality) => (
                                        <MenuItem
                                            value={quality.name}
                                            onClick={() =>
                                                photo.setSelectedQuality(
                                                    quality
                                                )
                                            }
                                            key={quality.id}
                                        >
                                            {quality.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={colorChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Цвет'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите цвет, который преобладает на вашей фотографии'
                            >
                                {photo.colors &&
                                    photo.colors?.map((color) => (
                                        <MenuItem
                                            value={color.name}
                                            onClick={() =>
                                                photo.setSelectedColor(color)
                                            }
                                            key={color.id}
                                        >
                                            {color.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                value={postDate}
                                onChange={postDateChange}
                                color='primary'
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Дата поста'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type='date'
                                fullWidth
                            />
                            <TextField
                                onChange={selectFile}
                                color='primary'
                                autoFocus
                                margin='dense'
                                id='formatted-numberformat-input'
                                label='Загрузить фото'
                                type='file'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                required
                                helperText='Выберите фото, которое хотите загрузить'
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        sx={{
                            fontFamily: "Montserrat Alternates",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            onClick={addPhoto}
                            style={{
                                fontFamily: "Montserrat Alternates",
                                color: "#f3ecf8",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <AddPhotoAlternateIcon
                                color='#f3ecf8'
                                sx={{ marginRight: "10px", fontSize: "14px" }}
                            />
                            Добавить фотографию
                        </Button>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
})

export default PhotoAccord
