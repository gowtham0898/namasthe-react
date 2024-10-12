import React from 'react'

const Contact = () => {
  return (
    <div className="text-xl font-bold m-4 p-2">
      <h1>Contact us</h1>
      {/* <h2>ph_no : 1234567890</h2> */}
      <form>
        <input
          className="m-2 p-2 border border-black rounded-xl  transition-transform transform hover:border-green-500 hover:scale-105 hover:shadow-lg"
          placeholder="name"
        />
        <input
          className="m-2 p-2 border border-black rounded-xl  transition-transform transform hover:border-green-500 hover:scale-105 hover:shadow-lg"
          placeholder="message"
        />
        <button
          className="m-2 p-2 border border-green-800 font-normal text-white text-xl rounded-xl bg-green-400 
           transition-transform transform hover:bg-green-500 hover:scale-90 hover:shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact