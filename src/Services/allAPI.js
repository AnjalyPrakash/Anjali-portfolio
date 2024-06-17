import { baseURL } from "./baseURL"
import { commonAPI } from "./commonAPI"

export const contactAPI=async(reqBody)=>{
    return await commonAPI('POST',`${baseURL}/contacts`,reqBody)
}