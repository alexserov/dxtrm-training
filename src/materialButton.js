import { MyButton } from './button.js'

export class MaterialButton extends MyButton {
    initDefaultOptions() {
        super.initDefaultOptions();

        this.registerOption('color', this.onColorChanged);
    }

    onColorChanged(that, oldValue, newValue) {
        that.target.style.backgroundColor = newValue;
    }

}
