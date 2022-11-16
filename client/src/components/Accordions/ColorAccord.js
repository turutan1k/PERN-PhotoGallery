import React, { useState } from "react"
import { Accordion, Button, Grid, TextField } from "@mui/material"
import { AccordionSummary } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Typography } from "@mui/material"
import { AccordionDetails } from "@mui/material"
import { createColor } from "./../../http/photoAPI"
import ColorLensIcon from "@mui/icons-material/ColorLens"
import QueueIcon from "@mui/icons-material/Queue"

const ColorAccord = () => {
    const [value, setValue] = useState("")

    const addColor = () => {
        createColor({ name: value }).then((data) => {
            setValue("")
        })
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
                    expandIcon={<ExpandMoreIcon sx={{ color: "#f3ecf8" }} />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography
                        sx={{
                            fontFamily: "Montserrat Alternates",
                            color: "#f3ecf8",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <ColorLensIcon
                            color='#f3ecf8'
                            sx={{ marginRight: "10px", fontSize: "16px" }}
                        />
                        Цвет фотографии
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "#3e503c" }}>
                    <Grid
                        item
                        sx={{
                            fontFamily: "Montserrat Alternates",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TextField
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            autoFocus
                            margin='dense'
                            id='outlined-basic'
                            label='Цвет'
                            type='text'
                            fullWidth
                            required
                            helperText='Цвет, которого больше всего на фотографии (Например: Красный)'
                        />
                    </Grid>
                    <Grid
                        container
                        sx={{
                            fontFamily: "Montserrat Alternates",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            onClick={addColor}
                            style={{
                                fontFamily: "Montserrat Alternates",
                                color: "#f3ecf8",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <QueueIcon
                                sx={{
                                    color: "#f3ecf8",
                                    marginRight: "10px",
                                    fontSize: "14px",
                                }}
                            />
                            Добавить
                        </Button>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default ColorAccord
