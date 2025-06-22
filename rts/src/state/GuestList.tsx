import React from 'react';
import { useState } from 'react';
const GuestList = () => {
  const [name, setName] = useState('');
  const [guest, setGuest] = useState<string[]>([]);

  const onClick = () => {
    setGuest([...guest, name]);
    setName('');
  };
  return (
    <div>
      <h2> GuestList</h2>
      <ul>
        {guest.map((gu) => (
          <li>{gu}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default GuestList;
