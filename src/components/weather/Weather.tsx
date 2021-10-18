import { FunctionComponent, useState, useEffect} from 'react';
import { IWeather } from 'app/models/Weather';
import { getStockholmWeather } from 'app/api/weather';

export const Weather: FunctionComponent = () => {
  const [weather, setWeather] = useState<IWeather>({
    current: {
      last_updated: '',
      temp_c: 0,
      temp_f: 0,
      wind_mph: 0,
      wind_kph: 0
    }
  });

  useEffect(() => {
    const fetchWeather = async () => {
      const { data } = await getStockholmWeather();
      setWeather(data);
    };
    fetchWeather();
  }, []);

  return (
    <div>
      <h4>Stockholm Weather</h4>
      <p>Current Temperature (Celsius): {weather.current.temp_c}</p>
      <p>Current Temperature (Fahrenheit): {weather.current.temp_f}</p>
      <p>Last updated at {weather.current.last_updated}</p>
    </div>
  );
}
