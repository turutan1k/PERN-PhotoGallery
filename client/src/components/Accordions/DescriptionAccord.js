import React, { useState } from "react"
import { Accordion, Button, Grid, TextField } from "@mui/material"
import { AccordionSummary } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Typography } from "@mui/material"
import { AccordionDetails } from "@mui/material"
import { createDescription } from "./../../http/photoAPI"
import DescriptionIcon from "@mui/icons-material/Description"
import QueueIcon from "@mui/icons-material/Queue"

const DescriptionAccord = () => {
    const [value, setValue] = useState("")

    const addDescription = () => {
        createDescription({ name: value }).then((data) => {
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
                        <DescriptionIcon
                            color='#f3ecf8'
                            sx={{ marginRight: "10px", fontSize: "16px" }}
                        />
                        Описание фотографии
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
                            label='Описание'
                            type='text'
                            fullWidth
                            required
                            helperText='Описание для вашей фотографии (Например: Черный квадрат)'
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
                            onClick={addDescription}
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
                                    marginRight: "10px", fontSize: "14px"
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

export default DescriptionAccord
