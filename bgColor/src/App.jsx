import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
      <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=>setColor("Pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Pink"}}>Pink</button>
      <button onClick={()=>setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Blue"}}>Blue</button>
      <button onClick={()=>setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Yellow"}}>Yellow</button>
      <button onClick={()=>setColor("Orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Orange"}}>Orange</button>
      <button onClick={()=>setColor("Purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"purple"}}>purple</button>
      <button onClick={()=>setColor("Brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Brown"}}>Brown</button>
      <button onClick={()=>setColor("Magenta")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Magenta"}}>Magenta</button>
       <button onClick={()=>setColor("Black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Black"}}>Black</button>
          <button onClick={()=>setColor("Teal")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Teal"}}>Teal</button>
        <button onClick={()=>setColor("Navy")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Navy"}}>navy</button>
       <button onClick={()=>setColor("Silver")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Silver"}}>Silver</button>
       <button onClick={()=>setColor("Orchid")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Orchid"}}>Orchid</button>
       <button onClick={()=>setColor("Crimson")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Crimson"}}>Crimson</button>
     
    </div>
   </div>
    </div>
  );
}

export default App;
