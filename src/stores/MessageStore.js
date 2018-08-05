import { autorun, observable, computed } from 'mobx'

class MessageStore {
  @observable loading = false
  @observable fetching = false
  @observable messages = []

  @computed get messageCount() {
    return this.messages.length
  }
}

const store = window.store = new MessageStore

export default store

autorun(() => {
  console.log(store.messages)
})
