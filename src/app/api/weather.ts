import request from 'app/utils/request';
import { IWeather } from 'app/models/Weather';

export function getStockholmWeather() {
  return request.get<IWeather>('/current.json', {
    params: {q: 'Stockholm'},
    headers: {
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      'x-rapidapi-key': '12d8137627msh6f7d7b180225fa3p1794bfjsn88f42f12d251'
    }
  });
}
