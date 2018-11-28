import { Common, maxTextSizeProperty } from './sak-fit-text.common';

export class SakFitText extends Common {
    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }

    [maxTextSizeProperty.setNative](value: string) {
        this.nativeView.font = this.nativeView.font.fontWithSize(+value);
        this.nativeView.adjustsFontSizeToFitWidth = true;
        this.nativeView.textAlignment = NSTextAlignment.Center;
    }
}