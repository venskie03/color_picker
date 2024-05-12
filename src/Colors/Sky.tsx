import axios from "axios";
import { useEffect, useState } from "react"


export default function Sky() {
    const [colordata, setColordata] = useState([]);
    const [copiedcolor, setcopiedcolor] = useState('');
    const [copytext, setCopytext] = useState('');

    const fetchcolorcolors = async () =>{
        await axios.get("https://color-api-wrapper.onrender.com/api/v1/skycolors").then(
             res => {setColordata(res.data.colors)}
        )
    }

    const onlclickcopycolors = (colors: string) =>{
      navigator.clipboard.writeText(colors)
      setcopiedcolor(colors)
      setCopytext("Copied")
  }

  const onhovercolors = (colors: string) =>{
      setcopiedcolor(colors)
      setCopytext("Copy")
  }

    useEffect(()=>{
        fetchcolorcolors()
    },[])

  return (
    <div className="flex flex-wrap justify-center py-20 gap-4">
    {colordata.map((colors: string)=>(
     <div onMouseEnter={()=>{onhovercolors(colors)}} onClick={()=>{onlclickcopycolors(colors)}} className={`w-72 h-52 flex justify-center items-center rounded-lg bg-[${colors}]`}>
      {colors == copiedcolor ? <p className="bg-gray-900 p-4 text-white rounded-lg cursor-pointer">{copytext}</p> : ''}
     </div>
    ))}
  </div>
  )
}
