import { Button } from "@mui/material";
import React from "react";



function Header(){
    return(
        <div className="header-info">
            <h1>Build. Grow. Serve</h1>
            <p>We are investing $3 million over the next three Years in our build|Grow|Serve programe, created to support and empower Black and underrepresented communities</p>
            <Button variant="contained" style={{
                background:'#fff',
                color:"#000",
                borderRadius:'20px',
                textTransform:'inherit'
            }}>Learn More</Button>
        </div>
    )
}


export default Header;