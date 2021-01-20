import React from 'react'

import {render}from '@testing-library/react'

import Index from '../pages/Index'


describe("landing page", () => {
  test("renders landing page", () => {
    const { getByText } = render(<Index />);

    const greeting = getByText(/Simple and Basic Markdown Converter/);

    expect(greeting).toBeInTheDocument;
  });
});
