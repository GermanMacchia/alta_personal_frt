import * as React from 'react'
import { Typography, Popover } from '@mui/material'
import { useState, FC, ReactNode } from 'react'
import { Box, useMediaQuery } from '@mui/material'

interface Props {
  children: ReactNode
  info: string
  logout?: boolean
}

export const OnMousePopover: FC<Props> = ({ children, info, logout }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const desktop = useMediaQuery('(min-width:600px)')

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  if (!desktop) return <>{children}</>

  return (
    <div>
      <Box
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
        {children}
      </Box>
      <Popover
        id='mouse-over-popover'
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: logout ? 'bottom' : 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: logout ? 'top' : 'bottom',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus>
        <Typography sx={{ p: 1 }}>{info}</Typography>
      </Popover>
    </div>
  )
}
