import { useState } from "react"


const Task2 = ()=>{
    let [text, settext] = useState("Hi")
    let [vis, setvis] = useState(true)



    const tog = () => {
        setvis(!vis)

    }
    return (
        <>
            {
                vis ? <h1>{text}</h1> : null

            }

            
            <button onClick={tog}>Toggle</button>

        </>
    )


}





export default Task2