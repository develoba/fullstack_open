import "../styles/success.css";

export function Notification({ message }) {
  if (message === null) {
    return null;
  }

  return <div className="success">{message}</div>;
}
