import React from "react"
import { ListItemButton, ListItemText } from "@mui/material"

const View = (props) => {
    const { photo, onClick, className, isSelected } = props
    const { name } = photo
    return (
        <div>
            <ListItemButton
                className={className}
                selected={isSelected}
                sx={{
                    fontFamily: "Montserrat Alternates",
                    cursor: "pointer",
                }}
                onClick={onClick}
            >
                <ListItemText primary={name} />
            </ListItemButton>
        </div>
    )
}

export default View
