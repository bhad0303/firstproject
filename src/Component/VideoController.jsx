import React from 'react'
import { useRef } from 'react';

function VideoController() {

    let input = useRef(null);
     
   
    const player = ()=>{
         let file = input.current.value;
         console.log(file)
    }



  return (
    <div>
        <video src="" style={{
            width : '720px'
        }}></video>

        <div >
             <button>play</button>
             <button>pause</button>
             <button>mute</button>

        </div>
        <br />
      <input type="file" ref={input} accept='.mp4' onChange={player} />
    </div>
  )
}

export default VideoController
