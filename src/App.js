import { sculptureList } from "./data"
import { useState } from "react"

export default function Container(){
    const [index, setIndex] = useState(0)
    const tamanho = sculptureList.length - 1
    console.log(sculptureList)
    function nextPage(){
        console.log(tamanho)
        console.log(index)

        if(index >= tamanho){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }
    const data = sculptureList[index]
    return(
        <>
        <button onClick={nextPage}>Próximo</button>
        <div>
            {data.name}<br/>
            {data.description}
        </div>
        </>
    )
}
