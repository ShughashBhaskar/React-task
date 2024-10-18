import { useState } from "react"

const Task5 = ()=>{

    const [item,setitem] = useState("")
    const [mylist,setmylist]= useState([])

    function handleInput(event){
        setitem(event.target.value)

    }
    function handleAdd(){
        setmylist([...mylist,item])
    }


    return(
       <>
       <input type="text" onChange={handleInput} value={item} placeholder="Enter the item..."/>
       <button onClick={handleAdd}>Add</button>
       <ul>
       {
       mylist.map(function(item){
        return (<li>{item}</li>)
    

})
    }
       </ul>
       </>

    )


}

export default Task5