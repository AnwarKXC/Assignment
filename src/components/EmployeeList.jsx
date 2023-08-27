import { Link } from "react-router-dom";
import Card from "./Card";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from './todosSlice';
export default function EmployeeList () {
  
   const todos = useSelector( state => state.todos );
   const dispatch = useDispatch();
console.log(todos)
   const handleDelete = ( id ) => {
      dispatch( deleteTodo( id ) );
   };
   return (
      <div className=" bg-[#f7f8f9] sm:pl-[35px] pt-[26px]  sm:pr-[18px] pb-[10.2px]">
         <div className="flex relative gap-[12px] mx-2 sm:ml-0 ">
            <input className=" flex-grow bg-white pt-[7px] pb-[6px] pl-[53px] rounded-[5px] h-[30px]  outline-none drop-shadow-sm placeholder:text-[13px] placeholder:text-[#707070] " type="search" placeholder={ `Search` }></input>
            <span className=" absolute top-2 left-[26px] "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2 } stroke="currentColor" className="w-4 h-4 text-[#23aaeb] ">
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg></span>
            <Link to="/NewEmployee" className="w-[101px] h-[30px] bg-[#2764ac] rounded-[5px] text-white text-[13px] flex items-center justify-center gap-[10px]"> <span className=" text-[28px] pb-1 font-medium">+</span> Add new </Link>
         </div>
         <div className=" mt-[48px] grid gap-x-[34.2px] gap-y-5 sm:gap-y-[45px] 3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 justify-center 4xl:grid-cols-5">
            { todos.map( ( todo ) => {
               return(
               <Card key={todo.id} todo={todo} onDelete={()=>handleDelete(todo.id)} />
            )} ) }

         </div>
      </div>
   )
}