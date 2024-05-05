import axios from 'axios'

/**
 * @param {String} token
 * */

const getUser = (token) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/user/get-user/`,
            { headers: {token} }
        );

        return response.data;
    } catch (error) {
        return error;
        console.log(error)
    }
}

export { getUser }
