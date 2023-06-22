import styles from '../../App.module.css'

export default function TopicoNotorioCard(props) {
  return (
    <div className={styles.topicoNotorioCard}>
      <h3>{props.nomeDestaque}</h3>
      <span>
        <span>{props.tipoDestaque}</span> <span>{props.numDestaque}</span>
      </span>
    </div>
  )
}