import {Type} from '../models/Type'
//todo chck connection 
const loadTypes = ()=> {
   return Type.find({})
}

export {loadTypes}