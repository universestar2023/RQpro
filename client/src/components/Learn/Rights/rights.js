import React, { useState } from 'react';
import './rights.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import Navbar1 from '../../Home/navbar1';
const RightsModule = () => {
  const [selectedRight, setSelectedRight] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const rights = [
    {
      title: 'Right to Equality',
      content: 'The right to equality is a fundamental right in the Indian Constitution. It guarantees equal rights for all people, regardless of religion, gender, caste, race, or place of birth.',
      articleNumber: 'Article 14',
      image:  require('./Photos/Equality.jpg'),
      link: 'https://www.constitutionofindia.net/articles/article-14-equality-before-law/',
    },
    {
      title: 'Right against Discrimination',
      content: 'Article 15 of the Constitution of India forbids discrimination on grounds only of religion, race, caste, gender, or place of birth. The right against discrimination emphasizes that all individuals should be treated with dignity, fairness, and respect, regardless of their differences',
      articleNumber: 'Article 15',
      image:  require('./Photos/Discrimination.jpg'),
      link: 'https://www.constitutionofindia.net/articles/article-15-prohibition-of-discrimination-on-grounds-of-religion-race-caste-sex-or-place-of-birth/',
    },
    
    {
      title: 'Right to Freedom of Speech and Expression',
      content: 'The Constitution of India guarantees freedom of speech and expression to all citizens. This implies that all citizens have the right to express their views and opinions freely. This includes not only words of mouth, but also a speech by way of writings, pictures, movies, banners, etc. Children have the right to freedom of speech and expression, as long as their opinions and knowledge do not harm others. ',
      articleNumber: 'Article 19',
      image: require('./Photos/Speech.jpg'),
      link:'https://www.constitutionofindia.net/articles/article-19-protection-of-certain-rights-regarding-freedom-of-speech-etc/',
    },
    {
      title: 'Right to Life',
      content: '“Protection of Life and Personal Liberty": No person shall be deprived of his life or personal liberty except according to procedure established by law. This fundamental right is available to every person, citizens and foreigners alike. Article 21 provides two rights: •Right to life and •Right to personal liberty.',
      articleNumber: 'Article 21', 
      image: require('./Photos/Life.jpg'),
      link: 'https://www.constitutionofindia.net/articles/article-21-protection-of-life-and-personal-liberty/',
    },
    {
      title: 'Right to Education',
      content: 'Article 21-A of the Constitution states that the state must provide free and compulsory education to all children between the ages of six and fourteen. Article 45 states that the state should also provide early childhood care and education for children under the age of six.',
      articleNumber: 'Article 21A',
      image: require('./Photos/Education.jpg'),
      link: ' https://dsel.education.gov.in/rte',
    },
    {
      title: 'Right against Exploitation',
      content: 'Article 24 says that “No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment". The fundamental right against exploitation guaranteed to all citizens prohibits child labour in mines, factories, and hazardous conditions. Child labour and Beggar is prohibited under the Right against Exploitation.',
      articleNumber: 'Article 24',
      image: require('./Photos/Exploitation.jpg'),
      link:'https://www.constitutionofindia.net/articles/article-24-prohibition-of-employment-of-children-in-factories-etc/',
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
    <div><Navbar1/>
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
            <div className="test-button">
       <Link to="/test"> <button><i>Click here to Test yourself!</i></button></Link>
      </div>
          </div>
        </>
      ) : (
        <div className="selected-right">
          <h2>{selectedRight.title}</h2>
          <img src={selectedRight.image} alt={selectedRight.title} />
          <p>Article Number: {selectedRight.articleNumber}</p>
          <p>{selectedRight.content}</p>
          <a href={selectedRight.link} target="_blank" rel="noopener noreferrer">Link</a>
          <button onClick={handleBack} className='custom-button'>Back</button>
        </div>
      )}
      
    </div>
    </div>
  );
};

export default RightsModule;

