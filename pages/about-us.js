
import { useState,useEffect } from 'react';
import Head from 'next/head';



export default function AboutUs() {
// const [screenHeight,setScreenHeight] = useState(0);


//   useEffect(()=>{  
//     setScreenHeight(window.innerHeight - 40)
//   },[]);
 

 

  return (
  
    <>
    <Head>
    <title>Learn about us today | Greixed Consult</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/greixed logo (4).png"/>
    </Head>
    <main className={styles.container}>
      <div className={styles.body}>
        <h1 className={styles.heading}>About Greixed Consult</h1>
        <div className={styles.allText}>
        <p className={styles.text}>
          Greixed Consult was established in 2018 to help people who wish to partake in any exam
          and do not have any option of learning by hiring or contacting a tutor to be able to
          reach out to us for assistance and pass in flying colours.  
        </p>
        <p className={styles.texts}>
          We also established this organization to help people who are willing to get a schorlaship to
          study abroad made easy for them and offer financial advices to them.
        </p>
        </div>
      </div>
    </main>
    </>
       
  )}
  const styles={
    container:'',
    body:'',
    allText:'text-2xl leading-loose',
    heading:'mt-10 text-5xl font-bold flex justify-center',
    text:'px-5  mt-10',
    texts:'px-5 ',
    
  }
  
   
