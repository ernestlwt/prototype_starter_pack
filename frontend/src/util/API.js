import axios from 'axios';
import { API_SERVER } from './Constant';

export async function getWelcomeText(){
    let response = await axios.get(API_SERVER + "/");
    return response.data;
}