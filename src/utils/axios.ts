import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const httpRequest = axios.create({
    baseURL: process.env.KOIOS_RPC_URL!,
});

const get = async function (path: string, options: any) {
    const response = await httpRequest.get(path, options);
    return response.data;
};

const post = async function (path: string, options: any) {
    const response = await httpRequest.post(path, options);
    return response.data;
};

export { get, post };
export default httpRequest;
