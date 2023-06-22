import React from 'react';
import Topico from './Topico/Topico';
import styles from './FeedPrincipal.module.css'

class FormComentario extends React.Component {
  pegarInformacoes = (event) => {
    event.preventDefault();
    const opcaoTexto = event.target.select.value;
    const textoComentario = event.target.review.value;
    this.props.onSubmit(opcaoTexto, textoComentario);
    event.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.pegarInformacoes}>
        <select name="select" id="select" required>
          <option value="">Selecione um Perfil</option>
          <option value="Usuario 1">Usuario 1</option>
          <option value="Usuario 2">Usuario 2</option>
        </select>
        <textarea className={styles.review} name="review" rows="4" cols="50" />
        <input type="submit" />
      </form>
    );
  }
}

class FeedPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dadosComentarios: null,
    };
  }

  componentDidMount() {
    fetch('/dados/comentarios.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          dadosComentarios: [...data],
        })
      );
  }

  gerarData() {
    const dataInicial = new Date('2021-12-01');
    const dataFinal = new Date('2023-06-22');
    const diferencaMilissegundos = dataFinal - dataInicial;
    const milissegundosAleatorios = Math.floor(Math.random() * diferencaMilissegundos);
    const dataAleatoria = new Date(dataInicial.getTime() + milissegundosAleatorios);
    const dataAleatoriaString = dataAleatoria.toLocaleDateString();
    return dataAleatoriaString;
  }
  
  state = {
    dadosComentarios: null,
    novoComentario: null,
  };

  handleSubmit = (opcaoTexto, textoComentario) => {
    const { dadosComentarios } = this.state;
    const novoComentario = {
      nome: opcaoTexto,
      comentario: textoComentario,
    };
    this.setState({
      dadosComentarios: [novoComentario, ...dadosComentarios],
      novoComentario: null,
    });
  };

  render() {
    const { dadosComentarios, novoComentario } = this.state;

    return (
      <main className={styles.feedPrincipal}>
        <Topico
          ehTopico
          nomeUsuario="Lero"
          dataUsuario={this.gerarData()}
          nomeTopico="Rapadura é doce mas não é mole não?"
          subTopico='Me ajudem neste penamento:'
          textoTopico="Qual a sua opinião sobre a doçura da rapadura? Você acha que ela é realmente doce ou acredita que existem outros doces mais açucarados e saborosos disponíveis no mercado atualmente? Comente sobre sua experiência pessoal com a rapadura e compartilhe se você considera que a rapadura é doce, mas não é mole mesmo. Explique sua perspectiva levando em conta aspectos de sabor, textura e tradição cultural."
          quantComent={dadosComentarios === null ? 0 : dadosComentarios.length}
        />
        <FormComentario onSubmit={this.handleSubmit} />
        {novoComentario && (
          <Topico
            ehTopico={false}
            nomeUsuario={novoComentario.nome}
            dataUsuario={'2023-06-22'}
            textoComentario={novoComentario.comentario}
          />
        )}
        {dadosComentarios === null ? (
          <p>Carregando...</p>
        ) : (
          dadosComentarios.map((item, index) => (
            <Topico
              key={index}
              ehTopico={false}
              fotoPerfil={item.imagem}
              nomeUsuario={item.nome}
              dataUsuario={this.gerarData()}
              textoComentario={item.comentario}
            />
          ))
        )}
      </main>
    );
  }
}

export default FeedPrincipal;
