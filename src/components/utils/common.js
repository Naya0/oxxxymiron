export const MAIN_URL = `https://graphql.contentful.com/content/v1/spaces/{SPACE}/environments/{ENVIRONMENT}` 
import { MAIN_URL } from "./constants";

export const request = async (query) => {
    try {
      const result = await fetch(MAIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });
  
      const { data } = await result.json();
  
      return data;
    } catch (err) {
      console.log(err);
    }
  };


  export const getLocalDateString = (date, {month = 'numeric', day = 'numeric', year = 'numeric'}) => {
    return new Date(date).toLocaleDateString('ru-RU', {
      month,
      day,
      year,
    })
  }