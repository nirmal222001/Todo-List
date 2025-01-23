import React from 'react';

const Todoitem = ({text, isComplete , id, toggleTask ,deleteTodo}) => {
  return (
    <div className='flex justify-between items-center gap-2'>
    <label className={`hover:bg-slate-200 flex-1 p-2 rounded-md cursor-pointer select-none ${isComplete ? " text-slate-400" : ""}`} onClick={()=>toggleTask(id)}>
       {text}</label>
    <div>
    <svg className='hover:fill-red-700' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" onClick={()=>deleteTodo(id)}>
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    </div>
    </div>
  );
}

export default Todoitem;
