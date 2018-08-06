import React from 'react'
import { shallow } from 'enzyme'

import Badge from '../../src/components/Badge'

describe('<Badge />', () => {
  describe('render()', () => {
    it('renders component with count', () => {
      const wrapper = shallow(<Badge count={5} />)
      const renderedCount = wrapper.find('span.Badge__counter').text()

      expect(renderedCount).toEqual("5")
      expect(wrapper.find('span').length).toEqual(3)
    })
  })
})
