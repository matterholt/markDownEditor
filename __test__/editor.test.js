import React from 'react'
import { render,screen } from '@testing-library/react'

import Editor from '../pages/editor'

describe("Functionality of editor page", () => {
    test("Renders the Editor page", () => {
        render(<Editor currentMarkdownHandlers />);
        const header = getByText(/getting the Mark on/)
        expect(header).toBeInTheDocument;
    });
})