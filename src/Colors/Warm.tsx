import axios from "axios"
import { useEffect, useState } from "react"


export default function Warm() {
    const [colordata, setColordata] = useState([]);
    const [copycolors, setCopycolors] = useState('')
    const [colortext, setcolortext] = useState('')


    const fetchwarmcolors = async () =>{
        await axios.get('https://color-api-wrapper.onrender.com/api/v1/warmcolors').then(res => {setColordata(res.data.colors)}
         )
    }

    useEffect(()=>{
        fetchwarmcolors()
    },[])

    const copycoloronclick = (colors: string) =>{
        navigator.clipboard.writeText(colors)
        setCopycolors(colors)
        console.log(copycolors)
        setcolortext("Copied")
    }
    const onhovercolors = (colors: string) =>{
        setcolortext("Copy")
        setCopycolors(colors)
    }


  return (
    <div className="flex flex-wrap justify-center gap-4 py-20">
      {colordata.map((colors: string)=>(
       <div onMouseEnter={()=>onhovercolors(colors)} onClick={()=> copycoloronclick(colors)} className={`w-72 flex items-center justify-center h-52 rounded-lg bg-[${colors}]`}>
        {colors == copycolors ? <p className="bg-gray-900 p-4 text-white rounded-lg cursor-pointer">{colortext}</p> : ''}
       </div>
      ))}
    </div>
  )
}
