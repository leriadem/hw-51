import { FaHeart, FaBell } from "react-icons/fa";

export default function IconComponent() {
  return (
    <div style={{ display: "flex", gap: "20px", fontSize: "32px" }}>
      <FaHeart color="red" />
      <FaBell color="orange" />
    </div>
  );
}
