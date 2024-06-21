export enum ButtonKey{
    BUTTON_ONE='Button 1',
    BUTTON_TWO='Button 2',
    BUTTON_THREE='Button 3',
}
export function getButtons(keys:ButtonKey[]):string[]{
    return keys.map(key=>key)
}
