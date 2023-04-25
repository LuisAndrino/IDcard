import React from "react"
import ReactDOM from "react-dom"
import Nav from "./scr/nav.js"
import Main from "./scr/main.js"
import Footer from "./scr/footer.js"



ReactDOM.render(
    <div className="body-react">
        <Nav/>
        <Main/>
        <Footer/>
    </div>
    ,document.getElementById("root"))