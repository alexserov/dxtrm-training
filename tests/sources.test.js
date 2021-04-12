import { test, expect } from "@jest/globals";
import { createButton } from "../src/button";

test('test markup generated', ()=>{
    let someelement = document.createElement('div');

    createButton(someelement, "hello", ()=>{});
    expect(!!someelement.getElementsByClassName('my-button')).toBe(true);    
});

test('test event is fired', ()=>{
    let someelement = document.createElement('div');
    
    let called = false;
    createButton(someelement, "hello", () => called = true);
    
    let event = new Event('click');
    someelement.dispatchEvent(event);

    expect(called).toBe(true);
});