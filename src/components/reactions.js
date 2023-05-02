import React, { Component } from 'react';

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

  handleReaction = (reaction) => {
    this.setState(prevState => ({
      reactions: {
        ...prevState.reactions,
        [reaction]: prevState.reactions[reaction] + 1
      }
    }));
  };

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

const emojis = {
  like: '👍',
  love: '❤️',
  laugh: '😂',
  wow: '😮',
  sad: '😢',
  angry: '😠'
};

export default Reactions;
