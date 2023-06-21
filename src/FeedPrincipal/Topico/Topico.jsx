import '../FeedPrincipal.css'
import Interacoes from './Interacoes/Interacoes'

export default function Topico (props) {
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