export class MyButton {
    create(target, creationOptions) {
        target.classList.add('my-button');

        if(!!creationOptions.text) {
            let textContainer = document.createElement('div');
            textContainer.innerText = creationOptions.text;    
            target.appendChild(textContainer);
        }

        if(!!creationOptions.onClick) {
            target.addEventListener('click', creationOptions.onClick);
        }            
    }
}