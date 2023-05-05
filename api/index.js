import axios from "axios";

export const getPlacesData = async () => {

    try {
     const {data : {data}} = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
       { params: {
            bl_latitude: '5.513986947844601',
            tr_latitude: '5.668430510028145',
            bl_longitude: '-0.2991199442789696',
            tr_longitude: '-0.06033899208693426',
            limit: '30',
            currency: 'USD',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'X-RapidAPI-Key': '17789088b0msha698750b11d26adp15c32djsn1ee6557f038e',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }
        );
        return data;
    } catch (error) {

    }
}