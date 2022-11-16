const api = {
    get: url => {
        return fetch(url)
    },

    post: (url, payload) => {
        return fetch(url, {
            method: 'post',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(payload)
        });
    },

    put: (url, payload) => {
        return fetch(url, {
            method: 'put',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(payload)
        });
    },

    delete: (url) => {
        return fetch(url, {
            method: 'delete'
        });
    }
}

export default api;