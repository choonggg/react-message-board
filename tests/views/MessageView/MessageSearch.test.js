import React from 'react'
import { mount } from 'enzyme'

import messageMock from '@t/mocks/messages'

import MessageStore from '@/stores/MessageStore'
import MessageSearch from '@/views/MessageView/MessageSearch'

jest.mock('@/http', () => {
  get: Promise.resolve({
    data: require('@t/mocks/messages')
  })
})

describe('<MessageSearch />', () => {
  describe('selects an option', () => {
    it('changes color option', () => {
      const wrapper = mount(<MessageSearch messageStore={MessageStore} />)
      wrapper.find('select').simulate('change', {
        target: { value: 'color!', name: 'color' }
      })

      expect(MessageStore.filters.color).toEqual('color!')
    })
  })

  describe('enters search in q input', () => {
    it('changes color option', done => {
      const wrapper = mount(<MessageSearch messageStore={MessageStore} />)

      wrapper.find('input').simulate('change', {
        target: { value: 'query!', name: 'q' }
      })

      // Input is Debounced
      setTimeout(() => {
        expect(MessageStore.filters.q).toEqual('query!')
        done()
      }, 350)

    })
  })
})
