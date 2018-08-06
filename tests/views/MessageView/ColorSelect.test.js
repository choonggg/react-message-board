import React from 'react'
import { shallow } from 'enzyme'

import ColorSelect from '@/views/MessageView/ColorSelect'

describe('<ColorSelect />', () => {
  describe('handleCHange()', () => {
    it('returns change event', () => {
      const onChangeMock = jest.fn()

      const wrapper = shallow(<ColorSelect name="color" onChange={ onChangeMock } />)
      wrapper.find("select").simulate('change')

      expect(onChangeMock).toHaveBeenCalled()
    })
  })
})
