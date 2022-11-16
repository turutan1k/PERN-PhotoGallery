import React, { useState } from "react"
import { List } from "@mui/material"
import { ListSubheader } from "@mui/material"
import { Context } from "../../index"
import { useContext } from "react"
import View from "../View"
import Panorama from "@mui/icons-material/Panorama"

const Navbar = () => {
    const { photo } = useContext(Context)
    const [selectedIndex, setSelectedIndex] = useState()
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    }
    return (
        <List
            sx={{ fontFamily: "Montserrat Alternates" }}
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
                <ListSubheader
                    sx={{
                        fontFamily: "Montserrat Alternates",
                        fontSize: "20px",
                        display: "flex",
                        backgroundColor: "#7f886a",
                        color: "#f3ecf8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                    }}
                    component='div'
                    id='nested-list-subheader'
                >
                    <Panorama sx={{ marginRight: "10px", color: "#f3ecf8",fontSize: "20px" }} />
                    Вид фотографии:
                </ListSubheader>
            }
        >
            {photo.views &&
                photo?.views?.map((view) => (
                    <View
                        key={view.id}
                        sx={{
                            fontFamily: "Montserrat Alternates",
                            fontSize: "20px",
                        }}
                        photo={view}
                        onClick={(event) => {
                            photo.setSelectedView(view)
                            handleListItemClick(event, view.id)
                        }}
                        isSelected={selectedIndex === view.id}
                    />
                ))}
        </List>
    )
}

export default Navbar
