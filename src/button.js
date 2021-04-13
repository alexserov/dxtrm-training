export class MyButton {    
    create(target, creationOptions) {
        target.classList.add('my-button');
        
        this.target = target;
        this.option(creationOptions);
    }

    option(creationOptions){
        if(!!creationOptions.text) {
            let textContainer = document.createElement('div');
            textContainer.innerText = creationOptions.text;    
            this.target.appendChild(textContainer);
        }

        if(!!creationOptions.onClick) {
            this.target.addEventListener('click', creationOptions.onClick);
        }     
    }
}
