export const geoAPIUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_X_RAPID_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const weatherApiUrl = "https://api.openweathermap.org/data/2.5/";
export const weatherApiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
