// eslint-disable-next-line import/no-anonymous-default-export
/*export default ({name}) => {
    return (<h1>{name}</h1>)
}*/


import HalloWelt from "./HalloWelt";
import {useEffect, useState} from "react";
import "./App.css"
import Button from '@material-ui/core/Button';

export default ({name}) => {
    const [alter, setAlter] = useState(20)
    useEffect(()=>{
        window.addEventListener("resize", (event)=>{
            console.log("Jo hier passiert was pass mal auf")
        })
    })
    const test = new HalloWelt(name, alter)
    return (<div>
            <h1>{test.fetchData()}</h1>
            <div className={"ButtonDiv"}><Button className={"Button"} variant="contained" color="primary" onClick={() => setAlter(alter + 1)}>Hallo
                Ich bin ein Knopf</Button></div>
        </div>
    )
}