
import { useContext } from "react";
import { userContext } from "./Context/UserContext";

const Card = () => {
  const { setData } = useContext(userContext);
  
 
  return (
    <>
      <button onClick={()=>{setData('Change by context api')}}>Click</button>
      
    </>
  );
};

export default Card;
