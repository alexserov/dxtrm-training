import { MyButton } from './button.js'

export class MaterialButton extends MyButton {
    create(target, creationOptions) {
        super.create(target, creationOptions);
        
        target.classList.add('material')

        if(!!creationOptions.color){            
            target.style.backgroundColor = creationOptions.color;
        }
    }
}