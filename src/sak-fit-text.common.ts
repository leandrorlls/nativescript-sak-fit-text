import { Label } from 'tns-core-modules/ui/label';
import { Property } from "tns-core-modules/ui/core/view/view";

export const maxTextSizeProperty = new Property<Common, string>({ name: "maxTextSize", affectsLayout: true });
export class Common extends Label { }

maxTextSizeProperty.register(Common);