import { autorun, observable, computed, action, runInAction } from 'mobx'
import { getMessages, postMessage } from '@/api/messageApi'

class MessageStore {
  @observable loading = false
  @observable fetching = false
  @observable searching = false
  @observable submitting = false
  @observable messages = []
  @observable filters = {
    '_sort': 'id',
    '_order': 'desc',
    'q': '',
    'color': ''
  }

  @computed get messageCount() {
    return this.messages.length
  }

  @action
  addMessage(message) {
    this.messages.unshift(message)
  }

  @action
  setFilter(filters) {
    this.filters = filters
  }

  @action
  async search(newFilters, filterType) {
    this.setFilter( Object.assign({}, this.filters, newFilters) )
    this.query(filterType, true)
    await this.fetchMessages()
    this.query(filterType, false)
  }

  @action
  query(filterType, set) {
    filterType == 'q' && (this.searching = set)
  }

  @action
  async createMessage(message) {
    this.loading = true
    this.submitting = true
    try {
      const response = await postMessage(message)

      runInAction(() => {
        this.loading = false
        this.submitting = false
        this.addMessage(response.data)
      })
    } catch(error) {
      runInAction(() => {
        this.loading = false
        this.submitting = false
      })
    }
  }

  @action
  async fetchMessages() {
    this.fetching = true
    this.loading = true

    try {
      const response = await getMessages(this.filters)

      runInAction(() => {
        this.loading = false
        this.fetching = false
        this.messages = response.data
      })
    } catch(error) {
      runInAction(() => {
        this.loading = false
        this.fetching = false
        this.messages = []
      })
    }
  }
}

const store = new MessageStore

export default store
