import axios from 'axios';

axios.interceptors.response.use(null, (error) => {
    if (!error.response) {
        alert("An unexpected error occured");
        console.log(error);
        return;
    }
    const { status } = error.response;

    if (status === 404) alert("Enter a valid city name");
    else if (status >= 400 && status <= 500) alert("Enter a valid city name");
    else alert("An unexpected error occured");
});

export default {
    get: axios.get,
    // post: axios.post,
    // put: axios.put,
    // delete: axios.delete,
}