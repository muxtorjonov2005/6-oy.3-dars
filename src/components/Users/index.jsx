import styles from './index.module.css'
function Users(props) {
  const {image, firstName, lastName, phone, email, address, cars} = props.data
  return (
    <div className={styles.user_item} >
      <img src={image} alt="User image" />
      <h3>
        {firstName} {lastName}
      </h3>
      <div className="user_email">
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <div className="user_address">
        <p>{address.region}</p>
        <p>{address.zip}</p>
      </div>
      <div className="user_cars">
        <p>{cars[0]}</p>
        <p>{cars[1]}</p>
      </div>
    </div>
  );
}

export default Users;
