import React, { useContext, useEffect } from 'react'
import streamContext from '../Global/Streams/streams/StreamContext'
import Videocards from './Videocards';

export default function Home() {
    const context = useContext(streamContext);
    const {streams , getStreams} = context;
    useEffect(() => {
      getStreams();
    
      
    }, [])
    
  return (
    <>
    
    <div className="row">
        {streams && streams.map((ele)=>{
            return (
                <Videocards key={ele.id} ele={ele}/>
            )
        })}
    </div>
    </>
  )
}
