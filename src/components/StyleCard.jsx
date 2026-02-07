import { FaCartArrowDown } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";




export default function StyleCard() {

  return (
    <>
      <section style={{ backgroundColor: '#89CFF0', padding: '20px',borderRadius: '10px', color: 'black' }} >
     
      <div>
        <h1>
          Style Card
        <FaCartArrowDown />
        <FaComputer />  
        </h1>
        Compenent with Inline Styles  
      </div>  
      </section>  
      
    </>
  )
}
