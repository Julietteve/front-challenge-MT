import { useEffect, useRef, useState } from "react";

export function useListNavigation () {

    const [selectedIndex,setSelectedIndex] = useState(0);
	const activeItemRef = useRef([]);

	function handleKeyDown(event) {
		if(event.key === "ArrowUp" || event.key === "ArrowLeft"){
			setSelectedIndex((prevState)=> prevState > 0 ? prevState -1 : activeItemRef.current.length)
		}
		else if(event.key === "ArrowDown" || event.key == "ArrowRight"){
			setSelectedIndex((prevState)=> prevState < activeItemRef.current.length ? prevState + 1 : 0)
		}
	}

	useEffect(()=>{
		document.addEventListener("keydown", handleKeyDown)
		return()=>{
			document.removeEventListener("keydown",handleKeyDown)
		}
	},[activeItemRef])

    
    return [selectedIndex, activeItemRef]

}