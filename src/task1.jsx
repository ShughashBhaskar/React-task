import { useState } from "react"

const Task1 = () => {

    let [num, setnum] = useState(0)
    let [vis, setvis] = useState(false)


    function inc() {
        setnum(num + 1)
    }

    const tog = () => {
        setvis(!vis)

    }
    return (
        <>
            {
                vis ? <h1>{num}</h1> : null

            }

            <button onClick={inc}>Increment</button>
            <button onClick={tog}>Toggle</button>

        </>
    )


}

export default Task1