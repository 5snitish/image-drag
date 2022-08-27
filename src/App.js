import React, { useState } from 'react';

import './App.css';


const App = () => {
  const [dragItem, setDragItem] = useState(null)
  const [dragOverItem, setDragOverItem] = useState(null)



    ;
  const [list, setList] = useState(['https://images.unsplash.com/photo-1661246857338-c88f21718a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80'
    , "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    , "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    , "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    , 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    'https://images.unsplash.com/photo-1559135516-79c8c2f58ec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80']);

  const dragStart = (e, position) => {
    setDragItem(position)

  };

  const dragEnter = (e, position) => {
    setDragOverItem(position)


  };

  const drop = (e) => {

    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem];

    copyListItems[dragItem] = copyListItems[dragOverItem]
    copyListItems[dragOverItem] = dragItemContent

    setDragItem(null)
    setDragOverItem(null)

    setList(copyListItems);
  };

  console.log(dragItem)
  console.log(dragOverItem)

  return (
    <div className='flex   items-center  justify-around h-screen w-full'>

      <div className='flex flex-col space-y-4  items-center  justify-center h-screen w-full'>


        <span className='pt-4 text-lg'>
          Drag and Swap
        </span>
        <div className="grid border-2 p-4 grid-cols-3 gap-10">



          {
            list &&
            list.map((item, index) => (

              <div className={`border-4 flex items-center justify-center 
          ${index === dragItem ? "border-indigo-700" : "border-red-300  "}
          ${index === dragOverItem ? "border-green-600" : "border-red-300  "}

          `} style={{
                  height: 200,
                  width: 200,
                }}
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                key={index}
                draggable>
                <img src={item} alt="image" style={{
                  height: 180,
                  width: 180
                }} />
              </div>
            ))}
        </div>
      </div>
    </div>

  );
};
export default App;
