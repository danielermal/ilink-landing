import React from 'react';
import { Header } from '../header/header.js'
import { Title } from '../title/title.js'
import { Feedback } from '../feedback/feedback'
import { Footer } from '../footer/footer'

function App() {
  React.useEffect (() => {
    document.title = 'iLink landing'
  })
  return (
    <>
      <Header />
      <main>
        <Title />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}

export default App;
