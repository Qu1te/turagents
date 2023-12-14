import React, {useState,useEffect,useRef} from "react";
import "./main.css"
import logo from "../img/aa.png"
const Sait = () =>{
    const [show, setshow] = useState(false);
    const ref = useRef(null)
    useEffect(()=>{
        if(show){
            
        }else{
            console.log("false")
        }
    }, [show])


    return(
        <div className="MainContainer">
            <div className="header">
                <div className="navigator">
                    <img src={logo} alt=""className="img" />    
                    <button className="buttonNav" onMouseEnter={()=>{setshow(true)}} onMouseLeave={()=>{setshow(false)}} >menu</button>
                </div>
            </div>
        </div> 
    )
}

export default Sait;