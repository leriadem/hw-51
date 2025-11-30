import { useIdleTimer } from "react-idle-timer";
import { toast } from "react-toastify";

export default function IdleTimerComponent() {
  
  const handleIdle = () => {
    toast.info("Ви неактивні вже 5 секунд!");
  };

  useIdleTimer({
    timeout: 5000, // 5 секунд
    onIdle: handleIdle,
    throttle: 500
  });

  return <p>Рухайтесь мишкою чи клацайте, щоб залишатися активними!</p>;
}
