
import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderHook } from "@testing-library/react-hooks";

import {CurrentDocProvider} from "../context/DocPage-context"
import AdjustFontSize from "../components/docFeatures/AdjustFontSize";


test("Change font size of current Document", () => {
    const { docState }=renderHooK(()=> );
    const Wrapper = ({ children }) => (
        <CurrentDocProvider >{children}</CurrentDocProvider>)

    render(<AdjustFontSize />, { wrapper: Wrapper });
     
    const decreaseButton = screen.getByText(/-/);
    fireEvent.click(decreaseButton);
    expect(docState.fontSize).toBe(9);


    const increaseButton = screen.getByText(/\+/);
            
    

        screen.debug()
    });