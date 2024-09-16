import ReactDom from "react-dom/client"

//Linking Stylesheet
import "./style.css"

//importing component
import App from "./App"


const root = ReactDom.createRoot(document.getElementById("root"));


root.render(<App></App>)  


