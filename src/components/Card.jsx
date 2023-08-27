/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line react/prop-types
export default function Card ( { todo ,onDelete} ) {



   return (
      <div className=" scale-90 sm:scale-100 w-[410px] h-[106.8px] bg-white shadow-md border-[#eaeef0] border px-[19px] py-[11px]">
         <div className="flex">
            <div className="flex flex-col gap-[9.7px] justify-center items-center w-[102px] border-r-[#F2F3F5] border-r-[1.5px]">
               <div className=" w-16 h-16"> <img className="rounded-full" alt="" src={ ` src ` }></img></div>
               <div className="flex gap-[17.7px] justify-center">
                  <button>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="#7777" viewBox="0 0 24 24" strokeWidth={ 1 } stroke="#8997a4" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                     </svg>
                  </button>
                  <button>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1 } stroke="#8997a4" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                  </button>
                  <button onClick={ onDelete }>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="#7777" viewBox="0 0 24 24" strokeWidth={ 1 } stroke="#8997a4" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                     </svg>
                  </button>
               </div>
            </div>
            <div className="pl-[23px] flex-grow">
               <h3 className=" text-[20px] text-[#313030] leading-5">{ name }</h3>
               <h4 className="text-[#313030] leading-6 text-[13px]">{ todo.position }</h4>
               <h5 className=" text-[10px] text-[#5c6974] leading-3"> {todo.department }</h5>
               <div className="flex mt-[10px] justify-between">
                  <span className="w-[57px] h-[17px] bg-[#DCE6F2] text-[11px] text-center text-[#2764ac] font-medium" >{ `Weekend` }</span>
                  <div className="flex gap-[7px]">
                     <button className=" w-5 h-5 rounded-full bg-[#eaeef0] p-1">
                        <a href={ `mailto:${ todo.email }` }>                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="white" className="w-3 h-3">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg></a>

                     </button>
                     <button className=" w-5 h-5 rounded-full bg-[#eaeef0] p-1 rotate-135">
                        <a href={ `tel:${ todo.phone }` }>  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={ .1 } stroke="white" className="w-3 h-3">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg></a>
                     </button>
                     <button className=" w-5 h-5 rounded-full bg-[#eaeef0] text-center text-[12px] font-bold  shadow-md drop-shadow"> !
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}