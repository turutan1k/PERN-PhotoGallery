import { Grid } from "@mui/material"
import React from "react"
import PhotoList from "../components/PhotoList"
import LocationBar from "../components/Bars/LocationBar"
import { observer } from "mobx-react-lite"
import Navbar from "../components/Bars/Navbar"
import Pages from "./../components/Pages"

const Shop = observer(() => {
    return (
        <div>
            <Grid container direction='row' paddingTop={3} mt={3}>
                <Grid item xs={2}>
                    <Navbar />
                </Grid>
                <Grid item xs={10}>
                    <LocationBar />
                    <PhotoList />
                    <Pages />
                </Grid>
            </Grid>
        </div>
    )
})

export default Shop
