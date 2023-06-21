import './App.css'
import Header from './Header/Header'
import React from 'react'

/* https://www.reddit.com/r/farialimabets/comments/147ss6j/quais_ocupa%C3%A7%C3%B5es_mais_pagam_no_brasil_de_acordo/ 
*/

/* https://www.reddit.com/r/NovoNoReddit/comments/y40r0k/o_que_%C3%A9_karma_no_reddit_e_como_conseguir/ 
*/

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
  /* let {numCurtidas , numComentarios , numShares} = this.props */
  let { showShare, numCurtidas, numComentarios, numShares } = this.state
    return (
      <div className="interacoes">
        <span onClick={() => this.acrescentarNum('numCurtidas')}>Curtidas <span>{numCurtidas}</span> </span>
        {!showShare ? <span onClick={() => this.acrescentarNum('numComentarios')}>Comentários <span>{numComentarios}</span> </span> : 
        <span>Comentários <span>{this.props.quantComent}</span> </span>}
        {showShare ? <span onClick={() => this.acrescentarNum('numShares')}>Share <span>{numShares}</span></span> : null}
      </div>
    )
  }
}

function Topico (props) {
  let mostrarConteudoTopico = props.ehTopico
  let usuario = mostrarConteudoTopico ? 'usuarioTopico' : 'usuarioComentario'
  let tipoComponente = mostrarConteudoTopico ? 'topico' : 'comentario'
  let postado = mostrarConteudoTopico ? 'Postado por' : <img className='perfilComentario' src='#' alt='Foto'/>
  let texto = mostrarConteudoTopico ? props.textoTopico : props.textoComentario
  let h2 = mostrarConteudoTopico ? <h2>{props.nomeTopico}</h2> : null
  
  return (
    <div className={tipoComponente}>
      <p className={usuario}>{postado} <span>{props.nomeUsuario}</span> <span>{props.dataUsuario}</span></p>
      {h2}
      <p className='textoTopicoComentario'>{texto}</p>
      <div>
        <div>
          <Interacoes 
            showButtonShare={mostrarConteudoTopico}
            quantComent={props.quantComent}
          />
        </div>
      </div>
    </div>
  )
}

class FeedPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dadosComentarios: null
    };
  }

  componentDidMount() {
    fetch('/dados/comentarios.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          dadosComentarios: [...data]
        })
      );
  }

  render() {
    const { dadosComentarios } = this.state;

    const dataInicial = new Date('2021-12-01');
    const dataFinal = new Date('2023-12-31');

    function gerarData() {
      const diferencaMilissegundos = dataFinal - dataInicial;
      const milissegundosAleatorios = Math.floor(Math.random() * diferencaMilissegundos);
      const dataAleatoria = new Date(dataInicial.getTime() + milissegundosAleatorios);
      const dataAleatoriaString = dataAleatoria.toLocaleDateString();
      return dataAleatoriaString;
    }

    return (
      <main className='feedPrincipal'>
        <Topico
          ehTopico={true}
          nomeUsuario={"Lero"}
          dataUsuario={dataInicial.toLocaleDateString()}
          nomeTopico={"Rapadura é doce mas não é mole não ?"}
          textoTopico={'Qual a sua opinião sobre a doçura da rapadura? Você acha que ela é realmente doce ou acredita que existem outros doces mais açucarados e saborosos disponíveis no mercado atualmente? Comente sobre sua experiência pessoal com a rapadura e compartilhe se você considera que a rapadura é doce, mas não é mole mesmo. Explique sua perspectiva levando em conta aspectos de sabor, textura e tradição cultural.'}
          quantComent={dadosComentarios === null ? 0 : dadosComentarios.length}
        />
        {dadosComentarios === null ? (
          <p>Carregando...</p>
        ) : (
          dadosComentarios.map((item, index) => (
            <Topico
              key={index}
              ehTopico={false}
              nomeUsuario={"Lero"}
              dataUsuario={gerarData()}
              textoComentario={item.comentario}
            />
          ))
        )}
      </main>
    );
  }
}

export default function App() {
  return(
    <div className='corpoPagina'>
      <Header />
      <FeedPrincipal />
    </div>
  )
}
