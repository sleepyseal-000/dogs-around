import React from 'react';

const BanList = ({ banlist, handleRemove }) => {
  return (
    <div>
      <h2>Ban List</h2>
      <h3>Select an attribute in your listing to ban it</h3>
      {banlist && banlist.length > 0 ? (
        banlist.map((btn, index) => (
          <li key={index} style={{ listStyleType: 'none' }}>
            <button onClick={() => handleRemove(index)}>{btn}</button>
          </li>
        ))
      ) : (
        <p>No Ban</p>
      )}
    </div>
  );
};

export default BanList;
