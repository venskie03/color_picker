import { useState } from "react"
export default function Header() {
  const [showOptions, setOptions] = useState("hidden");
  const [shownav, setshownav] = useState("hidden");
  const [showicon, setshowicon] = useState("");
  const [showicon2, setshowicon2] = useState("hidden");
  const [showOptions2, setOptions2] = useState("hidden");
  const ioniconlogo = `<ion-icon name="color-palette-outline"></ion-icon>`

  const menuoutline = `<ion-icon name="menu-outline"></ion-icon>`
  const closemenu = `<ion-icon name="close-outline"></ion-icon>`

  const showDataOptions = () => {
    setshownav("hidden")
    setOptions("flex")
    setshowicon2("hidden")

  }

  const disabledata = () => {
    
    setOptions("hidden")
  }

  const shownavigation = () => {
    setshownav("grid")
    setshowicon2("flex")
    setshowicon("hidden")
    setOptions("hidden")
  }

  
  const disablenavigation = () => {
setshowicon2("hidden")
setshowicon("flex")
setshownav("hidden")
  }

  const shownavigation1 = () => {
    setOptions2("flex")
    setshownav("hidden")
    setshowicon("flex")
    setshowicon2("hidden")
  } 

  
  
  


  return (
  <div className="">
      <div className="bg-gray-950 w-full text-white flex md:justify-evenly justify-between md:p-0 p-2 md:py-3 fixed z-50">
     <div className="flex font-bold gap-2">
     <a href="/" className="font-bold text-4xl mt-2" dangerouslySetInnerHTML={{ __html: ioniconlogo }}></a>
       <a href="/" className="headline font-bold text-lg mt-3"> Color Picker</a>
     </div>
     
     <div className="gap-6 hidden  md:flex mt-3">
     <div className="flex gap-6 mt-1">
     <a href="/">Home</a>
        <a href="/newcolors">New Colors</a>
        <a target="_blank" href="https://kevinkyleganados.netlify.app/">Contact Me</a>
        <a href="/apidocs">Api Docs</a>
     </div>
        <div className="relative inline-block text-left">
  <div>
    <button onClick={showDataOptions} onMouseEnter={showDataOptions} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
    Select a Theme
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <div onClick={disabledata} onMouseLeave={disabledata} className={`absolute ${showOptions} right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-950 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
    <div className="py-1" role="none">
    <a href="/christmascolors" className="text-gray-50 block px-4 py-2 text-sm " role="menuitem" id="menu-item-0">Christmass</a>
      <a href="/coffeecolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Coffee</a>
      <a href="/coldcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Cold</a>
      <a href="/earthcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Earth</a>
      <a href="/foodcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Food</a>
      <a href="/halloweencolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Halloween</a>
      <a href="/happycolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Happy</a>
      <a href="/kidscolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Kids</a>
      <a href="/lightcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Light</a>
      <a href="/naturecolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Nature</a>
      <a href="/neoncolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Neon</a>
      <a href="/nightcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Night</a>
      <a href="/rainbowcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Rainbow</a>
      <a href="/retrocolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Retro</a>
      <a href="/seacolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Sea</a>
      <a href="/skincolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Skin</a>
      <a href="/skycolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Sky</a>
      <a href="/spacecolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Space</a>
      <a href="/springcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Spring</a>
      <a href="/summercolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Summer</a>
      <a href="sunsetcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Sunset</a>
      <a href="/warmcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Warm</a>
    </div>
  </div>
</div>
     </div>
        <p onClick={shownavigation} className={`${showicon} md:hidden text-3xl mt-2.5`}  dangerouslySetInnerHTML={{ __html: menuoutline }}>
      
        </p>
        <p onClick={disablenavigation} className={`${showicon2} text-3xl mt-2.5`}  dangerouslySetInnerHTML={{ __html: closemenu }}>
        </p>
   
    </div>

    




    <div className="gap-6   grid w-full">
  <div className="py-14">
  <div className={`fixed ${showOptions2} bg-gray-950 rounded-r-lg p-4 h-[450px] overflow-scroll`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
    <div className="py-1 space-y-4 " role="none">
      <a href="/christmascolors" className="text-gray-50 block px-4 py-2 text-sm " role="menuitem" id="menu-item-0">Christmass</a>
      <a href="/coffeecolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Coffee</a>
      <a href="/coldcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Cold</a>
      <a href="/earthcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Earth</a>
      <a href="/foodcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Food</a>
      <a href="/halloweencolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Halloween</a>
      <a href="/happycolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Happy</a>
      <a href="/kidscolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Kids</a>
      <a href="/lightcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Light</a>
      <a href="/naturecolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Nature</a>
      <a href="/neoncolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Neon</a>
      <a href="/nightcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Night</a>
      <a href="/rainbowcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Rainbow</a>
      <a href="/retrocolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Retro</a>
      <a href="/seacolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Sea</a>
      <a href="/skincolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Skin</a>
      <a href="/skycolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Sky</a>
      <a href="/spacecolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Space</a>
      <a href="/springcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Spring</a>
      <a href="/summercolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">Summer</a>
      <a href="sunsetcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Sunset</a>
      <a href="/warmcolors" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-2">Warm</a>
    </div>
  </div>
  </div>
     <div className={`${shownav} items-center justify-center text-center p-5 gap-6 py-20 bg-slate-950 text-white fixed z-10 w-full h-screen`}>
      
     <a className="py-2" href="/">Home</a>
        <a className="py-2" href="/newcolors">New Colors</a>
        <a className="py-2" href="/apidocs">Api Docs</a>
        <button onClick={shownavigation1}  type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      Select a Theme
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
     </div>
     </div>

  </div>
  )
}
