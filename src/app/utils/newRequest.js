import axios from "axios";

export const newRequest = axios.create({
    baseURL: "https://doctorbd-server.onrender.com/",
});

newRequest.interceptors.response.use(
    function (response) {
        // Do something before request is sent
        return response;
    },
    function (error) {
        // Do something with request error
        console.log("Hamidddddddddddddddddddd");
    }
);
