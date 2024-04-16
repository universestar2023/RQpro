import React from 'react';
import './nationalAnthem.css';
import Img from "./national_A.jpg";

const NationalAnthem = () => {
    return (
      <div className="container-N">
        <div className="UnderImg">
      <img src={Img} alt="National Anthem" className="anthem-image" />
      </div>
      <div className="UnderTable">
        <h3>Words and their Meanings from the National Anthem</h3>
      <table className="anthem-table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jana</td>
            <td>People</td>
          </tr>
          <tr>
            <td>Gana</td>
            <td>Song or anthem</td>
          </tr>
          <tr>
            <td>Mana</td>
            <td>Mind</td>
          </tr>
          <tr>
            <td>Adhinayaka</td>
            <td>Leader or ruler</td>
          </tr>
          <tr>
            <td>Jaya</td>
            <td>Victory</td>
          </tr>
          <tr>
            <td>Bharata</td>
            <td>India (an ancient name for India)</td>
          </tr>
          <tr>
            <td>Bhagya</td>
            <td>Destiny or fortune</td>
          </tr>
          <tr>
            <td>Vidhata</td>
            <td>Dispenser or provider</td>
          </tr>
          <tr>
            <td>Panjaba</td>
            <td>Punjab</td>
          </tr>
          <tr>
            <td>Sindhhu</td>
            <td>Sindh (a historical region)</td>
          </tr>
          <tr>
            <td>Gujarata</td>
            <td>Gujarat</td>
          </tr>
          <tr>
            <td>Maratha</td>
            <td>Maratha (historical region/people)</td>
          </tr>
          <tr>
            <td>Dravida</td>
            <td>Dravidian (a linguistic and cultural group)</td>
          </tr>
          <tr>
            <td>Utkala</td>
            <td>Odisha (a state in eastern India)</td>
          </tr>
          <tr>
            <td>Banga</td>
            <td>Bengal (a region in eastern India)</td>
          </tr>
          <tr>
            <td>Vindhya</td>
            <td>Vindhya (a range of hills in central India)</td>
          </tr>
          <tr>
            <td>Himachala</td>
            <td>Himalayas (the mountain range)</td>
          </tr>
          <tr>
            <td>Yamuna</td>
            <td>Yamuna (a major river in northern India)</td>
          </tr>
          <tr>
            <td>Ganga</td>
            <td>Ganges (a major river in northern India)</td>
          </tr>
          <tr>
            <td>Uchchhala</td>
            <td>Roaring or resounding</td>
          </tr>
          <tr>
            <td>Jaladhi</td>
            <td>Ocean or sea</td>
          </tr>
          <tr>
            <td>Taranga</td>
            <td>Waves</td>
          </tr>
          <tr>
            <td>Tava</td>
            <td>Your</td>
          </tr>
          <tr>
            <td>Shubha</td>
            <td>Auspicious or good</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Jage</td>
            <td>Awakens or arises</td>
          </tr>
          <tr>
            <td>Asisa</td>
            <td>Blessings</td>
          </tr>
          <tr>
            <td>Mange</td>
            <td>Seeks or asks for</td>
          </tr>
          <tr>
            <td>Gahe</td>
            <td>Sing</td>
          </tr>
          <tr>
            <td>Gatha</td>
            <td>Song or hymn</td>
          </tr>
          <tr>
            <td>Mangala</td>
            <td>Auspicious or blessed</td>
          </tr>
          <tr>
            <td>Dayaka</td>
            <td>Bestower or giver</td>
          </tr>
          <tr>
            <td>Jaya</td>
            <td>Victory</td>
          </tr>
          <tr>
            <td>Jaya he</td>
            <td>Victory be to you! (a phrase expressing homage or salutation)</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="Underbtn">
      <button onClick={() => window.history.back()}>Back</button>
    </div>
    </div>
  );
};

export default NationalAnthem;
