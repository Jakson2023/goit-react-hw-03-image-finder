import axios from 'axios';



export const serviceReq = async(search,page) => {
    const resp = await axios ({
        method: 'get',
        baseURL:'https://pixabay.com/api/',
        params: {
            key: '38392384-4306dcd0758c0a555545ea085',
            q: search,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page: page,
          },



    })
    console.log(resp.data);
    return resp.data
  
}
