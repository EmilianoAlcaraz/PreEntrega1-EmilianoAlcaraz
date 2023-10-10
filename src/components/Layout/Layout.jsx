import React from "react"
import Navbar from "../Navbar/Navbar"

const Layout = React.memo(({children})=> {
 return (
    <>
    <Navbar />
    <div style={{padding:"20px 0px"}}>
        {children}
    </div>
    </>
 )
})

export default Layout