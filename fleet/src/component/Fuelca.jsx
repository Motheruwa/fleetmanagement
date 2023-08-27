import React, { useState } from 'react'
import styles from './Fuelcard.module.css'
import { supabase } from '../store/Supabase'

const Fuelca = (item) => {
  const [fuelAmount, setFuelAmount] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const handleCalculateClick = (fuelType, distance) => {
    let fuelEfficiency;
    switch (fuelType) {
      case 'gasoline':
        fuelEfficiency = 12; // kilometers per liter
        break;
      case 'diesel':
        fuelEfficiency = 15;
        break;
      case 'benzene':
        fuelEfficiency = 10;
        break;
      default:
        fuelEfficiency = 12;
    }
    const fuelNeeded = distance / fuelEfficiency;
    setFuelAmount(fuelNeeded);
  };

  async function handleApprove() {
    setIsLoading(true)
    const { error } = await supabase
      .from("petition")
      .insert({ name: item.name, vehiclename: item.vehiclename, km: item.km, litre: fuelAmount, type: item.type });

    if (error) {
      console.log(error);
    } else {
      console.log("Data saved successfully!");
    }
    setIsLoading(false)
  }

  return (
    <div className={styles.card}>
      <div className={styles.detail}>
        <div className={styles.name}>
          <div> name : {item.name}</div>
          <div> vehiclename : {item.vehiclename}</div>
          <div> time : {item.created_at}</div>
        </div>
        <div className={styles.km}>
          <div>km_{item.km}</div>
          <div>litre_{item.litre}</div>
          <div>type_{item.type}</div>
          <div>fuelamount_{fuelAmount}L</div>
        </div>
        <div className={styles.complete}>
          <button onClick={() => handleCalculateClick(item.type, item.km)}>Calculate</button>
          <button onClick={handleApprove}>
            {isLoading ? 'Loading...' : 'Approve'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Fuelca