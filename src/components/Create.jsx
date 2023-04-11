import React from "react";
import clienteAxios from "../config/axios";
import { useAuth } from '../hooks/useAuth';
import { createRef } from 'react';

export default function PublicationForm({ onCancel }) {
  
  const titleRef = createRef();
  const descriptionRef = createRef();

  const { user } = useAuth({ middleware: 'auth' });
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      user_id: user.id
  }

    try {
      const response = await clienteAxios.post("/api/post", datos); 
      console.log(response.data);
      onCancel();
    } catch (error) {
      console.error(error);
    }

  };
  
  return (
    <>
      <main className="max-w-xl m-auto mt-5 md:mt-20 flex flex-col md:flex-row items-center">
        <div className="p-10 w-full">
          <h1 className="text-4xl font-black text-center">Create Post</h1>
          <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form onSubmit={handleSubmit} noValidate>

              <div className="mb-4">
                <label htmlFor="title" className="text-slate-800">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  className="mt-2 w-full p-3 bg-gray-200"
                  ref={titleRef}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="text-slate-800">
                  Description:
                </label>
                <textarea
                  id="description"
                  className="mt-2 w-full p-3 bg-gray-200"
                  ref={descriptionRef}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="rounded-lg text-center bg-blue-600 hover:bg-blue-800 p-2 font-bold text-white truncate mr-2"
                  type="submit"
                  
                >
                  Post
                </button>
                <button
                  className="rounded-lg text-center bg-red-600 hover:bg-red-800 p-2 font-bold text-white truncate"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}


