import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import { addTodo } from "./components/todosSlice";
import Modal from "./components/Modal";
export default function NewEmployee () {
   const dispatch = useDispatch();
   // const employee = useSelector( ( state ) => state.employee )
   const navigate = useNavigate();



   const [ name, setName ] = useState( "" )
   const [ phone, setPhone ] = useState( 0 )
   const [ date, setDate ] = useState( "" )
   const [ email, setEmail ] = useState( "" )
   const [ office, setOffice ] = useState( "" )
   const [ role, setRole ] = useState( "" )
   const [ department, setDepartment ] = useState( "" )
   const [ position, setPosition ] = useState( "" )
   const [ file, setFile ] = useState( null );
   const handleChange = ( file ) => {
      setFile( file );
   };
   const random = Math.round( Math.random() * 123456 )
   function submitHandler ( e ) {
      e.preventDefault();
      dispatch( addTodo( { id:random, name, email, phone, date, office, department, role, position, file } ) )
      navigate( '/' )
   }


   return (
      <Modal>
         <form className="w-[1174px] h-[658px] px-[19px] py-[11px] bg-white pr-[33px] " onSubmit={ submitHandler }>
            <h1 className="text-[#23aaeb] text-[18px] pb-[8px]">NEW EMPLOYEE</h1>
            <div className="w-full h-0 border-[#23aaeb] border-t-[1px]">
            </div>
            <div>
               <h2 className="H2"> <span ></span> Personal Info</h2>
               <div className=" flex my-5 gap-[11px] justify-between">
                  <FileUploader handleChange={ handleChange } name="file"  ><div className="text-[#5c6974] w-[258px] h-[112px] flex justify-center items-center border-2 border-[#707070] border-dashed cursor-pointer  text-[13px]"> DRAG IMAGE HERE</div></FileUploader>
                  <div className=" flex flex-col flex-grow ">
                     <label>Name</label>
                     <input required type="text" placeholder="Name" onChange={ e => { setName( e.target.value ) } } >
                     </input>
                     <label>Phone</label>
                     <input required placeholder="Phone" type="tel" onChange={ e => { setPhone( e.target.value ) } } >
                     </input>
                  </div>
                  <div className=" flex flex-col flex-grow ">
                     <label>Start Date</label>
                     <input required type="date" onChange={ e => { setDate( e.target.value ) } }>
                     </input>
                     <label>Email</label>
                     <input required type="email" placeholder="Email" onChange={ e => { setEmail( e.target.value ) } } >
                     </input>
                  </div>
               </div>
            </div>
            <div>
               <h2 className="H2"> <span ></span> Office Info</h2>
               <div className=" flex flex-col my-5 gap-[11px] justify-between">
                  <div className=" flex flex-col flex-grow ">
                     <label>Office</label>
                     <select onChange={ e => setOffice( e.target.value ) }>
                        <option value="Arabic Localizer">Arabic Localizer</option>
                     </select>
                  </div>
                  <div className="flex gap-[32px]">
                     <div className=" flex flex-col flex-grow ">
                        <label>Department</label>
                        <input onChange={ e => setDepartment( e.target.value ) }>
                        </input>
                        <label >Role</label>
                        <input onChange={ e => { setRole( e.target.value ) } }>
                        </input>
                     </div>
                     <div className=" flex flex-col flex-grow ">
                        <label>Attendance Profile</label>
                        <select>
                           <option value="Present">Present</option>
                           <option value="Absent">Absent</option>
                           <option value="On Leave">On Leave</option>
                           <option value="Weekend">Weekend</option>
                        </select>
                        <label>Position</label>
                        <input onChange={ e => { setPosition( e.target.value ) } }>
                        </input>
                     </div>
                  </div>
                  <div className=" flex flex-col max-w-[calc(50%-16px)] ">
                     <label>Direct Manger</label>
                     <select >
                        <option value="Mohamed Tarek"> Mohamed Tarek</option>
                     </select>
                  </div>
               </div>
            </div>
            <div>
               <h2 className="H2"> <span></span> Work From Home</h2>
               <div className="mt-3 flex justify-start items-center gap-3">
                  <input className=" accent-[#2764ac]" type="checkbox" name="" id="" /> <label className="text-[13px] font-semibold text-[#313030]"> Allow Employee To Work From Home</label>
               </div>
            </div>
            <div className="w-[1097.5px] h-0 border-t border-[#d2d2d2] mb-[9.5px] mt-2 mx-auto right-0"></div>
            <div className="flex gap-[14px] justify-end" >
               <button className="w-[85px] h-[30px] bg-[#ff6a6a]  text-white text-[13px] rounded-[5px]">
                  Cancel
               </button>
               <button type="sumbit" className="w-[85px] h-[30px] bg-[#23AAEB]  text-white text-[13px] rounded-[5px]">Save</button>
            </div>
         </form>
      </Modal>
   )
}