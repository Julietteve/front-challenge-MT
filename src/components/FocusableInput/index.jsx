/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef, useState } from "react";
import "./styles.css"

const TextInput = React.forwardRef((props, ref) => {
    return (
		<input className="input-primary" ref={ref} {...props} />
	)
});

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
function FocusableInput({focusable}) {

	const inputRef = useRef(null)

	useEffect(()=>{
		if(focusable && !(document.activeElement === inputRef.current)){
			inputRef.current.focus()
		}
		else{
			inputRef.current.blur()
		}
	},[focusable])
	
	return(
		<>
			<TextInput ref={inputRef}/>
			
		</>
	)
}

export function FocusableInputWrap () {
	
	const [focus, setFocus] = useState(true)

	return(
		<section>
			<FocusableInput focusable={focus}/>
			<button onClick={()=> setFocus(prev=>!prev)} className="button-primary">{focus ? "Focus" : "Unfocus"}</button>
		</section>
	)
}
