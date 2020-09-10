import {Type} from '../models/Type'
//todo chck connection 
const loadTypes = async ()=> {
   return await Type.find({})
}

export {loadTypes}