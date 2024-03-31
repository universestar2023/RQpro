import React, { useState } from 'react';
import './rights.css'; // Import CSS file for styling

const RightsModule = () => {
  const [selectedRight, setSelectedRight] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const rights = [
    {
      title: 'Right to Education',
      content: 'Every child has the right to an education.',
      articleNumber: 'Article 28',
      image: '/images/education.jpg',
    },
    {
      title: 'Right to Protection',
      content: 'Every child has the right to protection from harm and exploitation.',
      articleNumber: 'Article 19',
      image: '/images/protection.jpg',
    },
    {
      title: 'Right against Discrimination',
      content: 'Every child has the right to an education.',
      articleNumber: 'Article 28',
      image: '/images/education.jpg',
    },
    {
      title: 'Right to Speech',
      content: 'Every child has the right to an education.',
      articleNumber: 'Article 28',
      image: '/images/education.jpg',
    },
    {
      title: 'Right to Expression',
      content: 'Every child has the right to an education.',
      articleNumber: 'Article 28',
      image: '/images/education.jpg',
    },
    {
      title: 'Right from abuse',
      content: 'Every child has the right to an education.',
      articleNumber: 'Article 28',
      image: '/images/education.jpg',
    },
    {
      title: 'Right to Shelter',
      content: 'Every child has the right to an education.',
      articleNumber: 'Article 28',
      image: '/images/education.jpg',
    },
    {
      title: 'Right to Life',
      content: 'Every child has the right to an education.',
      articleNumber: 'Article 28',
      image: '/images/education.jpg',
    },
    {
      title: 'Right to Health',
      content: 'Every child has the right to an education.',
      articleNumber: 'Article 28',
      image: '/images/education.jpg',
    },
    
    // Add more rights similarly
  ];

  const handleClick = (index) => {
    setSelectedRight(rights[index]);
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
  };

  return (
    <div className="rights-module">
      {!showDetail ? (
        <>
          <h1>Rights</h1>
          <div className="rights-container">
            {rights.map((right, index) => (
              <div key={index} className={`right-block right-${index}`} onClick={() => handleClick(index)}>
                <h2>{right.title}</h2>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="selected-right">
          <h2>{selectedRight.title}</h2>
          <img src={selectedRight.image} alt={selectedRight.title} />
          <p>Article Number: {selectedRight.articleNumber}</p>
          <p>{selectedRight.content}</p>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default RightsModule;
