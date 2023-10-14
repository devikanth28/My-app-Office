import React, { useState, useEffect } from 'react';

const Debounce = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
      const debounceTimer = setTimeout(() => {
          // Handle API call or any other task with inputValue
          console.log(inputValue);
      }, 1000); // Debounce time of 1 second

      return () => {
          clearTimeout(debounceTimer);
      };
  }, [inputValue]);

  const handleChange = (e) => {
      setInputValue(e.target.value);
  };

  return (
      <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
      />
  );
  }

export default Debounce;
