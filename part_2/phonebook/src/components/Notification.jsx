import "../styles/success.css";

export function Notification({ successMessage, errorMessage }) {
  if (!successMessage && !errorMessage) {
    return null;
  }

  return (
    <div className={`${successMessage ? "success" : "error"}`}>
      {successMessage}
    </div>
  );
}
