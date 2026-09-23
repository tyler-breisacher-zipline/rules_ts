import React from 'react'
import { App } from './index'
import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import '@testing-library/dom'

vi.mock('@mui/material', () => {
    const Tooltip = ({ children }) => <div data-testid='mock-tooltip'>{children}</div>
    return {
        Tooltip,
    }
})

describe('App', () => {
    it('basic test', async () => {
        render(<App />)
        let tooltip = await screen.findByTestId('mock-tooltip')
        expect(tooltip).toBeTruthy()
    })
})
