import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewPaste = () => {
  const { id } = useParams();
  const paste = useSelector((state) => state.paste.pastes.find((p) => p?._id === id));

  if (!paste) {
    return <div className="text-red-500 text-center mt-5">Paste not found</div>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto mt-10 border rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{paste.title}</h1>
      <p className="mb-4">{paste.content}</p>
      <div className="text-sm text-gray-500">Created on: {paste.createdOn}</div>
    </div>
  );
};

export default ViewPaste;
