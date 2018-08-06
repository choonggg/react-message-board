import React from 'react'
import { mount } from 'enzyme'

import MessageStore from '@/stores/MessageStore'
import MessageForm from '@/views/MessageView/MessageForm'

describe('<MessageForm />', () => {
  describe('renderButton() submitting is false', () => {
    it('renders "Post message"', () => {
      const wrapper = mount(<MessageForm messageStore={MessageStore} />)
      const submitHtml = wrapper.find('button#MessageForm-submit').text()

      expect(submitHtml).toEqual("Post message")
    })
  })

  describe('renderButton() submitting is true', () => {
    it('renders ProgressBar', () => {
      MessageStore.submitting = true
      const wrapper = mount(<MessageForm messageStore={MessageStore} />)
      const submitHtml = wrapper.find('button#MessageForm-submit').html()

      expect(submitHtml).toContain("ProgressBar")
    })
  })
})
