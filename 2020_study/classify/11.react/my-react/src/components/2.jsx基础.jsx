import React from 'react';
import "../styles/3.style.css" 

let ele2 = (
    <div className="box">
        <div className="child">child</div>
    </div>
)


export default ()=>{
    return (
      <div>
         <ul className="list">
             <li>{"a">"b"?1:<p>pp</p>}</li>
             <li style={{color:'red'}}>2</li>
             <li>3</li>
         </ul>
        {ele2}
      </div>
    );
}
  
