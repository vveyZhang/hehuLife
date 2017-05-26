import {CURRENT_PATH} from './actionTypes.js'
export function setPath(path){
    return{
        type:CURRENT_PATH,
        path:path
    }
};
