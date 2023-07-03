import config from '../utils/config';

export const useFetch = async ({ data, method = 'GET', url, notify = false, token }) => {

    try {
        const args = {
            method,
            headers: {
                'accept': 'application/json'
            }
        }

        if (token) args.headers.Authorization = `Bearer ${token}`;

        if (method === 'POST' || method === 'PUT') args.body = JSON.stringify(data);

        const response = await fetch(config.apiUrl + url, args);
        
        const result = await response.json();
        
        // notify && console.log(result.message, result.status);

        return { ...result };
    } catch (error) {
        console.log('Ha ocurrido un error al realizar la peticion', 'error');

        return error;
    }
}