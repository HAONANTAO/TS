import React from 'react';
import { useState } from 'react';

const users = [
  { name: 'sarah', age: 21 },
  { name: 'aaron', age: 21 },
  { name: 'damon', age: 21 },
];
const UserSearch = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number }>();
  const onClick = () => {
    const filterUser = users.find((user) => user.name === name);
    console.log(filterUser);
    setUser(filterUser);
  };
  return (
    <div>
      UserSearch
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find user</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
