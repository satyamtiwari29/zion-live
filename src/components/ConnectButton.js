import "../assets/css/Text.css";
import { useNavigate } from "react-router-dom";

const ConnectButton = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <button className="scale connect-primary-button border-white py-3 px-5 fs-6 fw-semibold" onClick={() => navigate('/contact')}>
          Let's Connect
        </button>
      </div>
    </>
  );
};
export default ConnectButton;
