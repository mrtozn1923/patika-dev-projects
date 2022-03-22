import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import EmojiResults from './EmojiResults';

import App from './App';


describe("emoji results all test",()=>{
    let emojijoy,input;
    beforeEach(()=>{
        render(<App />)
        input = screen.getByPlaceholderText(/search emoji/i)
        emojijoy = screen.getByText(/Joy/i)
    })
    test("it should component render after filter text",()=>{
        const emojiText = "Grinning"
        userEvent.type(input, emojiText)
        expect(emojijoy).not.toBeInTheDocument()
    });
    test("it should copy when emoji click",()=>{
        let clipboardText="";       
        userEvent.click(emojijoy)
        clipboardText=window.copyEmoji;
        expect(clipboardText).toEqual(emojijoy.parentElement.dataset.clipboardText)
    });
});


