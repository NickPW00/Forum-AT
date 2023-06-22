import Interacoes from './Interacoes/Interacoes'
import styles from '../FeedPrincipal.module.css'

export default function Topico (props) {
  let mostrarConteudoTopico = props.ehTopico
  let usuario = mostrarConteudoTopico ? styles.usuarioTopico : styles.usuarioComentario
  let tipoComponente = mostrarConteudoTopico ? styles.topico : styles.comentario
  let postado = mostrarConteudoTopico ? 'Postado por' : <img className={styles.perfilComentario} src='#' alt='Foto'/>
  let texto = mostrarConteudoTopico ? props.textoTopico : props.textoComentario
  let h2 = mostrarConteudoTopico ? <h2>{props.nomeTopico}</h2> : null
  
  return (
    <div className={tipoComponente}>
      <p className={usuario}>{postado} <span>{props.nomeUsuario}</span> <span>{props.dataUsuario}</span></p>
      {h2}
      <p className={styles.textoTopicoComentario}>{texto}</p>
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