import React from 'react';

const MatchesTab = () => {
  // Mock data
  const matches = [
    { name: 'mock cat 1', imageUrl: 'https://i.imgur.com/Jvh1OQm.jpeg' },
    { name: 'mock cat 2', imageUrl: 'https://i.imgur.com/Jvh1OQm.jpeg' },
    { name: 'mock cat 3', imageUrl: 'https://i.imgur.com/Jvh1OQm.jpeg' },
    { name: 'mock cat 4', imageUrl: 'https://i.imgur.com/Jvh1OQm.jpeg' },
    { name: 'mock cat 5', imageUrl: 'https://i.imgur.com/Jvh1OQm.jpeg' },
    { name: 'mock cat 6', imageUrl: 'https://i.imgur.com/Jvh1OQm.jpeg' },
    { name: 'mock cat 7', imageUrl: 'https://i.imgur.com/Jvh1OQm.jpeg' },
    { name: 'mock cat 8', imageUrl: 'https://i.imgur.com/Jvh1OQm.jpeg' },
    { name: 'mock cat 9', imageUrl: 'https://i.imgur.com/Jvh1OQm.jpeg' },
    { name: 'mock cat 10', imageUrl: 'https://i.imgur.com/Jvh1OQm.jpeg' },
  ];

  return (
    <div className='matches-tab'>
      {matches.map(match => (
        <>
          <p>{match.name}</p>
          <img src={match.imageUrl}></img>
        </>
      ))}
    </div>
  );
};

export default MatchesTab;