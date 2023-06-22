import TopicoNotorioCard from './TopicoNotorioCard/TopicoNotorioCard'
import styles from '../App.module.css'


export default function TopicosNotorios(props) {
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