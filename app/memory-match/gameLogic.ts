// app/memory-match/gameLogic.ts

export type Card = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const emojis = ['🍎', '🚗', '🐶', '🌟', '🎈', '🍕', '🧠', '🎮'];

export function generateShuffledCards(): Card[] {
  const cards: Card[] = [];

  emojis.forEach((emoji, index) => {
    const firstCard: Card = {
      id: index * 2,
      emoji,
      isFlipped: false,
      isMatched: false,
    };
    const secondCard: Card = {
      id: index * 2 + 1,
      emoji,
      isFlipped: false,
      isMatched: false,
    };
    cards.push(firstCard, secondCard);
  });

  // Shuffle the cards
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}
