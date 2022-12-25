import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useRef, useState } from "react"
import Card from "../card/Card";
import Listitem from "../listitem/Listitem"
import "./list.scss"

export default function List() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();
  
  const handleClick = (direction) =>{
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x 
    if(direction==="left" && slideNumber>0){
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${175 + distance}px)`
    }
    if(direction==="right" && slideNumber<8){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-175 + distance}px)`
    }
  }

  return (
    <div className="list">
      <Card/>
      <div className="wrapper">
      <ArrowBackIosOutlined className="sliderArrow left" 
        onClick={()=>handleClick("left")}
        style={{display: !isMoved && "none"}}
      />
      <div className="container" ref={listRef}>
      
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        <Listitem/>
        
      </div>
      <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}
