import React, { useState } from 'react';
import './rights.css'; // Import CSS file for styling


const RightsModule = () => {
  const [selectedRight, setSelectedRight] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const rights = [
    {
      title: 'Right to Education',
      content: 'Article 21-A of the Constitution states that the state must provide free and compulsory education to all children between the ages of six and fourteen. Article 45 states that the state should also provide early childhood care and education for children under the age of six.',
      articleNumber: 'Article 21-A',
      image: '/Photos/Education.jpg',
      link: ' https://dsel.education.gov.in/rte',
    },
    {
      title: 'Right to Equality',
      content: 'The right to equality is a fundamental right in the Indian Constitution. It guarantees equal rights for all people, regardless of religion, gender, caste, race, or place of birth.',
      articleNumber: 'Article 14',
      image: '/Photos/Equality.jpg',
      link: 'https://www.india.gov.in/gsearch?s=Right+to+equality&op=Search',
    },
    {
      title: 'Right against Discrimination',
      content: 'Article 15 of the Constitution of India forbids discrimination on grounds only of religion, race, caste, gender, or place of birth. The right against discrimination emphasizes that all individuals should be treated with dignity, fairness, and respect, regardless of their differences',
      articleNumber: 'Article 15',
      image: '/Photos/Discrimination.jpg',
      link: 'https://indiankanoon.org/doc/609295/',
    },
    {
      title: 'Right to Life',
      content: '“Protection of Life and Personal Liberty": No person shall be deprived of his life or personal liberty except according to procedure established by law. This fundamental right is available to every person, citizens and foreigners alike. Article 21 provides two rights: •Right to life and •Right to personal liberty.',
      articleNumber: 'Article 21', 
      image: '/Photos/education.jpg',
    },
    {
      title: 'Right to Freedom of Speech and Expression',
      content: 'The Constitution of India guarantees freedom of speech and expression to all citizens. This implies that all citizens have the right to express their views and opinions freely. This includes not only words of mouth, but also a speech by way of writings, pictures, movies, banners, etc. Children have the right to freedom of speech and expression, as long as their opinions and knowledge do not harm others. ',
      articleNumber: 'Article 28',
      image: '/images/education.jpg',
    },
    {
      title: 'Right against Exploitation',
      content: 'Article 24 says that “No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment". The fundamental right against exploitation guaranteed to all citizens prohibits child labour in mines, factories, and hazardous conditions. Child labour and Beggar is prohibited under the Right against Exploitation.',
      articleNumber: 'Article 24',
      image: '/Photos/Equality.jpg',
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
          <a href={selectedRight.link} target="_blank" rel="noopener noreferrer">Official Link</a>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default RightsModule;
