import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            const url = error.config.url;
            const isAuthPage =
                url &&
                (url.toLowerCase().includes("register") ||
                    url.toLowerCase().includes("signup") ||
                    url.toLowerCase().includes("login"));

            if (
                !isAuthPage &&
                error.response?.data?.error === "User Not Logged In"
            ) {
                setTimeout(() => {
                    toast.error("Session expired, login again", {
                        position: "top-right",
                        autoClose: 5000,
                    });
                }, 2000);

                // Redirect to login page
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default api;
