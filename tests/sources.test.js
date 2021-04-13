import { test, expect } from "@jest/globals";
import { MyButton } from "../src/MyButton/sources";

test('test markup generated', ()=>{
    let someelement = document.createElement('div');
    
    let button = new MyButton(someelement, {
        text: 'hello',        
    });    
    expect(!!someelement.getElementsByClassName('my-button')).toBe(true);    
});

test('test event is fired', ()=>{
    let someelement = document.createElement('div');
    
    let called = 0;
    
    let button = new MyButton(someelement, {
        text: 'hello',        
        onClick: () => called++
    });        
    
    let event = new Event('click');
    someelement.dispatchEvent(event);

    expect(called).toBe(1);

    let called2 = 0;
    button.option({
        onClick: () => called2++
    });

    someelement.dispatchEvent(event);

    expect(called).toBe(1);
    expect(called2).toBe(1);
});
