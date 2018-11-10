import { BASE_URL } from 'configs';
import axios from 'axios';

export default class Fetch {
    static async request(options) {
        let userData = {};
        const { access_token : ACCESS_TOKEN } = userData;
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

        // if (responsePromise && responsePromise.status) {
        //     // Check ::: it can be not json, for example text/html
        //     //
        //     if(responsePromise.status === 401){
        //         return redirectToLogin();
        //     }
        //     // if (responsePromise.config.responseType === 'blob' && responsePromise.data) {
        //     //     //only for downloaded blobs
        //     //     //extract file name from 'content-disposition'response header and attach it to result
        //     //     const disposition = responsePromise.headers['content-disposition'];
        //     //     if (disposition && disposition.indexOf('attachment') !== -1) {
        //     //         var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        //     //         var matches = filenameRegex.exec(disposition);
        //     //         if (matches != null && matches[1]) {
        //     //             responsePromise.data.filename = matches[1].replace(/['"]/g, '');
        //     //         }
        //     //     }
        //     // }
        //     return responsePromise.data;
        // }

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
