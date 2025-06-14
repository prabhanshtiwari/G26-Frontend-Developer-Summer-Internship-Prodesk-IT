import React, { Component } from 'react';

const EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊'];
const DUPLICATED_EMOJIS = [...EMOJIS, ...EMOJIS];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

class MemoryGameClass extends Component {
  state = {
    cards: [],
    flipped: [],
    matched: [],
    score: 0,
  };

  componentDidMount() {
    this.resetGame();
  }

  resetGame = () => {
    const shuffled = shuffle(DUPLICATED_EMOJIS.map((emoji, i) => ({
      id: i,
      emoji,
      isFlipped: false,
      isMatched: false
    })));

    this.setState({ cards: shuffled, flipped: [], matched: [], score: 0 });
  };

  handleCardClick = (index) => {
    const { flipped, cards, matched, score } = this.state;

    if (cards[index].isFlipped || cards[index].isMatched || flipped.length === 2) return;

    const newFlipped = [...flipped, index];
    const updatedCards = [...cards];
    updatedCards[index].isFlipped = true;

    if (newFlipped.length === 2) {
      const [i1, i2] = newFlipped;
      if (cards[i1].emoji === cards[i2].emoji) {
        updatedCards[i1].isMatched = true;
        updatedCards[i2].isMatched = true;
        this.setState({
          cards: updatedCards,
          flipped: [],
          matched: [...matched, i1, i2],
          score: score + 1,
        });
      } else {
        setTimeout(() => {
          updatedCards[i1].isFlipped = false;
          updatedCards[i2].isFlipped = false;
          this.setState({ cards: updatedCards, flipped: [] });
        }, 1000);
      }
    }

    this.setState({ cards: updatedCards, flipped: newFlipped });
  };

  render() {
    const { cards, score } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Memory Game (Class Component)</h2>
        <p>Score: {score}</p>
        <button onClick={this.resetGame}>Reset Game</button>
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
              onClick={() => this.handleCardClick(idx)}
            >
              {card.isFlipped || card.isMatched ? card.emoji : '❓'}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MemoryGameClass;
