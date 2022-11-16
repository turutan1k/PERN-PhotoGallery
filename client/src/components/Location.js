import React from "react"
import { Chip, Stack } from "@mui/material"

const Location = (props) => {
    const { photo, onClick, className, isSelected, label } = props
    const { name } = photo
    return (
        <div>
            <Stack>
                <Chip
                    sx={{
                        mt: 0,
                        flexWrap: "wrap",
                        fontSize: "20px",
                        backgroundColor: "#7f886a",
                        color: "#f3ecf8",
                        margin: "0px 5px 0px 5px",
                    }}
                    primary={name}
                    className={className}
                    label={label}
                    selected={isSelected}
                    onClick={onClick}
                />
            </Stack>
        </div>
    )
}

export default Location
