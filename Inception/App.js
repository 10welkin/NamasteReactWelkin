import React from "react";
import ReactDOM from "react-dom/client"

const Title = () => (
    <h1>head</h1>
)

const title = (
    <h1>head</h1>
)

const HeadingComponent = () => (
    <>
            {title}
            <h1>HEllo</h1>
            <Title />
    </>
    )

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)