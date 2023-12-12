import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-popover";
import {
  CalciteButton,
  CalciteList,
  CalciteListItem,
  CalcitePopover
} from "@esri/calcite-components-react";
import { useNavigate } from "react-router-dom";

const PopoverPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-style">
      <div>Popover Page</div>
      <CalcitePopover placement="right" referenceElement={"go-home-btn"}>
        <CalciteList>
          <CalciteListItem>Test Popover Content</CalciteListItem>
        </CalciteList>
      </CalcitePopover>
      <div>
        <CalciteButton id="go-home-btn">Activate Popover</CalciteButton>
      </div>
      <div>
        <CalciteButton
          onClick={() => navigate("/", { state: { errorVisible: true } })}
        >
          Go Home to see Error appear
        </CalciteButton>
      </div>
    </div>
  );
};

export default PopoverPage;
