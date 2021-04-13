import { test, expect } from "@jest/globals";
import * as button from "../src/button";

test('test markup generated', ()=>{
    let someelement = document.createElement('div');
    
    new button.MyButton().create(someelement, {
        text: 'hello',        
    });    
    expect(!!someelement.getElementsByClassName('my-button')).toBe(true);    
});

test('test event is fired', ()=>{
    let someelement = document.createElement('div');
    
    let called = false;
    
    new button.MyButton().create(someelement, {
        text: 'hello',        
        onClick: () => called = true
    });        
    
    let event = new Event('click');
    someelement.dispatchEvent(event);

    expect(called).toBe(true);
});
