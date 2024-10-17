import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherSection = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Utilisation des variables d'environnement
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiEndpoint = process.env.REACT_APP_WEATHER_API_ENDPOINT;
  const city = "Sidi Ifni"; // Tu peux changer la ville ici
  const units = "metric"; // Utilise 'imperial' pour Fahrenheit

  //   https://api.openweathermap.org/data/2.5/weather?q=agadir&appid=aa544159b493bbf9dbc038c8ad6e1e79

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // toast.info("Chargement des données météorologiques...", {
        //   position: "top-center",
        // });

        const response = await axios.get(
          `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`
        );
        setWeatherData(response.data);
        setLoading(false);
        // toast.success("Données météorologiques chargées avec succès !", {
        //   position: "top-right",
        // });
      } catch (error) {
        setError("Erreur lors du chargement des données météorologiques");
        setLoading(false);
        // toast.error("Erreur lors du chargement des données.", {
        //   position: "bottom-left",
        // });
      }
    };
    fetchWeatherData();
  }, [city, apiKey, apiEndpoint]);

  if (loading) return null; // Les notifications gèrent l'affichage de "Chargement des données..."
  if (error) return <p>{error}</p>;

  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Conditions Météo en Direct</h2>
        {weatherData && (
          <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <p className="text-2xl font-bold">{weatherData.name}</p>
            <p className="text-5xl font-bold mt-4">{Math.round(weatherData.main.temp)}°C</p>
            <p className="text-xl mt-2">Vitesse du vent : {weatherData.wind.speed} m/s</p>
            <p className="text-xl">Humidité : {weatherData.main.humidity}%</p>
            <p className="text-xl">Ciel : {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
      {/* <ToastContainer /> */}
    </section>
  );
};

export default WeatherSection;
