// In any Next.js page or other utility/service files
import api from '@/services/api';

async function fetchProtectedData() {
    try {
        const response = await api.get('/protected-endpoint');
        return response.data;
    } catch (error) {
        console.error('Error fetching protected data:', error);
    }
}
