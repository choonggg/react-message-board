import React from 'react'
import { hot } from 'react-hot-loader'

import Footer from '@/components/Footer'

import MessageView from './views/MessageView'

const App = () => {
  return (
    <div class="App">
      <main class="cc0img9">
        <MessageView />
      </main>

      <Footer />
    </div>
  )
}

export default hot(module)(App)
