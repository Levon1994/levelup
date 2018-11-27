import { BASE_URL } from 'configs';
import axios from 'axios';

export default class Fetch {
    static async request(options) {
        const ACCESS_TOKEN = window.localStorage.getItem('token') || '';
        const { method, path, headers, body, additionalOptions = {} } = options;
        let requestConfig = {
            url: `${BASE_URL}${path}`,
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: (ACCESS_TOKEN ? `Bearer ${ACCESS_TOKEN}` : undefined),
                ...headers
            },
            ...additionalOptions,
        };

        if (body) {
            requestConfig.data = JSON.stringify(body);
        }

        // Fire the Request and Return the Response Promise Object.
        const responsePromise = await axios.request(requestConfig);

        return {
            payload: responsePromise.data,
            status: responsePromise.status,
        };
    }

    /* GET (retrieve) */
    static get = options => Fetch.request({ ...options, method: 'GET' });

    /* POST (create) */
    static post = options => Fetch.request({ ...options, method: 'POST' });

    /* PUT (update) */
    static put = options => Fetch.request({ ...options, method: 'PUT' });

    /* DELETE (remove) */
    static delete = options => Fetch.request({ ...options, method: 'DELETE' });
}
