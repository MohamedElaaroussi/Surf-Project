import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const WeatherSection = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                const response = await axios.get(`${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`);
                setWeatherData(response.data);
                setLoading(false);
                // toast.success("Données météorologiques chargées avec succès !", {
                //   position: "top-right",
                // });
            }
            catch (error) {
                setError("Erreur lors du chargement des données météorologiques");
                setLoading(false);
                // toast.error("Erreur lors du chargement des données.", {
                //   position: "bottom-left",
                // });
            }
        };
        fetchWeatherData();
    }, [city, apiKey, apiEndpoint]);
    if (loading)
        return null; // Les notifications gèrent l'affichage de "Chargement des données..."
    if (error)
        return _jsx("p", { children: error });
    return (_jsx("section", { className: "py-16 bg-blue-500 text-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold mb-8 text-center", children: "Conditions M\u00E9t\u00E9o en Direct" }), weatherData && (_jsxs("div", { className: "bg-white text-black p-8 rounded-lg shadow-lg max-w-md mx-auto", children: [_jsx("p", { className: "text-2xl font-bold", children: weatherData.name }), _jsxs("p", { className: "text-5xl font-bold mt-4", children: [Math.round(weatherData.main.temp), "\u00B0C"] }), _jsxs("p", { className: "text-xl mt-2", children: ["Vitesse du vent : ", weatherData.wind.speed, " m/s"] }), _jsxs("p", { className: "text-xl", children: ["Humidit\u00E9 : ", weatherData.main.humidity, "%"] }), _jsxs("p", { className: "text-xl", children: ["Ciel : ", weatherData.weather[0].description] })] }))] }) }));
};
export default WeatherSection;
