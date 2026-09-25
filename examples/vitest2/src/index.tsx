import 'react'
import { createRoot } from 'react-dom/client'
import { Tooltip } from '@mui/material'

export const App = () => (
  <Tooltip title="hello">
    <span>Hello World</span>
  </Tooltip>
)
