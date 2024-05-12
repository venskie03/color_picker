import { useState } from "react"

export default function Header() {
  const [showOptions, setOptions] = useState("hidden");
  const [shownav, setshownav] = useState("hidden");
  const [showicon, setshowicon] = useState("");
  const [showicon2, setshowicon2] = useState("hidden");
  const showDataOptions = () => {

    setOptions("flex")
  }

  const disabledata = () => {

    setOptions("hidden")
  }

  const shownavigation = () => {

    setshowicon2("flex")
    setshowicon("hidden")
  }

  
  const disablenavigation = () => {
setshowicon2("hidden")
setshowicon("flex")
  }


  return (
  <div className="">
      <div className="bg-gray-950 w-full text-white flex md:justify-evenly justify-between md:p-0 p-2 md:py-3 fixed">
     <div className="flex font-bold gap-2">
        <p  className="font-bold text-4xl mt-2"><ion-icon name="color-palette-outline"></ion-icon></p>
       <h1 className="headline font-bold text-lg mt-3"> Color Picker</h1>
     </div>
     
     <div className="gap-6 hidden  md:flex mt-3">
     <div className="flex gap-6 mt-1">
     <a href="">Home</a>
        <a href="">Popular Colors</a>
        <a href="">New Colors</a>
        <a href="">Api Docs</a>
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

  <div onClick={disabledata} onMouseLeave={disabledata} className={`absolute ${showOptions} right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Christmass</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Coffee</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Cold</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Earth</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Food</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Halloween</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Happy</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Kids</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Light</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Nature</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Neon</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Night</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Rainbow</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Retro</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sea</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Skin</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sky</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Space</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Spring</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Summer</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sunset</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Warm</a>
    </div>
  </div>
</div>
     </div>
        <p onClick={shownavigation} className={`${showicon} md:hidden text-3xl mt-2.5`}>
        <ion-icon name="menu-outline"></ion-icon>
        </p>
        <p onClick={disablenavigation} className={`${showicon2} text-3xl mt-2.5`}>
        <ion-icon name="close-outline"></ion-icon>
        </p>
   
    </div>

    




    <div className="gap-6  grid hidden">
    <div onClick={disabledata} onMouseLeave={disabledata} className={`absolute ${showOptions} bg-gray-950 rounded-r-2xl border p-4 `} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
    <div className="py-1 space-y-4 " role="none">
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm " role="menuitem" tabindex="-1" id="menu-item-0">Christmass</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Coffee</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Cold</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Earth</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Food</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Halloween</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Happy</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Kids</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Light</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Nature</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Neon</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Night</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Rainbow</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Retro</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sea</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Skin</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sky</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Space</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Spring</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Summer</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sunset</a>
      <a href="#" className="text-gray-50 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Warm</a>
    </div>
  </div>
     <div className="grid items-center justify-center text-center p-5 gap-6 mt-1 bg-slate-950 text-white ">
      
     <a className="py-2" href="">Home</a>
        <a className="py-2" href="">Popular Colors</a>
        <a className="py-2" href="">New Colors</a>
        <a className="py-2" href="">Api Docs</a>
        <button onClick={showDataOptions} onMouseEnter={showDataOptions} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
