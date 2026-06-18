import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="home">

      <h1>Resume Builder</h1>

      <button
        onClick={() =>
          navigate("/builder")
        }
      >
        Create Resume
      </button>

    </div>
  );
}

export default HomePage;