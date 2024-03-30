// import React, { useState } from 'react';
// import './lconduct.css';

// const Accordion = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const handleToggle = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     return (
//         <div className="accordion">
//             <div className="accordion-item">
//                 <div className="accordion-header" onClick={() => handleToggle(0)}>
//                     <h2>Accordion Item 1</h2>
//                 </div>
//                 <div className={`accordion-collapse ${activeIndex === 0 ? 'show' : ''}`}>
//                     <div className="accordion-body">
//                         <textarea placeholder="Enter text here..." />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion-item">
//                 <div className="accordion-header" onClick={() => handleToggle(1)}>
//                     <h2>Accordion Item 2</h2>
//                 </div>
//                 <div className={`accordion-collapse ${activeIndex === 1 ? 'show' : ''}`}>
//                     <div className="accordion-body">
//                         <textarea placeholder="Enter text here..." />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion-item">
//                 <div className="accordion-header" onClick={() => handleToggle(2)}>
//                     <h2>Accordion Item 3</h2>
//                 </div>
//                 <div className={`accordion-collapse ${activeIndex === 2 ? 'show' : ''}`}>
//                     <div className="accordion-body">
//                         <textarea placeholder="Enter text here..." />
//                     </div>
//                 </div>
//             </div>
//             <div className="accordion-item">
//                 <div className="accordion-header" onClick={() => handleToggle(3)}>
//                     <h2>Accordion Item 4</h2>
//                 </div>
//                 <div className={`accordion-collapse ${activeIndex === 3 ? 'show' : ''}`}>
//                     <div className="accordion-body">
//                         <textarea placeholder="Enter text here..." />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Accordion;
