import React from 'react'
import { mount } from 'enzyme'

import messageMock from '@t/mocks/messages'

import MessageList from '@/views/MessageView/MessageLists'

describe('<MessageList />', () => {
  describe('render()', () => {
    it('returns list of MessageItem', () => {
      const messages = messageMock
      const wrapper = mount(<MessageList messages={messages} />)
      const MessageItemCount = wrapper.find("li").length

      expect(MessageItemCount).toEqual(2)

    })
  })
})
