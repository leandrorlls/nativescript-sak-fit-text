import { Common, maxTextSizeProperty } from './sak-fit-text.common';

declare var me: any;

export class SakFitText extends Common {
    private _minHeight: number = 10;
    private _maxHeight: number = 1000;

    public createNativeView(): Object {
        const textField: android.widget.TextView = super.createNativeView() as android.widget.TextView;
        textField.setMaxLines(1);
        textField.setSingleLine();
        textField.setMinHeight(this._minHeight);
        textField.setMaxHeight(this._maxHeight);
        textField.setTextSize(200);
        textField.setTextAlignment(android.widget.TextView.TEXT_ALIGNMENT_CENTER);
        me.grantland.widget.AutofitHelper.create(textField);

        return textField;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }

    [maxTextSizeProperty.setNative](value: string) {
        this.nativeView.setTextSize(+value);
        me.grantland.widget.AutofitHelper.create(this.nativeView);
    }
}