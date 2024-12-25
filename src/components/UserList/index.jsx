import Users from './components/Users';
import users from "./assets/users.json";

function UserList() {
  return (
    <div>
      {
        users.length > 0 && users.map((user, index) => {
          return <Users data = {user} key = {index} ></Users>
        })
      }
    </div>
  );
}

export default UserList;