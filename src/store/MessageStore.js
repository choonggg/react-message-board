import { autorun, observable } from 'mobx'

class MessageStore {
  @observable messages = []
}

const store = windows.store = new MessageStore

export default store

autorun(() => {
  console.log(store.messages)
})
