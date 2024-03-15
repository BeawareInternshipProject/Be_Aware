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

  return (
    <div className={styles.baseFrame}>
      <div className={styles.frameParent}>
        <div className={styles.logoRemoveBgPreviewWrapper}>
          <header className={styles.logoRemoveBgPreview}>
            <img
              className={styles.logoDarkRemovebgPreview1Icon}
              loading="eager"
              alt=""
              src="/logodarkremovebgpreview-1@2x.png"
            />
            <div className={styles.homeBackButton}>
              <div className={styles.home}>Home</div>
              <div className={styles.back}>Back</div>
            </div>
          </header>
        </div>
        <div className={styles.screenshotBox} style={{backgroundColor:userData?userData.color??grey:grey,height:"100px"}}>
          <div className={styles.screenshotBoxChild} style={{backgroundColor:userData?userData.color??grey:grey}}/>
          {/* <img
            className={styles.screenshot20240208At650}
            loading="eager"
            alt=""
            src="/screenshot-20240208-at-650-1@2x.png"
          /> */}
          <h3 className={styles.letsConnectVia}>
            Let’s Connect via Live Stream !
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BaseFrame;
