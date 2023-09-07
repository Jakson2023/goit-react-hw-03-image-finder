import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/'

export const serviceReq = async() => {
    const resp = await axios.get ({
        params: {
            key: '38392384-4306dcd0758c0a555545ea085',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
          },



    })
    console.log(resp.data);
    return resp.data
  
}
