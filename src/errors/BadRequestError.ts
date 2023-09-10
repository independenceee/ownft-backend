import { StatusCodes } from "http-status-codes";
import InterfaceError from "./InterfaceError";

class BadRequestError extends InterfaceError {
    statusCode: number;
    name: string;
    constructor(message: string) {
        
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.name =  "Bad Request"
    }
}

export default BadRequestError;
