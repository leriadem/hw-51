import ToastNotification from "./components/ToastNotification";
import './App.css';

export default function App() {
  return (
    <div className="app">
      <h1 className="app-header">Productivity Dashboard</h1>
      <ToastNotification />
    </div>
  );
}
