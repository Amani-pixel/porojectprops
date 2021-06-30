import React from 'react';


const Profil = props =>{
    
    console.log(`props:`,props)
     return (
       
        
       <h1> {props.name}{props.bio}{props.profission}  {props.children} </h1>
    
       

       
     )
    }
    Profil.defaultProps = {
        name: "Amani"
        bio: "BIO"
        profission:"profission"
       };

export default Profil