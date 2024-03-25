import React, { useState } from 'react';


const MapPage = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleClick = (areaName) => {
    console.log(`Clicked on ${areaName}`);
    setSelectedArea(areaName);
  };

  const renderAreaInfo = () => {
    switch (selectedArea) {
      case 'Raja Gate':
        return (
          <div>
            <h2>Raja Gate</h2>
            <img src="gate.jpg" alt="Raja Gate" style={{ maxWidth: '100%' }} />
            <p>This is the main entrance of the college</p>
          </div>
        );
      case 'Administrative block':
        return (
          <div>
            <h2>Administrative block</h2>
            <img src="adm.jpg" alt="Administrative block" style={{ maxWidth: '100%' }} />
            <p>The Administrative block of Farook College which includes the office space </p>
          </div>
        );
      case 'Library':
        return (
          <div>
            <h2>Library</h2>
            <img src="lib.jpg" alt="Library" style={{ maxWidth: '100%' }} />
            <p>This is the Abussabah Library</p>
          </div>
        );
      case 'CS Block':
        return (
          <div>
            <h2>CS Block</h2>
            <img src="cs.jpg" alt="CS Block" style={{ maxWidth: '100%' }} />
            <p>The Moopens Computer Science Block</p>
          </div>
        );
      case 'College Ground':
        return (
          <div>
            <h2>College Ground</h2>
            <img src="ground.jpg" alt="College Ground" style={{ maxWidth: '100%' }} />
            <p>The College Sports Ground</p>
          </div>
        );
      // Add cases for other areas...
      default:
        return null;
    }
  };

  return (
    <div>
     
      <h1>College Map</h1>
      <div>
        <div style={{ position: 'relative' }}>
          <img
            src="map.jpg"
            alt="Campus Map"
            useMap="#image-map"
            style={{ maxWidth: '100%' }}
          />
          <map name="image-map">
            {/* Raja Gate */}
            <area
              onClick={() => handleClick('Raja Gate')}
              alt="Raja Gate"
              title="Raja Gate"
              href="#"
              coords="819,910,739,858"
              shape="rect"
            />
            
            {/* Administrative block */}
            <area
              onClick={() => handleClick('Administrative block')}
              alt="Administrative block"
              title="Administrative block"
              href="#"
              coords="711,681,713,656,861,640,866,673,799,673,800,673"
              shape="poly"
            />
            
            {/* Library */}
            <area
              onClick={() => handleClick('Library')}
              alt="Library"
              title="Library"
              href="#"
              coords="851,736,840,751,840,770,823,770,824,786,837,790,837,803,861,805,861,822,896,822,903,742"
              shape="poly"
            />
            
            {/* CS Block */}
            <area
              onClick={() => handleClick('CS Block')}
              alt="CS Block"
              title="CS Block"
              href="#"
              coords="456,727,454,751,480,751,490,729,470,723"
              shape="poly"
            />
            
            {/* College Ground */}
            <area
              onClick={() => handleClick('College Ground')}
              alt="College Ground"
              title="College Ground"
              href="#"
              coords="455,439,483,685,653,672,618,416"
              shape="poly"
            />
            
            {/* Name tags for other areas */}
            <area
              onClick={() => handleClick('Zoology Block')}
              alt="Zoology Block"
              title="Zoology Block"
              href="#"
              coords="679,692,680,710,691,710,691,717,705,718,710,707,713,690"
              shape="poly"
            />
            <area
              onClick={() => handleClick('Old Block')}
              alt="Old Block"
              title="Old Block"
              href="#"
              coords="740,581,817,623"
              shape="rect"
            />
            <area
              onClick={() => handleClick('Commerce Block')}
              alt="Commerce Block"
              title="Commerce Block"
              href="#"
              coords="668,601,677,654,747,645,737,620,695,624,690,598,689,597"
              shape="poly"
            />
            <area
              onClick={() => handleClick('Chemistry Block')}
              alt="Chemistry Block"
              title="Chemistry Block"
              href="#"
              coords="652,485,676,482,691,594,668,595"
              shape="poly"
            />
            <area
              onClick={() => handleClick('Masjid')}
              alt="Masjid"
              title="Masjid"
              href="#"
              coords="348,759,394,777,418,728,386,710,354,717,348,734"
              shape="poly"
            />
            <area
              onClick={() => handleClick('Indoor Stadium')}
              alt="Indoor Stadium"
              title="Indoor Stadium"
              href="#"
              coords="636,409,642,447,695,433,686,396"
              shape="poly"
            />
                        {/* Presidents Hostel */}
                        <area
              onClick={() => handleClick('Presidents Hostel')}
              alt="Presidents Hostel"
              title="Presidents Hostel"
              href="#"
              coords="434,472,434,482,419,484,419,499,411,501,407,477"
              shape="poly"
            />
            
            {/* SS Hostel */}
            <area
              onClick={() => handleClick('SS Hostel')}
              alt="SS Hostel"
              title="SS Hostel"
              href="#"
              coords="1087,581,1088,671,1145,675,1162,647,1179,646,1179,616,1141,581"
              shape="poly"
            />
            
            {/* WW Hostel */}
            <area
              onClick={() => handleClick('WW Hostel')}
              alt="WW Hostel"
              title="WW Hostel"
              href="#"
              coords="1088,691,1085,705,1183,696,1183,679"
              shape="poly"
            />
            
            {/* IDB Hostel */}
            <area
              onClick={() => handleClick('IDB Hostel')}
              alt="IDB Hostel"
              title="IDB Hostel"
              href="#"
              coords="685,109,688,174,723,174,720,97"
              shape="poly"
            />
            
            {/* Al Mudaliar Hostel */}
            <area
              onClick={() => handleClick('Al Mudaliar Hostel')}
              alt="Al Mudaliar Hostel"
              title="Al Mudaliar Hostel"
              href="#"
              coords="506,811,506,855,557,871,611,840,604,803"
              shape="poly"
            />
            
            {/* Iqbal Hostel */}
            <area
              onClick={() => handleClick('Iqbal Hostel')}
              alt="Iqbal Hostel"
              title="Iqbal Hostel"
              href="#"
              coords="867,930,919,919,926,943,884,947,888,1027,870,1026"
              shape="poly"
            />
            
            {/* Azad Hostel */}
            <area
              onClick={() => handleClick('Azad Hostel')}
              alt="Azad Hostel"
              title="Azad Hostel"
              href="#"
              coords="904,850,915,849,913,891,900,893,900,882,846,875,846,892,818,891,833,850"
              shape="poly"
            />
            {/* Training College */}
            <area
              onClick={() => handleClick('Training College')}
              alt="Training College"
              title="Training College"
              href="#"
              coords="966,554,989,669,962,685,955,668,952,598"
              shape="poly"
            />
            
            {/* PM Institute */}
            <area
              onClick={() => handleClick('PM Institute')}
              alt="PM Institute"
              title="PM Institute"
              href="#"
              coords="661,772,661,830,702,838,705,775"
              shape="poly"
            />
            
            {/* SF */}
            <area
              onClick={() => handleClick('SF')}
              alt="SF"
              title="SF"
              href="#"
              coords="944,440,933,465,984,472,991,456"
              shape="poly"
            />
            
            {/* Botany Block */}
            <area
              onClick={() => handleClick('Botany Block')}
              alt="Botany Block"
              title="Botany Block"
              href="#"
              coords="906,581,907,589,941,585,941,575"
              shape="poly"
            />

            
          </map>
        </div>
      </div>
      <div>
        {selectedArea && (
          <div>
            <button onClick={() => setSelectedArea(null)}>Close</button>
            {renderAreaInfo()}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapPage;
