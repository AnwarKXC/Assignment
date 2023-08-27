export default function SideBar () {
   return (
      <aside className="w-[106px] bg-gradient-to-b from-gradient-color-1 to-gradient-color-2  min-h-screen fixed sm:flex flex-col py-[78.4px] gap-[50px] hidden">
         <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="white" className="w-10 h-10 ">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
            </svg>
            <p className=" text-white text-[12px] pt-2"> Dashboard</p>
         </button>
         <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="white" className="w-10 h-10">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>

            <p className=" text-white text-[12px] pt-2"> Workplace</p>
         </button>
         <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
               <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
            </svg>

            <p className=" text-white text-[12px] pt-2">Holidays</p>
         </button>
         <button className="flex flex-col items-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="white" className="w-10 h-10">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            <span className="w-[15px] h-[15px] bg-[#ff6a6a] text-white rounded-full text-[8px] absolute right-[30px] pt-[1px] font-medium">{ `5`}</span>
            <p className=" text-white text-[12px] pt-2"> Employees</p>
         </button>
         <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
               <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
            </svg>

            <p className=" text-white text-[12px] pt-2"> Inbound <br/> Requests</p>
         </button>
      </aside>
   )
}