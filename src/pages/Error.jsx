import "../style/Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-404">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/home" className="link-error">
        Retourner sur la page d'acceuil
      </Link>
    </div>
  );
}

export default Error;
