import "./styles.css";
import SeachForm from "./components/SearchForm";
import Weather from "./components/Weather";
import { useWeatherSearch } from "./context";

export default function App() {
  const { weather } = useWeatherSearch();
  
  return (
    <div className={(typeof weather.main !== 'undefined') ? (weather.main.temp >= 15 ? 'app warm' : 'app') : 'app'}>
      <main>
        <SeachForm />
        <Weather />
      </main>
    </div>
  );
}
