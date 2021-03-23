import "./styles.css";
import SeachForm from "./components/SearchForm";
import Weather from "./components/Weather";

export default function App() {
  return (
    <div className="app warm">
      <main>
        <SeachForm />
        <Weather />
      </main>
    </div>
  );
}
