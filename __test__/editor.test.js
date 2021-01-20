import React from 'react'
import { render,screen } from '@testing-library/react'

import Editor from '../pages/editor'

describe("Functionality of editor page", () => {
    test("Renders the Editor page", () => {
        render(<Editor currentMarkdownHandlers />);
        const header = screen.getByText(/getting/i)
        expect(header).toBeInTheDocument;
    });
})