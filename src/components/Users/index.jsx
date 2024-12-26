import styles from "./index.module.css";
import Address from "../Address";
import Car from "../Car";
function Users(props) {
  const { image, firstName, lastName, phone, email, address, cars } = props.data;
  return (
    <div className={styles.user_item}>
      <img src={image} alt="User image" />

      <h3>
        {firstName} {lastName}
      </h3>

      <div className={styles.user_email}>
        <a href="#">{phone}</a>
        <a href="#">{email}</a>
      </div>
      
      <Address address={address} />
      
      <Car cars={cars} />

    </div>
  );
}

export default Users;
