var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
var WeatherSection = function () {
    var _a = useState(null), weatherData = _a[0], setWeatherData = _a[1];
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    // Utilisation des variables d'environnement
    var apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    var apiEndpoint = process.env.REACT_APP_WEATHER_API_ENDPOINT;
    var city = "Sidi Ifni"; // Tu peux changer la ville ici
    var units = "metric"; // Utilise 'imperial' pour Fahrenheit
    //   https://api.openweathermap.org/data/2.5/weather?q=agadir&appid=aa544159b493bbf9dbc038c8ad6e1e79
    useEffect(function () {
        var fetchWeatherData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios.get("".concat(apiEndpoint, "?q=").concat(city, "&units=").concat(units, "&appid=").concat(apiKey))];
                    case 1:
                        response = _a.sent();
                        setWeatherData(response.data);
                        setLoading(false);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        setError("Erreur lors du chargement des données météorologiques");
                        setLoading(false);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchWeatherData();
    }, [city, apiKey, apiEndpoint]);
    if (loading)
        return null; // Les notifications gèrent l'affichage de "Chargement des données..."
    if (error)
        return _jsx("p", { children: error });
    return (_jsx("section", { className: "py-16 bg-blue-500 text-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold mb-8 text-center", children: "Conditions M\u00E9t\u00E9o en Direct" }), weatherData && (_jsxs("div", { className: "bg-white text-black p-8 rounded-lg shadow-lg max-w-md mx-auto", children: [_jsx("p", { className: "text-2xl font-bold", children: weatherData.name }), _jsxs("p", { className: "text-5xl font-bold mt-4", children: [Math.round(weatherData.main.temp), "\u00B0C"] }), _jsxs("p", { className: "text-xl mt-2", children: ["Vitesse du vent : ", weatherData.wind.speed, " m/s"] }), _jsxs("p", { className: "text-xl", children: ["Humidit\u00E9 : ", weatherData.main.humidity, "%"] }), _jsxs("p", { className: "text-xl", children: ["Ciel : ", weatherData.weather[0].description] })] }))] }) }));
};
export default WeatherSection;
