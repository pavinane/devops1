import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, createTodo } from "../features/todo/todoSlice";

function Todo() {
  const [dataList, setDataList] = useState([]);
  const [listName, setListName] = useState("");
  const [editId, setEditId] = useState(null);

   const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const handleDelete = (id) => {
    const deleteID = dataList?.filter((item) => item?.id !== id);
    setDataList(deleteID);
  };

  const handleStrike = (id) => {
    const listStrike = dataList?.map((item) =>
      item.id == id ? { ...item, completed: !item?.completed } : item,
    );

    setDataList(listStrike);
  };

  const handleEdit = (id) =>{

    const Edit =  dataList?.find((item) => item?.id == id);
    setListName(Edit?.list)
    setEditId(id)
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listName !== "") {
      
      if(editId){
       const updateList =  dataList?.map((item) => item?.id == editId ?{...item,list:listName} : item)
        setDataList( updateList);
        setEditId(null)
      }else{
        const addList = { id: Date.now(), list: listName, completed: false };
        setDataList([...dataList, addList]);
      }
      setListName("");
    }
  };


    useEffect(() => {
      dispatch(fetchTodos());
    }, []);

  return (
    <div className="flex justify-center py-6 flex-col  w-90 m-auto gap-6  ">
      <form onSubmit={handleSubmit} className="flex gap-4 justify-between">
        <input
          className=" border outline-0 rounded-2xl p-2 w-full"
          type="text"
          name=""
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          id=""
        />
        <button type="submit" className="bg-blue-500 rounded px-6">
          Add
        </button>
      </form>

      <div className=" flex gap-2 w-full flex-col ">
        {todos?.map((item) => {
          return (
            <div className="bg-green-400 p-2 px-4 w-full rounded-lg flex justify-between"
            key={item?.id}
            >
              <p className={`${item.completed ? "line-through" : ""}`}>
                {item.title}
              </p>
              <div className="flex gap-2">
                <button type="button"
                 className="cursor-pointer"
                 onClick={() => handleEdit(item?.id)}
                 >
                  &#10000;
                </button>
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => handleStrike(item.id)}
                >
                  {item?.status ? (
                    <span>&#10004;</span>
                  ) : (
                    <span> &#9984;</span>
                  )}
                </button>
                <button
                  type="button"
                  className="bg-red-400 px-2 rounded-lg cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
