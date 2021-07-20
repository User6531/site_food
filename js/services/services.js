const postData = async (url, data) => {
    const res = await fetch (url, {
        method: "POST",
        body: data,
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    });
    return await res.json();
};

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};



export {postData};
export {getResource};