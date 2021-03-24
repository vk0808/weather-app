import "./styles.css";
import SeachForm from "./components/SearchForm";
import Weather from "./components/Weather";
import { useWeatherSearch } from "./context";

export default function App() {
  const { weather } = useWeatherSearch();
  
  return (
    <div className={weather.main.temp >= 15 ? 'app warm' : 'app'}>
      <main>
        <SeachForm />
        <Weather />
      </main>
    </div>
  );
}
