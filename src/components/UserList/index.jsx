import Users from '../Users';
import users from '../../assets/users.json';
import styles from './index.module.css'

function UserList() {
  return (
    <div className={styles.userList}>
      {
        users.length > 0 && users.map((user, index) => {
          return <Users data = {user} key = {index} ></Users>
        })
      }
    </div>
  );
}

export default UserList;