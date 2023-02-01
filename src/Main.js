import { Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ImageOne from './shubham-dhage-R5A_YlcSJwA-unsplash.jpg';
import ImageTwo from './xiaole-tao-Fo-HQUlRGkU-unsplash.jpg';
import ImageThree from './robo-wunderkind-hLvQ4-QEBAE-unsplash.jpg';
import ImageFour from './kobu-agency-67L18R4tW_w-unsplash.jpg'



function Main(){

    return(
        <div className="main-container">
            <h2 className="what-we-do">We enrich humna lives through the thoughtful application of design and technology</h2>

            <div >
                <Grid container className="grid-container ">
                    <Grid item xs={12} sm={4} className='text'>
                        <Typography style={{fontFamily:'Comic Neue',fontSize:'20px', fontWeight:600}}>
                            In the summer of 2022 we reported our representation data and committed to doing so annually. One year later we are pleased to share an update on our goals, our progress, and the work that still needs to be done
                        </Typography>
                        <Button variant="contained" style={{
                            background:'#fff',
                            color:"#000",
                            borderRadius:'20px',
                            textTransform:'inherit',
                            margin:'20px 0px'
                        }}>Learn more
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={7} className="image-area">
                        <div className="images"><img src={ImageFour}></img></div>
                    </Grid>
                </Grid>

                <Grid container className="grid-container">
                    <Grid item xs={12} sm={7} className="image-area">
                        <div className="images"><img src={ImageTwo}></img></div>
                    </Grid>

                    <Grid item xs={12} sm={4} className='text'>
                        <Typography style={{fontFamily:'Comic Neue',fontSize:'20px', fontWeight:600}}>
                            In the summer of 2022 we reported our representation data and committed to doing so annually. One year later we are pleased to share an update on our goals, our progress, and the work that still needs to be done
                        </Typography>
                        <Button variant="contained" style={{
                            background:'#fff',
                            color:"#000",
                            borderRadius:'20px',
                            textTransform:'inherit',
                            margin:'20px 0px'
                        }}>Learn more
                        </Button>
                    </Grid>
                </Grid>

                <Grid container className="grid-container">
                    <Grid item xs={12} sm={4} className='text'>
                        <Typography style={{fontFamily:'Comic Neue',fontSize:'20px', fontWeight:600}}>
                            In the summer of 2022 we reported our representation data and committed to doing so annually. One year later we are pleased to share an update on our goals, our progress, and the work that still needs to be done
                        </Typography>
                        <Button variant="contained" style={{
                            background:'#fff',
                            color:"#000",
                            borderRadius:'20px',
                            textTransform:'inherit',
                            margin:'20px 0px'
                        }}>Learn more
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={7} className="image-area">
                        <div className="images"><img src={ImageThree}></img></div>
                    </Grid>
                </Grid>
            </div>

            <div class="typewriter">
                <h2>Explore the new idea.</h2>
            </div>

            <div className="bottom-main">
                <h2 className="what-we-do">Explore few of our most impactfull projects</h2>
                <Button variant="contained" style={{
                    background:'#fff',
                    color:"#000",
                    borderRadius:'20px',
                    textTransform:'inherit',
                    margin:'10px 0px'
                }}
                >Our work</Button>
            </div>

        </div>
    )
}


export default Main