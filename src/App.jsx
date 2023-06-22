import styles from './App.module.css'
import Header from './Header/Header'
import React from 'react'
import FeedPrincipal from './FeedPrincipal/FeedPrincipal'

const topicos1 = [
  'Inteligência Artificial avançada',
  'Energias renováveis sustentáveis',
  'Medicina personalizada genômica'
]

const topicos2 = [
  'Blockchain para transações seguras',
  'Realidade virtual imersiva',
  'Carros autônomos seguros'
]

const topicos3 = [
  'Internet das Coisas conectada',
  'Impressão 3D inovadora',
  'Robótica colaborativa eficiente'
]

function TopicoNotorioCard(props) {
  return (
    <div className={styles.topicoNotorioCard}>
      <h3>{props.nomeDestaque}</h3>
      <span>
        <span>{props.tipoDestaque}</span> <span>{props.numDestaque}</span>
      </span>
    </div>
  )
}

function TopicosNotorios(props) {
  let numeros = props.ehNumeros
  
  function numeroAleatorio() {
    var min = 1000;
    var max = 2000;
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
  }

  function dataAleatoria(){
    const dataInicial = new Date('2021-12-01');
    const dataFinal = new Date('2023-06-22');
    const diferencaMilissegundos = dataFinal - dataInicial;
    const milissegundosAleatorios = Math.floor(Math.random() * diferencaMilissegundos);
    const dataAleatoria = new Date(dataInicial.getTime() + milissegundosAleatorios);
    const dataAleatoriaString = dataAleatoria.toLocaleDateString();
    return dataAleatoriaString;
  }
  
  return (
    <div className={styles.topicosDiversos}>
      <h3>Mais {props.topicoDestaque}</h3>
      <div>
        {props.topicos.map((item, index) =>
          <TopicoNotorioCard
            nomeDestaque={item}
            tipoDestaque={props.tipoTopicoDestaque}
            numDestaque={numeros ? numeroAleatorio() : dataAleatoria()}
            key={index}
          />
        )}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className={styles.corpoPagina}>
      <Header />
      <div className={styles.distribuicaoSite}>
        <FeedPrincipal />
        <div className={styles.distribuicaoTopicos}>
          <TopicosNotorios
            topicoDestaque={"Curtidas"}
            tipoTopicoDestaque={'Curtidas'}
            topicos={topicos1} // Adicionei o array de tópicos
            ehNumeros={true}
          />
          <TopicosNotorios
            topicoDestaque={"Recentes"}
            tipoTopicoDestaque={'Data'}
            topicos={topicos2} // Adicionei o array de tópicos
            ehNumeros={false}
          />
          <TopicosNotorios
            topicoDestaque={"Respondidas"}
            tipoTopicoDestaque={'Respostas'}
            topicos={topicos3} // Adicionei o array de tópicos
            ehNumeros={true}
          />
        </div>
      </div>
    </div>
  )
}
