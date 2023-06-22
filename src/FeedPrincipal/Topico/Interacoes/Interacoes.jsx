import React from 'react'
import styles from '../../FeedPrincipal.module.css'

class Interacoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showShare: this.props.showButtonShare,
      numCurtidas: 0,
      numComentarios: 0,
      numShares: 0
    }
  }

  acrescentarNum(num) {
    this.setState(prevState => ({
      [num]: prevState[num] + 1
    }));
  }
  
  render() {
  let { showShare, numCurtidas, numComentarios, numShares } = this.state
    return (
      <div className={styles.interacoes}>
        <span onClick={() => this.acrescentarNum('numCurtidas')}>Curtidas <span>{numCurtidas}</span> </span>
        {!showShare ? <span onClick={() => this.acrescentarNum('numComentarios')}>Comentários <span>{numComentarios}</span> </span> : 
        <span>Comentários <span>{this.props.quantComent}</span> </span>}
        {showShare ? <span onClick={() => this.acrescentarNum('numShares')}>Share <span>{numShares}</span></span> : null}
      </div>
    )
  }
}

export default Interacoes