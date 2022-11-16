import { React, useContext, useEffect, useState } from "react"
import AppRouter from "./components/AppRouter"
import { observer } from "mobx-react-lite"
import { Context } from "./index"
import { check } from "./http/userAPI"
import { CircularProgress, Box } from "@mui/material"
import Header from "./components/Bars/Header"
import {
    fetchViews,
    fetchLocations,
    fetchDevices,
    fetchDescriptions,
    fetchQualities,
    fetchColors,
    fetchPhotos,
} from "./http/photoAPI"

const App = observer(() => {
    const { user, photo } = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            check()
                .then((data) => {
                    user.setUser(true)
                    user.setIsAuth(true)
                    fetchViews().then((data) => photo.setViews(data))
                    fetchLocations().then((data) => photo.setLocations(data))
                    fetchDevices().then((data) => photo.setDevices(data))
                    fetchDescriptions().then((data) =>
                        photo.setDescriptions(data)
                    )
                    fetchColors().then((data) => photo.setColors(data))
                    fetchQualities().then((data) => photo.setQualities(data))
                    fetchPhotos(null, null, 1, 10).then((data) => {
                        photo.setPhotos(data.rows)
                        photo.setTotalCount(data.count)
                    })
                })
                .finally(() => setLoading(false))
        }, 1000)
    }, [user, photo])
    useEffect(() => {
        fetchPhotos(
            photo.selectedView.id,
            photo.selectedLocation.id,
            photo.page,
            10
        ).then((data) => {
            photo.setPhotos(data.rows)
            photo.setTotalCount(data.count)
        })
    }, [photo, photo.selectedView, photo.selectedLocation, photo.page])
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 20
            )
        }, 100)
        return () => {
            clearInterval(timer)
        }
    })

    if (loading) {
        return (
            <Box sx={{ position: "absolute", left: "50%", top: "50%" }}>
                <CircularProgress
                    variant='determinate'
                    value={progress}
                    sx={{ color: "#f3ecf8" }}
                />
            </Box>
        )
    }

    return (
        <>
            <Header />
            <AppRouter />
        </>
    )
})

export default App
