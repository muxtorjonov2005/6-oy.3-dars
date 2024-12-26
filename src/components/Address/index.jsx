import styles from "./index.module.css";

function Address({ address }) {
    return (
      <div className={styles.user_address}>
        <span><div></div><p>Region: {address.region}</p></span>
        <span><div></div><p>Zip: {address.zip}</p></span>
      </div>
    );
  }
  
  export default Address;
  