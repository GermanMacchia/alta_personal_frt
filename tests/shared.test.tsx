import React from 'react'
import { render, screen } from '@testing-library/react'
import { AlertSnackBar } from '../src/shared/AlertSnackBar'
import { WithFormProvider } from '../src/shared/WithFormProvider'
import { AreaInput } from '../src/components/AreaForm/AreaInput'
import { ConfirmDelete } from '../src/shared'

describe('AlertSnackBar', () => {
  test('should have a text defined', () => {
    render(
      <AlertSnackBar isOpen={true} severity={'success'} message={'alert'} />
    )
    expect(screen.findByText('alert')).toBeDefined()
  })
})

describe('WithFormProvider', () => {
  test('should', () => {
    render(
      <WithFormProvider children={<AreaInput />} handleSubmit={() => {}} />
    )
    expect(screen.findByRole('form')).toBeDefined()
  })
})

describe('ConfirmDelete', () => {
  test('should', () => {
    render(
      <ConfirmDelete
        handleOpen={() => {}}
        isOpen={true}
        deleteHandler={{}}
        data={{}}
      />
    )
    expect(screen.findByText('Seguro deseas borrar')).toBeDefined()
  })
})
