import React from "react"
import { useContext } from "react"
import { Context } from "../../index"
import { Stack } from "@mui/material"
import Location from "../Location"
import LocationOn from "@mui/icons-material/LocationOn"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const LocationBar = () => {
    const { photo } = useContext(Context)
    return (
        <Stack
            sx={{
                fontFamily: "Montserrat Alternates",
                flexWrap: "wrap",
                color: "#f3ecf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                fontSize: "20px",
                padding: "8px 16px 8px 16px",
            }}
            direction='row'
            component='div'
        >
            <LocationOnIcon
                sx={{ marginRight: "1px", color: "f3ecf8", fontSize: "20px" }}
            />
            <div style={{ marginRight: "10px" }}>:</div>
            {photo.locations &&
                photo.locations?.map((location) => (
                    <Location
                        sx={{
                            fontFamily: "Montserrat Alternates",
                            fontSize: "20px",
                        }}
                        key={location.id}
                        label={location.name}
                        photo={location}
                        onClick={() => photo.setSelectedLocation(location)}
                        isSelected={location.id === photo.setSelectedLocation}
                    />
                ))}
        </Stack>
    )
}

export default LocationBar
