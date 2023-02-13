import React from 'react'
import { render, screen } from '@testing-library/react'
import { CardEditArea } from '../src/components/CardEditArea/CardEditArea'
import { WithFormProvider } from '../src/shared/WithFormProvider'

describe('CardEditArea', () => {
  test('should have a table tag', () => {
    render(
      <WithFormProvider
        children={
          <CardEditArea
            area={{
              nombre: 'administración',
              _id: '63dc86b7adc30124233d7e09',
            }}
            isLoading={false}
          />
        }
        handleSubmit={() => {}}
      />
    )
    expect(screen.getByText('EDITAR')).toBeInTheDocument()
  })
})
