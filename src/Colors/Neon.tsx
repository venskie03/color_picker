import axios from "axios"
import { useEffect, useState } from "react"

export default function Neon() {
   const [colordata, setcolorsdata] = useState([]);
   const [copiedColor, setCopiedColor] = useState('');
   const [copytext, setCopytext] = useState('');
  const fetchcolors = async () =>{
    await axios.get('https://color-api-wrapper.onrender.com/api/v1/neoncolors')
    .then(res => {
       setcolorsdata(res.data.colors)
    } )
  }

  useEffect(()=>{
    fetchcolors()
  },[])

  const copyColorToClipboard = (colors: string) => {
    navigator.clipboard.writeText(colors);
    setCopiedColor(colors)
    console.log(copiedColor)
    setCopytext("Copied")
  };

  const ishoverincolor = (colors: string) =>{
    setCopiedColor(colors)
    setCopytext("Copy")
  }


  return (
    <div className="flex flex-wrap justify-center gap-2 py-20">
        {colordata.map((colors: string)=>(
         
                <div onMouseEnter={()=>ishoverincolor(colors)} onClick={()=>{copyColorToClipboard(colors)}} className={` border-black w-72 h-52 flex justify-center items-center rounded-lg bg-[${colors}]`}>
                {colors == copiedColor ? <p className="bg-gray-900 p-4 text-white rounded-lg cursor-pointer">  {copytext}</p> : ''}
                </div>
        ))}

    </div>
  )
}
