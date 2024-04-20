// LawPage.js
import React from "react";
import TextToSpeechButton from "./TextToSpeechButton";
import { lawsData } from "./lawData";
import './page.css';
import { Link } from "react-router-dom";


const LawPage = ({ pageIndex }) => {
  // Check if pageIndex is within the valid range of indices for lawsData
  if (pageIndex < 0 || pageIndex >= lawsData.length) {
    return <div>Invalid page index</div>;
  }

  const law = lawsData[pageIndex];
  // Splitting law content into paragraphs
  const paragraphs = law.content.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
   <>
   
    <div className="law-page-Main">
      <div className="law-page1">
      
      <div className="header-law">
        
        <span> <button className="back-laws"onClick={() => window.history.back()}>Back</button></span>
        <span><h1 className="title-laws">{law.title}</h1></span>
        <span> <TextToSpeechButton title={law.title} statement={law.statement} content={law.content} />
</span>
      </div>
     
      <div className="content-law">
        <p className="statement-law">{law.statement}</p>
        {paragraphs}
        
        <a href={law.moreInfoUrl} className="link-law">
          Link for More Information
        </a>
      </div>
      
    </div>
    </div>

    </>
  );
};

export default LawPage;