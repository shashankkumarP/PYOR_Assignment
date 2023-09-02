"use client";
import Button from "./components/Button";
import Display from "./components/Display";
import Multiselect from "./components/Multiselect";
import {StyledPageLayout,StyledSelectCurrecies,StyledSelectRowColumn} from "./utils/stylecomponent";
import './globals.css'

export default function Home() {
  return (
    <StyledPageLayout>
      <StyledSelectCurrecies >CryptoCurrencies Insights</StyledSelectCurrecies>
      <Multiselect />
      <StyledSelectRowColumn>
        <h5 className="dimentionof_row_column" >Change Row and Column</h5>
        <div
          style={{
            display: "flex",
            gap: "7px",
            justifyContent: "center",
            flexWrap: "wrap-reverse",
            flexDirection: "column-reverse",
            margin: "10 0 0 10",
          }}
        >
          <Button direction={"Row"} />
          <Button direction={"Column"} />
        </div>
      </StyledSelectRowColumn>
      <Display />
    </StyledPageLayout>
  );
}
