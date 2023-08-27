import React, { useState } from 'react'
import styles from './Fuelcard.module.css'
import { supabase } from '../store/Supabase';

const Fuelcard = (item) => {
  const [isLoading, setIsLoading] = useState(false)

  async function submitFuel() {
    const { error } = await supabase
      .from("viewreport")
      .insert({ name: item.name, vehiclename: item.vehiclename, litre: item.litre, type: item.type, content: item.content, message: item.message });

    if (error) {
      console.log(error);
    } else {
      console.log("Data saved successfully!");
    }
  }

  async function handleDelete(id) {
    setIsLoading(true)
    await submitFuel();
    const { error } = await supabase
      .from('petition')
      .delete()
      .eq('id', id)
    if (error) {
      console.log(error)
    } else {
      console.log("Item deleted successfully!")
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
          <div>type_{item.type}</div>
          <div>litre_{item.litre}</div>
        </div>
        <div className={styles.complete}>
          <button onClick={() => handleDelete(item.id)}>
            {isLoading ? 'Loading...' : 'complete'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Fuelcard