import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
   
    url: BASE_URL,
    params: {
     
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':process.env.NEXT_PUBLIC_RAPID_API,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI=async(url)=>{
  const response=  await axios.get(`${BASE_URL}/${url}`,options)
return response.data; 
}