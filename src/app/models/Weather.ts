export interface IWeather {
  current: {
    last_updated: string,
    temp_c: number,
    temp_f: number,
    wind_mph: number,
    wind_kph: number
  }
}
