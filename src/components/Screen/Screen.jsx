import React, { useRef, useEffect } from 'react'
import styles from "./Screen.module.css"
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { buttonClicked, deleteCalc, getResult, goBack, percentage } from '../../Redux/Action/action';


export default function Screen() {

  const inputRef = useRef(null)

  useEffect(() => {  // calls when component is rerendering
    inputRef.current.focus()
  })

  const value = useSelector(state => state.clickedButton)
  const dispatch = useDispatch();
  const buttonClick = (key) => {
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/"];
    if (nums.includes(key)) {
      dispatch(buttonClicked(key))
    } else if (key === "=") {
      dispatch(getResult())
    } else if (key === "Backspace") {
      dispatch(goBack())
    } else if (key === "%") {
      dispatch(percentage())
    } else if (key.toLowerCase() === "c") {
      dispatch(deleteCalc())
    }
  }

  return (
    <div>
      <input onChange={() => { }} className={styles.screen} ref={inputRef} type="text" onKeyDown={(e) => buttonClick(e.key)} value={value} />
    </div>
  )
}
