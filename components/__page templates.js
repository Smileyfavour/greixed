
import { useState,useEffect } from 'react';
import Head from 'next/head';



export default function Home() {
  const [screenHeight,setScreenHeight] = useState(0);


  useEffect(()=>{
    setScreenHeight(window.innerHeight - 40)
  },[]);
 

 

  return (
  
    <>
    <Head>
    <title>Briding the Gap to Academic Excellence | Greixed Consult</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/greixed logo (4).png"/>
    </Head>
    <main className={styles.container} style={{height:`${screenHeight}px`}}>
     
  
    </main>
    </>
       
  )}