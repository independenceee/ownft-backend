import { StatusCodes } from "http-status-codes";
import InterfaceError from "./InterfaceError";

class BadRequestError extends InterfaceError {
    statusCode: number;
    name: string;
    constructor(message: string) {
        super(message);
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        this.name = "Internal Server Error";
    }
}

export default BadRequestError;
