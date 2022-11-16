import React from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import { useContext } from "react"
import { Stack } from "@mui/material"
import PhotoItem from "./PhotoItem"
const PhotoList = observer(() => {
    const { photo } = useContext(Context)
    return (
        <Stack
            sx={{
                fontFamily: "Montserrat Alternates",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
            }}
        >
            {photo.photos &&
                photo?.photos?.map((photo) => (
                    <PhotoItem key={photo.id} photo={photo} />
                ))}
        </Stack>
    )
})

export default PhotoList
