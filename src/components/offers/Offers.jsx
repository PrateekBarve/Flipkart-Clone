import { useRef, useState } from "react"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import Offeritems from "../offeritems/Offeritems";
import "./offers.scss";

export default function Offers() {
  const [slideNumber, setSlideNumber] = useState(0);
  
  const listRef = useRef();
  
  const handleClick = (direction) =>{
    
    let distance = listRef.current.getBoundingClientRect().x 
    if(direction==="left" && slideNumber>1){
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${1688 + distance - 8}px)`
    }
    if(direction==="right" && slideNumber<5){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-1688 + distance - 8}px)`
    }
  }
  return (
    <div className="offers">
      <div className="wrapper">
      <ArrowBackIosOutlined className="sliderArrow left"
        onClick={()=>handleClick("left")}
      />
        <div className="container" ref={listRef}>
          <Offeritems/>
          <Offeritems/>
          <Offeritems/>
          <Offeritems/>
          <Offeritems/>
        </div>
      <ArrowForwardIosOutlined className="sliderArrow right"
        onClick={()=>handleClick("right")}
      />
      </div>
    </div>
  )
}
