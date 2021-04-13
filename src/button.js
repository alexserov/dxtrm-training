export class MyButton {  
    target;
    currentOptions;
    optionChangedCallbacks;
    constructor(target, creationOptions) {
        target.classList.add('my-button');
        
        this.target = target;
        this.initDefaultOptions();
        this.option(creationOptions);
    }

    initDefaultOptions(){
        this.currentOptions = { }
        this.registerOption('text', this.onTextChanged);
        this.registerOption('onClick', this.onOnClickChanged);
    }

    onTextChanged(that, oldValue, newValue) {        
        if(!that.target.firstChild){
            let textContainer = document.createElement('div');
            that.target.appendChild(textContainer);
        }          
        that.target.firstChild.innerText = newValue;      
    }
    onOnClickChanged(that, oldValue, newValue) {
        if(oldValue)
            that.target.removeEventListener('click', oldValue);
        if(newValue)
            that.target.addEventListener('click', newValue);
    }

    registerOption(option, callback) {
        this.currentOptions[option] ={
            value: null,
            changedCallback: callback
        };
    }    

    option(options){
        for(let fieldName of Object.getOwnPropertyNames(options)){
            if(!this.currentOptions.hasOwnProperty(fieldName)) {
                throw `invalid option: ${fieldName}`;
            }
            var oldValueEntry = this.currentOptions[fieldName];
            var oldValue = oldValueEntry.value;
            var newValue = options[fieldName]
            if(oldValue!=newValue){
                oldValueEntry.value = newValue;
                oldValueEntry.changedCallback(this, oldValue, newValue);
            }
        }        
    }
}
