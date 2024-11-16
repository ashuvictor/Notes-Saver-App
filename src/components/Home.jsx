import React ,{useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
const Home = () => {
  const [title,setTitle] = useState('');
  const [value,setValue] = useState('');
  const [searchParams,setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();
  const allPaste = useSelector((state) => state.paste.pastes);
  useEffect(() => {
    if(pasteId){
      const paste = allPaste.find((paste) => paste._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);


  function createPaste(){
    const paste ={
      title:title,
      content:value,
      _id:pasteId || Date.now().toString(36),
      createdOn: new Date().toISOString(),
    }


    if(pasteId){
      //update
      dispatch(updateToPastes(paste));
    }
    else{
      dispatch(addToPastes(paste));
// create
    }

    //after creation and update
    setTitle('');
    setValue('');
    setSearchParams({});
  }


  return (
    <div>
          <div className='flex flex-row gap-7 place-content-between'>
      <input
      className='border border-black p-1 rounded-2xl mt-2 w-[80%] pl-4'
      type='text'
      placeholder='Enter your value here'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button
      className='border border-black p-2 rounded-2xl mt-2'
      onClick={createPaste}>
        {pasteId ? 'Update My Paste':'Create My Paste'}
      </button>
    </div>
    <div className='mt-8'>
      <textarea 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='Enter your content here'
      rows={20}
      className='border border-black p-4 rounded-2xl mt-4 min-w-[500px]'
      />
    </div>
    </div>

  )
}

export default Home
