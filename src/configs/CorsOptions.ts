import allowedOrigin from "./AllowedOrigins";

const corsOption: any = {
    origin: function (origin: string, callback: any) {
        if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("NOT ALLOWED BY CORS"));
        }
    },

    credentials: true,
    optionSuccessStatus: 200,
};

export default corsOption;
