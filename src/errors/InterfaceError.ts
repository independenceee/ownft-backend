class InterfaceError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
    }
}

export default InterfaceError;
