import "../styles/success.css";

export function Notification({ message, isError }) {
  if (!message) {
    return null;
  }

  return <div className={`${isError ? "error" : "success"}`}>{message}</div>;
}
