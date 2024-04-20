// MainComponent.js
import React from "react";
import LawPage from "./LawPage.js";

const MainComponent = () => {
  return (
    <div>
      {/* Render 8 LawPage components with different pageIndex */}
      <LawPage pageIndex={0} />
      <LawPage pageIndex={1} />
      <LawPage pageIndex={2} />
      <LawPage pageIndex={3} />
      <LawPage pageIndex={4} />
      <LawPage pageIndex={5} />
      <LawPage pageIndex={6} />
      <LawPage pageIndex={7} />
    </div>
  );
};

export default MainComponent;
