import axios, { AxiosResponse } from "axios";

// Tạo một instance của axios với cấu hình mặc định
const axiosInstance = axios.create({
  //   baseURL: `${apiEndpoint}`,
  baseURL: "http://localhost:3003",
  timeout: 0,
  withCredentials: true, // Đảm bảo rằng bạn gửi cookie hoặc token
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

// Thêm các request interceptor (nếu cần)
axiosInstance.interceptors.request.use(
  (config) => {
    // Thêm token nếu cần, ví dụ:
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Thêm các response interceptor (nếu cần)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Xử lý lỗi ở đây, ví dụ:
    if (error.response) {
      console.error("Server error:", error.response.data);
    } else if (error.request) {
      console.error("Network error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
