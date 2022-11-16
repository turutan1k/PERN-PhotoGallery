import React, { useEffect, useState } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import { PHOTO_ROUTE } from "../utils/consts"
import { ImageListItem } from "@mui/material"
import { Paper } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import PanoramaIcon from "@mui/icons-material/Panorama"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { fetchLocations, fetchViews } from "../http/photoAPI"

export default function PhotoItem({ photo }) {
    const navigate = useNavigate()
    const [views, setViews] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetchViews().then((data) => setViews(data))
        fetchLocations().then((data) => setLocations(data))
    }, [])

    let onHandleClick = () => {
        setTimeout(() => {
            navigate(PHOTO_ROUTE + "/" + photo.id)
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
    return (
        <Card
            sx={{
                fontFamily: "Montserrat Alternates",
                minWidth: 345,
                mt: 1,
                m: 2,
                backgroundColor: "#3e503c",
            }}
        >
            <Paper
                variant='outlined'
                alt='photo.img'
                sx={{
                    fontFamily: "Montserrat Alternates",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: "1",
                    flexShrink: "1",
                    flexBasics: "100%",
                    textAlign: "center",
                    p: 2,
                    backgroundColor: "#3e503c",
                }}
            >
                <ImageListItem key={photo.img}>
                    <img
                        style={{
                            maxWidth: "100%",
                            height: 400,
                            objectFit: "cover",
                            alignItems: "center",
                            justifyContent: "center",
                            objectPosition: "center",
                            padding: "2",
                        }}
                        src={process.env.REACT_APP_API_URL + photo.img}
                        alt='Item'
                    />
                </ImageListItem>
            </Paper>
            <CardContent>
                <Typography
                    variant='body2'
                    color='text.primary'
                    style={{
                        fontFamily: "Montserrat Alternates",
                        fontSize: "24px",
                        color: "#f3ecf8",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <PanoramaIcon
                        sx={{
                            color: "#f3ecf8",
                            marginRight: "10px",
                            fontSize: "24px",
                        }}
                    />
                    {viewName.name}
                </Typography>
                <Typography
                    variant='body2'
                    color='text.primary'
                    style={{
                        fontFamily: "Montserrat Alternates",
                        fontSize: "24px",
                        color: "#f3ecf8",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <LocationOnIcon
                        sx={{
                            color: "#f3ecf8",
                            marginRight: "10px",
                            fontSize: "24px",
                        }}
                    />
                    {locationName.name}
                </Typography>
                <Typography
                    variant='body2'
                    color='text.primary'
                    style={{
                        fontFamily: "Montserrat Alternates",
                        fontSize: "24px",
                        color: "#f3ecf8",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <CalendarMonthIcon
                        color='#f3ecf8'
                        sx={{ marginRight: "10px", fontSize: "24px" }}
                    />
                    {photo.postDate}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    fontFamily: "Montserrat Alternates",
                    justifyContent: "flex-end",
                }}
            >
                <Button
                    style={{
                        fontFamily: "Montserrat Alternates",
                        color: "#f3ecf8",
                        display: "flex",
                        alignItems: "center",
                    }}
                    size='small'
                    onClick={onHandleClick}
                >
                    Информация
                    <InfoIcon
                        sx={{
                            color: "#f3ecf8",
                            marginLeft: "10px",
                            fontSize: "13px",
                        }}
                    />
                </Button>
            </CardActions>
        </Card>
    )
}
