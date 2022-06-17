import React from 'react'
import styles from "./Buttons.module.css"
import { useDispatch } from 'react-redux/es/exports'
import { buttonClicked, deleteCalc, getResult, goBack, percentage } from '../../Redux/Action/action';
export default function Buttons() {
  const dispatch = useDispatch();
    const numbersArr = [7, 8, 9, '/', 4,5,6,"*", 1,2,3,"-",0,".", "+"]
  return (
    <div className={styles.buttonsContainer}>
        <span onClick={() => dispatch(percentage())}>%</span>
        <span onClick={() => dispatch(deleteCalc())}>CE</span>
        <span onClick={() => dispatch(deleteCalc())}>C</span>
        <span onClick={()=> dispatch(goBack())}>back</span>
        {
            numbersArr.map((elem,key) => <span onClick={()=>dispatch(buttonClicked(elem))} key={key}>{elem}</span>)
        }
        <span  onClick={()=>dispatch(getResult())}>=</span>

    </div>
  )
}
