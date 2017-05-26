import {CURRENT_PATH} from '../actions/actionTypes.js'
export default function getPath(state='',action){
    switch (action.type){
        case "CURRENT_PATH":
            return action.path;
        default:
            return state
    }
}