import { FC, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import BadgeIcon from '@mui/icons-material/Badge'
import DeleteIcon from '@mui/icons-material/Delete'
import { WithModal } from './WithModal'
import { useAreaForm } from '../hooks'
import { ConfirmDelete } from './ConfirmDelete'
import { AlertSnackBar } from './AlertSnackBar'
import { useEmpleadoList } from '../hooks'
import { CardInfo } from '../components/CardInfo'
import { CardEditForm } from '../components/CardEditEmpleado'
import { CardEditAreaForm } from '../components/CardEditArea'
import { Box } from '@mui/material'
import { OnMousePopover } from './OnMousePopover'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: { xs: '130px', md: '200px' },
    options: {
      margin: { xs: 0, md: '0.4rem' },
      '&:hover': {
        color: '#0e6983',
      },
    },

    '&.MuiSvgIcon-fontSizeMedium': {
      fontSize: { xs: '20px', md: '21px' },
    },
  },
}

interface Props {
  data: any
  isUser?: boolean
}

/*MENSAJES EXITO*/
const areaDeleteSuccessMsg = 'Area eliminada'
const empleadoDeleteSuccessMsg = 'Empleado borrado'

export const OptionsButtons: FC<Props> = ({ isUser = false, data }) => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isEditAreaOpen, setIsEditAreaOpen] = useState(false)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isConfirmDeleteAreaOpen, setIsConfirmDeleteAreaOpen] = useState(false)
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false)
  const { areaDelete, areas } = useAreaForm()
  const { empleadoDelete } = useEmpleadoList()

  return (
    <>
      {/*ALERTAS*/}
      {empleadoDelete.isError && (
        <AlertSnackBar
          isOpen={true}
          severity='error'
          message={(empleadoDelete.error as any).response.data}
        />
      )}
      {empleadoDelete.isSuccess && (
        <AlertSnackBar
          isOpen={true}
          severity='success'
          message={empleadoDeleteSuccessMsg}
        />
      )}

      {areaDelete.isError && (
        <AlertSnackBar
          isOpen={true}
          severity='error'
          message={(areaDelete.error as any).response.data}
        />
      )}
      {areaDelete.isSuccess && (
        <AlertSnackBar
          isOpen={true}
          severity='success'
          message={areaDeleteSuccessMsg}
        />
      )}
      {/*MODALES*/}
      {
        <WithModal
          open={isEditAreaOpen}
          children={
            <CardEditAreaForm
              area={data}
              handleClose={() => setIsEditAreaOpen(!isEditAreaOpen)}
            />
          }
        />
      }
      {
        <WithModal
          open={isInfoOpen}
          children={
            <CardInfo
              empleado={data}
              areas={areas.data}
              handleClose={() => setIsInfoOpen(!isInfoOpen)}
            />
          }
        />
      }
      {
        <WithModal
          open={isEditOpen}
          children={
            <CardEditForm
              empleado={data}
              handleClose={() => setIsEditOpen(!isEditOpen)}
            />
          }
        />
      }
      {/*CONFIRMACIONES DE ELIMINACION*/}
      {
        <ConfirmDelete
          handleOpen={() =>
            setIsConfirmDeleteAreaOpen(!isConfirmDeleteAreaOpen)
          }
          isOpen={isConfirmDeleteAreaOpen}
          deleteHandler={areaDelete}
          data={data}
        />
      }
      {
        <ConfirmDelete
          handleOpen={() => setIsConfirmDeleteOpen(!isConfirmDeleteOpen)}
          isOpen={isConfirmDeleteOpen}
          deleteHandler={empleadoDelete}
          data={data}
        />
      }
      {/*ACCIONES*/}
      <Box sx={styles.container}>
        {isUser && (
          <OnMousePopover
            info='Info'
            children={
              <IconButton
                aria-label='file'
                onClick={() => setIsInfoOpen(!isInfoOpen)}>
                <BadgeIcon sx={styles.container.options} />
              </IconButton>
            }
          />
        )}
        <OnMousePopover
          info='Edit'
          children={
            <IconButton
              aria-label='edit'
              onClick={
                isUser
                  ? () => setIsEditOpen(!isEditOpen)
                  : () => setIsEditAreaOpen(!isEditAreaOpen)
              }>
              <BorderColorIcon sx={styles.container.options} />
            </IconButton>
          }
        />
        <OnMousePopover
          info='Delete'
          children={
            <IconButton
              aria-label='remove'
              onClick={
                isUser
                  ? () => setIsConfirmDeleteOpen(!isConfirmDeleteOpen)
                  : () => setIsConfirmDeleteAreaOpen(!isConfirmDeleteAreaOpen)
              }>
              {isUser ? (
                <PersonRemoveIcon sx={styles.container.options} />
              ) : (
                <DeleteIcon sx={styles.container.options} />
              )}
            </IconButton>
          }
        />
      </Box>
    </>
  )
}
