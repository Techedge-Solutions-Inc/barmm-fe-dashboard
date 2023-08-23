import axios, { AxiosRequestConfig, AxiosError } from 'axios';

interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
    _retry?: boolean;
}

const api = axios.create({
    baseURL: 'https://api.example.com'
});

async function refreshToken(): Promise<string> {
    const response = await axios.get<RefreshResponse>('`/api/auth/client/refresh`');
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    return response.data.accessToken;
}

// Add a request interceptor
api.interceptors.request.use((config: any) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        };
    }
    return config;
}, (error: AxiosError) => {
    return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(response => {
    return response;
}, async (error: AxiosError) => {
    const originalRequest = error.config as ExtendedAxiosRequestConfig;
    if (!originalRequest) return Promise.reject(error);

    if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const accessToken = await refreshToken();
    
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api.request(originalRequest);
    }
    
    return Promise.reject(error);
});



export default api;
