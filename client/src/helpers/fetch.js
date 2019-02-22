import { BASE_URL } from 'configs';
import axios from 'axios';

export default class Fetch {
    static async request(options) {
        const admin = window.location.pathname.includes('admin');
        const ACCESS_TOKEN = admin ? window.localStorage.getItem('token') : window.localStorage.getItem('userToken') || '';
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

    /* POST (create) */
    static patch = options => Fetch.request({ ...options, method: 'PATCH' });

    /* DELETE (remove) */
    static delete = options => Fetch.request({ ...options, method: 'DELETE' });
}
