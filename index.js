import React from "react"
import ReactDOM from "react-dom"
import Nav from "./nav.js"
import Main from "./main.js"
import Footer from "./footer.js"



ReactDOM.render(
    <div className="body-react">
        <Nav/>
        <Main/>
        <Footer/>
    </div>
    ,document.getElementById("root"))