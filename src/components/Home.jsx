import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-notice";
import { CalciteButton, CalciteNotice } from "@esri/calcite-components-react";
import { useNavigate, useLocation } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide error message on reload
  window.history.replaceState({}, document.title);

  return (
    <div className="flex-style">
      <div>Homepage</div>
      <div>
        <CalciteButton onClick={() => navigate("/popover")}>
          Go to Popover Page
        </CalciteButton>
      </div>
      <div>
        {location.state?.errorVisible && (
          <CalciteNotice open kind="danger">
            <div slot="message">Check console for error</div>
          </CalciteNotice>
        )}
      </div>
    </div>
  );
};

export default Home;
