import React, { Component } from 'react';

// Componente de botón de reacción
const ReactionButton = React.memo(({ emoji, count, onClick }) => (
  <button onClick={onClick}>
    <span role="img" aria-label="emoji">{emoji}</span> {count}
  </button>
));

class Reactions extends Component {
  state = {
    reactions: {
      like: 0,
      love: 0,
      laugh: 0,
      wow: 0,
      sad: 0,
      angry: 0
    }
  };

  // Función para manejar las reacciones
  handleReaction = (reaction) => {
    this.setState(prevState => ({
      reactions: {
        ...prevState.reactions,
        [reaction]: prevState.reactions[reaction] + 1
      }
    }));
  };

  // Función para renderizar los botones de reacción
  renderReactionButton = (reaction) => {
    const { reactions } = this.state;
    return (
      <ReactionButton
        key={reaction}
        emoji={emojis[reaction]}
        count={reactions[reaction]}
        onClick={() => this.handleReaction(reaction)}
      />
    );
  }

  render() {
    return (
      <div>
        <div>
          {Object.keys(this.state.reactions).map(this.renderReactionButton)}
        </div>
      </div>
    );
  }
}

// Mapa de emojis para las reacciones
const emojis = {
  like: '👍',
  love: '❤️',
  laugh: '😂',
  wow: '😮',
  sad: '😢',
  angry: '😠'
};

export default Reactions;
