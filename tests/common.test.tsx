import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { ShinyNavbar, NavbarItem } from '../src/components/App'

describe('Common render', () => {
  it('renders without crashing', () => {
    const config: NavbarItem[] = [
      {
        label: 'string',
      },
      {
        label: 'string',
      },
      {
        label: 'string',
      },
      {
        label: 'string',
      },
      {
        label: 'string',
      },
    ]
    render(<ShinyNavbar items={config} />)
  })
})
