import {
  ChangeEvent,
  MouseEvent as ReactMouseEvent,
  useEffect,
  useState,
} from "react";
import "./App.css";

type users = {
  id: number;
  firstName: string;
};

interface UsersData {
  users: users[];
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<Error>();
  const [searchParam, setSearchParam] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data: UsersData = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (e: unknown) {
      const error = e as Error;
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event: ReactMouseEvent<HTMLLIElement>) {
    setShowDropdown(false);
    setSearchParam(event.currentTarget.innerText);
    setFilteredUsers([]);
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);

  if (error) return <div>{error.message}</div>;

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}

      {showDropdown && (
        <ul>
          {filteredUsers && filteredUsers.length
            ? filteredUsers.map((item, index) => (
                <li onClick={handleClick} key={index}>
                  {item}
                </li>
              ))
            : null}
        </ul>
      )}
    </div>
  );
}

export default App;
