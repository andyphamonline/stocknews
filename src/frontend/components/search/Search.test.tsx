import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Search from './Search'

describe('Search tests', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('button is disabled when input is empty', () => {
    const btn = wrapper.find('button')
    expect(btn.prop('disabled')).toBeTruthy()
  })

  it('button is enabled when input has value', () => {
    const input = wrapper.find('input')
    const btn = wrapper.find('button')
    input.simulate('change', { target: { value: 'some string' } })
    expect(btn.prop('disabled')).toBeFalsy
  })
})
