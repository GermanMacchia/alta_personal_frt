import React from 'react'
import { render, screen } from '@testing-library/react'
import { AreaList } from '../src/components/AreaList/AreaList'

describe('AreaList', () => {
  test('should have a table tag', () => {
    render(<AreaList areas={[]} handleOpen={() => {}} />)
    expect(screen.getByText('ÁREA')).toBeInTheDocument()
  })
})
