import axios from "axios";
import { useEffect, useState } from "react"

export default function Light() {
    const [colordata, setcolordata] = useState([]);
    const [copiedcolor, setcopiedcolor] = useState('');
    const [copytext, setCopytext] = useState('');

    const fetchlightcolors = async () =>{
        await axios.get("https://color-api-wrapper.onrender.com/api/v1/lightwarmcolors").then(
            res=>{setcolordata(res.data.colors);
                console.log(res.data.colors)
            }
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
        fetchlightcolors()
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
