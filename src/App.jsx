import styles from './App.module.css'
import Header from './Header/Header'
import React from 'react'
import FeedPrincipal from './FeedPrincipal/FeedPrincipal'
import TopicosNotoriosUniao from './TopicosNotorios/TopicosNotoriosUniao'

export default function App() {
  return (
    <div className={styles.corpoPagina}>
      <Header />
      <div className={styles.distribuicaoSite}>
        <FeedPrincipal />
        <TopicosNotoriosUniao />
      </div>
    </div>
  )
}
