import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'mobx-react'

import MessageStore from '@/stores/MessageStore'
import MessageView from './views/MessageView'
import Footer from '@/components/Footer'

const App = () => {
  return (
    <Provider messageStore={MessageStore}>
      <div className="App">
        <main className="cc0img9">
          <div className="cgmxdsh">
            <MessageView />
          </div>
        </main>

        <Footer />
      </div>
    </Provider>
  )
}

export default hot(module)(App)
