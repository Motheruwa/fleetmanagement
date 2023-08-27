import React, { useEffect, useState } from "react";
import styles from './Maintainre.module.css'
import { supabase } from '../store/Supabase'

const Maintainre = (item) => {
  const [image, setImage] = useState()
  const [isLoading, setIsLoading] = useState(false)

  async function downloadImage(file) {
    const { data} = await supabase
      .storage
      .from('fimage')
      .download(file)
    
    const url = URL.createObjectURL(data)
    setImage(url)
  }

  useEffect(() => {
    if (item.photo) {
      downloadImage(item.photo)
    }
  }, [item.photo])

  async function handleDelete(id) {
    setIsLoading(true)
    await submitData();
    const { error } = await supabase
      .from('message')
      .delete()
      .eq('id', id)
    if (error) {
      console.log(error)
    } else {
      console.log("Item deleted successfully!")
    }
    setIsLoading(false)
  }

  async function submitData() {
    const { error } = await supabase
      .from("viewreport")
      .insert({ name: item.name, vehiclename: item.vehiclename, litre: item.litre, type: item.type, content: item.content, message: item.message });

    if (error) {
      console.log(error);
    } else {
      console.log("Data saved successfully!");
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.detail}>
        <div className={styles.name}>
          <div> name : {item.name}</div>
          <div> vehiclename : {item.vehiclename}</div>
          <div> time : {item.created_at}</div>
        </div>
        <div className={styles.content}>
          <div>{item.content}</div>
        </div>
        <div className={styles.disc}>
          <div>{item.message}</div>
        </div>
        <div className={styles.complete}>
          <button onClick={() => handleDelete(item.id)}>
            {isLoading ? 'Loading...' : 'complete'}
          </button>
        </div>
      </div>
      <div className={styles.img}>
        <img src={image} alt={item.name} />
      </div>
    </div>
  )
}

export default Maintainre