import React, { useState, useEffect } from 'react';

const EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊'];
const DUPLICATED_EMOJIS = [...EMOJIS, ...EMOJIS];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const MemoryGameFunction = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);

  const resetGame = () => {
    const shuffled = shuffle(DUPLICATED_EMOJIS.map((emoji, i) => ({
      id: i,
      emoji,
      isFlipped: false,
      isMatched: false
    })));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setScore(0);
  };

  useEffect(() => {
    resetGame();
  }, []);

  const handleCardClick = (index) => {
    if (cards[index].isFlipped || cards[index].isMatched || flipped.length === 2) return;

    const newFlipped = [...flipped, index];
    const updatedCards = [...cards];
    updatedCards[index].isFlipped = true;
    setCards(updatedCards);

    if (newFlipped.length === 2) {
      const [i1, i2] = newFlipped;
      if (cards[i1].emoji === cards[i2].emoji) {
        updatedCards[i1].isMatched = true;
        updatedCards[i2].isMatched = true;
        setMatched([...matched, i1, i2]);
        setScore(score + 1);
        setFlipped([]);
      } else {
        setTimeout(() => {
          updatedCards[i1].isFlipped = false;
          updatedCards[i2].isFlipped = false;
          setCards([...updatedCards]);
          setFlipped([]);
        }, 1000);
      }
    } else {
      setFlipped(newFlipped);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Memory Game (Functional Component)</h2>
      <p>Score: {score}</p>
      <button onClick={resetGame}>Reset Game</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 60px)', gap: '10px', margin: '20px auto', width: 'fit-content' }}>
        {cards.map((card, idx) => (
          <div
            key={idx}
            style={{
              width: '60px',
              height: '60px',
              border: '1px solid #333',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: card.isMatched ? '#ccc' : '#fff',
              cursor: 'pointer'
            }}
            onClick={() => handleCardClick(idx)}
          >
            {card.isFlipped || card.isMatched ? card.emoji : '❓'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGameFunction;
