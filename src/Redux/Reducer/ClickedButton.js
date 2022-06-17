import { BUTTON_CLICK, EQUALS, GO_BACK , PERCENTAGE, DELETE} from "../Types/type";

const intialState = {
    clickedButton: ""
}

const clickedButton = (state = intialState, action) => {
    
    switch (action.type) {
        case BUTTON_CLICK:
            return {
                ...state,
                clickedButton: (state.clickedButton + action.payload).toString()
            }
        case DELETE:
            return {
                ...state,
                clickedButton: state.clickedButton = 0
            }
            
        case EQUALS:
            return {
                ...state, clickedButton: eval(state.clickedButton)
            };
            case GO_BACK:
                return{
                    ...state,
                    clickedButton: state.clickedButton.slice(0, state.clickedButton.length -1)

                }
                case PERCENTAGE:
                    return{
                        ...state,
                        clickedButton: +state.clickedButton + (state.clickedButton / 100 * 10)
                    }
        default:
            return state;
    }
}
export default clickedButton;