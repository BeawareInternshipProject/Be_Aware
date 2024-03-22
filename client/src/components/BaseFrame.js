<<<<<<< HEAD
import { grey } from "@material-ui/core/colors";
import styles from "./BaseFrame.module.css";
import { useState, useEffect } from 'react';


const BaseFrame = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch userData from localStorage when component mounts
    const storedUserData = localStorage.getItem("userData");
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      // console.log(userData);
      // setName(userData.username);
    }
  }, []);

=======
//
import React from 'react';
import styles from "./BaseFrame.module.css";
import { Link } from 'react-router-dom'; // Import Link component from React Router
import { blueGrey } from '@material-ui/core/colors';
import { useState, useEffect } from 'react';
import { firebaseApp } from './LoginSignUp/firebase';
 
const BaseFrame = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Fetch userData from localStorage when component mounts
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  console.log("#############");
  console.log(firebaseApp.auth().currentUser);
>>>>>>> 394804fb44a272562101e77fd597bf1c1ef882f7
  return (
    <div className={styles.baseFrame} style={{backgroundColor:userData?userData.color:blueGrey}}>
      <div className={styles.frameParent} style={{backgroundColor:userData?userData.color:blueGrey}}>
        <div className={styles.logoRemoveBgPreviewWrapper} >
          <header className={styles.logoRemoveBgPreview}>
            {/* Wrap the home button with Link */}
            <Link to="/dashboard">
              <img
                className={styles.logoDarkRemovebgPreview1Icon}
                loading="eager"
                alt=""
                src="/logodarkremovebgpreview-1@2x.png"
              />
            </Link>
            <div className={styles.homeBackButton}>
  <Link to="/dashboard">
    <button>Home</button>
  </Link>
             
            </div>
          </header>
        </div>
<<<<<<< HEAD
        <div className={styles.screenshotBox} style={{backgroundColor:userData?userData.color??grey:grey,height:"100px"}}>
          <div className={styles.screenshotBoxChild} style={{backgroundColor:userData?userData.color??grey:grey}}/>
          {/* <img
=======
        <div className={styles.screenshotBox} style={{backgroundColor:userData?userData.color:blueGrey}}>
          <div className={styles.screenshotBoxChild} style={{backgroundColor:userData?userData.color:blueGrey}}/>
          <img
>>>>>>> 394804fb44a272562101e77fd597bf1c1ef882f7
            className={styles.screenshot20240208At650}
            style={{color:userData?userData.color:blueGrey}}
            loading="eager"
            alt=""
<<<<<<< HEAD
            src="/screenshot-20240208-at-650-1@2x.png"
          /> */}
          <h3 className={styles.letsConnectVia}>
=======
            src="/imageslogo.png"
          />
          <h3 className={styles.letsConnectVia} style={{backgroundColor:userData?userData.color:blueGrey}}>
>>>>>>> 394804fb44a272562101e77fd597bf1c1ef882f7
            Let’s Connect via Live Stream !
          </h3>
        </div>
      </div>
    </div>
  );
};
 
export default BaseFrame;