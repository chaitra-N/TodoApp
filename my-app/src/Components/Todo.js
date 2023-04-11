// main class

import React, { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");
  return (
    <section className=' w-[90vw] max-w-[35rem] mt-32 mx-auto my-0 rounded shadow-[0_5px_15px_rgba(0,0,0,0.1))] transition-all duration-[0.3s] ease-linear p-8 hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)] bg-violet-100'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center'>
        <h3 className='tracking-[0.1rem] capitalize leading-tight text-xl mb-3'>
          To Do List
        </h3>
        <div className='flex justify-center'>
          <input
            type='text'
            className='text-base flex-[1_0_auto] text-[hsl(210,22%,49%)] pl-4 p-1 rounded-tl rounded-bl border-black bg-indigo-100'
            placeholder='Tasks'
          />
          <button
            type='submit'
            className='bg-transparent hover:bg-indigo-300 text-indigo-700 font-semibold hover:text-white py-1 px-1 border border-indigo-500 hover:border-transparent rounded-tr rounded-br '
          >
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
};

export default Todo;
