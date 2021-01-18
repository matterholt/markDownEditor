import React from 'react'

import {render}from '@testing-library/react'

import Index from '../pages/Index'
import '@testing-library/jest-dom/extend-expect'

test('renders landing page', () => {
    const { getByText } = render(<Index />)
    const linkedElement = getByText(/Simple and Basic Markdown Converter/)

    expect(linkedElement).toBeInTheDocument
})