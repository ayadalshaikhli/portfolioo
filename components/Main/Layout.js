 import React from 'react'
import Hero from '../three/Hero'
import Nav from './Nav'
 
 export default function Layout({children}) {
   return (
     <div>
       <style jsx global>
         {`
       
       body {
        margin: 0;
        overflow-x: auto;
        
      }
      #pinContainer {
        height: 100vh;
        width: 100vw;
      
        overflow: hidden;
      }
      #pinContainer1 {
        height: 0vh;
        width: 100vw;
      
        overflow: hidden;
      }
      #pinContainer .panel {
        height: 100vh;
        width: 100vw;
        position: absolute;
        text-align: center;
      }

      
      .panel.blue {
        background-color: #3883d8;
      }
      
      .panel.turqoise {
        background-color: #38ced7;
      }
      
      .panel.green {
        background-color: #22d659;
      }
      
      .panel.bordeaux {
        background-color: #953543;
      }

     
       
        
`}
       </style>
         <Nav/>
         {/* <Hero/> */}
         <main className='bg-black'>{children}</main>
     </div>
   )
 }
 