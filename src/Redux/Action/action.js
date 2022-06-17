import { BUTTON_CLICK, EQUALS, GO_BACK, PERCENTAGE, DELETE } from "../Types/type"

export const getResult = () => {
    return {
        type: EQUALS
    }
}


export const buttonClicked = (button) =>{
   return{
    type: BUTTON_CLICK,
    payload: button
   }
}
export const goBack = (button) =>{
    return{
        type: GO_BACK,
        payload:button
    }
}
export const percentage = (button) =>{
    return{
        type: PERCENTAGE,
        payload:button
    }
}
export const deleteCalc = (button) =>{
    return{
        type: DELETE,
        payload: button
    }
}