import React, { Component } from 'react';
import KafkaService from "../services/kafka.service";

function saveLike(e, status) {

  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("Like");
  e.preventDefault();
}

function saveLove(e, status) {

  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("Love");
  e.preventDefault();
}

function saveLaugh(e, status) {

  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("Laugh");
  e.preventDefault();
}

function saveCry(e, status) {

  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("Cry");
  e.preventDefault();
}

function saveWow(e, status) {

  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("Wow");
  e.preventDefault();
}

function saveAngry(e, status) {

  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("Angry");
  e.preventDefault();
}

class Reactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
        likeCount: 0,
        loveCount: 0,
        laughCount: 0,
        cryCount: 0,
        wowCount: 0,
        angryCount: 0
    };
  }
  

  handleLikeClick = () => {
    this.setState({ likeCount: this.state.likeCount + 1 });
  };

  handleLoveClick = () => {
    this.setState({ loveCount: this.state.loveCount + 1 });
  };

  handleLaughClick = () => {
    this.setState({ laughCount: this.state.laughCount + 1 });
  };

  handleCryClick = () => {
    this.setState({ cryCount: this.state.cryCount + 1 });
  };

  handleWowClick = () => {
    this.setState({ wowCount: this.state.wowCount + 1 });
  };

  handleAngryClick = () => {
    this.setState({ angryCount: this.state.angryCount + 1 });
  };

  render() {
    //const { likeCount, loveCount, laughCount, cryCount , wowCount, angryCount} = this.state;

    return (
      <div className="reactions">
        <button className='reaccion' onClick={(e) => {
            e.preventDefault();
            saveLike(e, 1)

          }
          } >
            👍
        </button>
        <button className='reaccion' onClick={(e) => {
            e.preventDefault();
            saveLove(e, 1)

          }
          } >
            ❤️
        </button>
        <button className='reaccion' onClick={(e) => {
            e.preventDefault();
            saveLaugh(e, 1)

          }
          } >
            😂
        </button>
        <button className='reaccion' onClick={(e) => {
            e.preventDefault();
            saveCry(e, 1)

          }
          } >
            😢
        </button>
        <button className='reaccion' onClick={(e) => {
            e.preventDefault();
            saveWow(e, 1)

          }
          } >
            😮
        </button>
        <button className='reaccion' onClick={(e) => {
            e.preventDefault();
            saveAngry(e, 1)

          }
          } >
            😠
        </button>
      </div>
    );
  }
}

export default Reactions;
