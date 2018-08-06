import MessageStore from '@/stores/MessageStore'

jest.mock('@/http', () => {
  get: Promise.resolve({
    data: require('@t/mocks/messages')
  })
})

describe('MessageStore', () => {
  describe('getter messageCount', () => {
    it('returns message count', () => {
      MessageStore.messages = []
      MessageStore.messages = [
        { content: "First message", color: "" },
        { content: "Second", color: "" }
      ]
      expect(MessageStore.messageCount).toEqual(2)
    })
  })

  describe('addMessage()', () => {
    it('adds message to store', () => {
      MessageStore.messages = []
      MessageStore.addMessage({ content: "First Message" })

      expect(MessageStore.messageCount).toEqual(1)
    })
  })

  describe('setFilter()', () => {
    it('sets filter for  search', () => {
      const newFilters = { q: "Search", color: '#green' }
      MessageStore.setFilter(newFilters)

      expect(MessageStore.filters.q).toEqual("Search")
      expect(MessageStore.filters.color).toEqual("#green")
    })
  })

  describe('async fetchMesssages()', () => {
    it('fetch and sets messages on store', () => {
      MessageStore.messages = []

      // Async action requires to be resolved
      Promise.resolve(() => {
        MessageStore.fetchMessages()

        expect(MessageStore.messages.length).toBeGreaterThan(1)
      })
    })
  })
})
