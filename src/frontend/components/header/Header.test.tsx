import React, { ReactElement } from 'react'
import Header from './Header'
import { shallow, ShallowWrapper } from 'enzyme'
import { title } from '../../lib/index'
import logo from '../../logo.jpg'

describe('Header testing', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('render title correctly', () => {
    const header = wrapper.find('h1')
    expect(header.text()).toBe(title)
  })

  it ('render logo correctly', () => {
    const img = wrapper.find('.logo img')
    expect(img.prop('src')).toBe(logo)
  })
})