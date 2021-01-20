import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderHook } from "@testing-library/react-hooks";

import { CurrentDocProvider } from "../context/DocPage-context";

import EditorActions from "../components/editor/EditorActions";

// add context

describe("Functionality of editor actions", () => {

  test("Renders the Editor page", () => {

    const { container } = render(<EditorActions currentMarkdownHandlers={currentMarkdownHandlers}/>);
    console.log(container)

  });

})