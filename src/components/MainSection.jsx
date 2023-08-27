import { useState } from "react";
import EmployeeList from "./EmployeeList";
import { Link } from "react-router-dom";
function getDate () {
   const today = new Date();
   const hour = today.toLocaleString( 'en-US', { month: 'short', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true } );
   const dayNum = today.getDay();
   const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
   let day = days[ today.getDay() ];

   return `${ day }, ${ dayNum }  ${ hour } `
}

export default function MainSection () {
   const [ currentDate, setCurrentDate ] = useState( getDate() );
   setInterval( () => {
      setCurrentDate( getDate() );
   }, 1000 );

   return (
      <div className=" absolute sm:w-[calc(100%-106px)] right-0   pt-[5.5px] w-screen ">
         <div className="  h-[79px] flex justify-center sm:justify-end items-center gap-[18px] mx-2 sm:ml-0 ">
            <span className="pl-2 md:text-[15px] leading-tight font-medium text-[#474747] tracking-wider text-left mr-4 hidden md:block">
               { currentDate }
            </span>
            <button className=" w-[94px] h-[27px] bg-#27b40c rounded-[5px] text-white text-[13px]"> Sign In</button>
            <div className=" relative border-x p-[12.5px] border-x-#e8e4e4 ">
               <svg xmlns="http://www.w3.org/2000/svg" fill="#8997a4" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="#8997a4" className="w-[19.9px] h-[19.9px] text-#474747 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
               </svg>
               <Link className=" w-[14px] h-[14px] bg-#27b40c absolute top-2 right-2 rounded-full px-1  ">
                  <span className=" text-[9px] absolute text-white text-left ">{ 1 }</span>
               </Link>
            </div>
            <div className=" flex gap-[8px] items-center relative ">
               <span className=" w-8 h-8 rounded-full bg-#474747"> <img src={ `` }></img></span>
               <span className=" sm:text-[20px] text-[#8997a4]"> { `Ahmed Khaled` }</span>
               <button className=" text-[#8997a4]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 3 } stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
               </svg>
               </button>
               <button className=" text-[#595959] pb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 3 } stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
               </svg>
               </button>
            </div>
         </div>
         <EmployeeList />
      </div>
   )
}