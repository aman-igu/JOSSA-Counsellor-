import PredictorForm from "./components/PredictorForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">JEE Counselling Assistant by Aman </h1>

      <p className="subtitle">
        Find colleges based on your JEE rank
      </p>

      <PredictorForm />
    </div>
  );
}

export default App;