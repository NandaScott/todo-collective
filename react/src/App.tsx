import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [items, setItems] = useState([
    { id: '485aa836-b3ff-44af-9d0d-6a3a15e5e1d1', value: 'Learn Vue' },
    { id: 'bacd1334-115a-49ed-870f-a84a7d22f139', value: 'Learn Angular' },
  ]);
  const [text, setText] = useState('');

  const addItem = () => {
    setItems([...items, { id: uuidv4(), value: text }]);
    setText('');
  };

  const removeItem = (id: string) => () => {
    const filtered = items.filter(({ id: itemId }) => id !== itemId);
    setItems(filtered);
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className='flex flex-col gap-4 items-center justify-center h-full'>
      <h1 className='font-bold text-4xl'>React TODO App</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='hidden' htmlFor='additem'>
            Add item
          </label>
          <input
            type='text'
            placeholder='Add item'
            id='additem'
            onChange={inputChange}
            value={text}
          />
          <button onClick={addItem}>Add</button>
        </div>
        <ol>
          {items.map(({ id, value }, i) => (
            <li key={id} className='flex justify-between'>
              {i + 1}. {value} <button onClick={removeItem(id)}>X</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
