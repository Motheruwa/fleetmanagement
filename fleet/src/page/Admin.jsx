import React, { useState } from 'react';
import styles from './Admin.module.css'
import Adddriver from './Adddriver';
import Addfuel from './Addfuel';
import Addmain from './Addmain';
import Maintenancema from './Maintenancema';
import Fuelma from './Fuelma';
import Viewreport from './Viewreport';
import Drivermanage from './Drivermanage';
function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
      <div className={styles.manage}>
      <div className={styles.abutton} onClick={() => handleOptionClick('drivermanage')}>
          Driver manage
        </div>
        <div className={styles.abutton} onClick={() => handleOptionClick('maintenancemanage')}>
          Maintenance manage
        </div>
        <div className={styles.abutton} onClick={() => handleOptionClick('fuelmanage')}>
          fuel manage
        </div>
        <div className={styles.abutton} onClick={() => handleOptionClick('viewreport')}>
          view report
        </div>
        </div>
        <div className={styles.box}>
        <div className={styles.buttontitle}> ADD </div>
        <div className={styles.button}>
        <div className={styles.bbutton}  onClick={() => handleOptionClick('driver')}>
          Add Driver
        </div>
        <div className={styles.bbutton} onClick={() => handleOptionClick('maintenance')}>
          Add Maintenance Manager
        </div>
        <div className={styles.bbutton} onClick={() => handleOptionClick('fuel')}>
          Add Fuel Manager
        </div>
        </div>
        </div>
       
      </div>
      <div className={styles.content}>
        {selectedOption === 'driver' && <Adddriver/>}
        {selectedOption === 'drivermanage' && <Drivermanage/>}
        {selectedOption === 'maintenance' && <Addmain/> }
        {selectedOption === 'fuel' && <Addfuel/>}
        {selectedOption === 'maintenancemanage' && <Maintenancema/>}
        {selectedOption === 'fuelmanage' && <Fuelma/>}
        {selectedOption === 'viewreport' && <Viewreport/>}
      </div>
    </div>
  );
}

export default App;