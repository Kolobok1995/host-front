
async function doRequest(url, method = 'GET', data = []) {
    try {
        const headers = {}
        let body;

        if (data) {
            headers['Content-Type'] = 'application/json';
            body = JSON.stringify(data);
        }

        const response = await fetch(url, {
            method,
            headers,
            body
        })

        return await response.json();
    } catch (error) {
        console.error('Request Error ' + error);
    }
}


export default {
    doRequest
};