import { ToastContainer, toast } from "react-toastify";
import './ToastNotification.css';

export default function ToastNotification() {
  const showSuccess = () => toast.success("Успіх!");
  const showError = () => toast.error("Сталася помилка!");
  const showWarning = () => toast.warning("Увага!");

  return (
    <div className="toast-wrapper">
      <h2 className="toast-title">Повідомлення</h2>
      <div className="btn-group">
        <button className="btn btn-success" onClick={showSuccess}>✓ Успіх</button>
        <button className="btn btn-error" onClick={showError}>✕ Помилка</button>
        <button className="btn btn-warning" onClick={showWarning}>! Попередження</button>
      </div>

      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </div>
  );
}
