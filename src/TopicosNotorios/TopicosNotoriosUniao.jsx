import TopicosNotorios from "./TopicosNotorios"
import styles from '../App.module.css'

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


export default function TopicosNotoriosUniao() {
  return(
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
  )
}