import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import {toast} from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    return pastes.filter((paste) =>
      paste?.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [pastes, searchTerm]);

  const handleDelete = useCallback((id) => {
    dispatch(removeFromPastes(id));
  }, [dispatch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded-2xl w-[50%] mt-5"
      />
      <div className="flex flex-col gap-4 flex-wrap mt-5">
        {filteredData.map((paste) => (
          <div key={paste._id} className="border p-4 rounded-lg">
            <div className="font-bold text-lg mb-2">{paste.title}</div>
            <div className="mb-2">{paste.content}</div>
            <div className="flex flex-row gap-4 place-content-evenly">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              <a href={`/?pasteId=${paste?._id}`}>Edit
              </a>
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                <a href={`/pastes/${paste?._id}`}>

                View
                </a>
                </button>
              <button
                onClick={() => handleDelete(paste._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={()=>{navigator.clipboard.writeText(paste.content); toast.success('Copied to clipboard')}}>Copy</button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Share</button>
            </div>
            <div className="text-sm text-gray-500 mt-2">Created on: {paste.createdOn}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paste;
