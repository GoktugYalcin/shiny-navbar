import React from 'react';
export interface NavbarItem {
    customClass?: string;
    label: string;
    onPerform?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: NavbarItem, itemIndex: number): void;
    url?: string;
}
export interface propsItem {
    items: NavbarItem[];
}
export declare const ShinyNavbar: React.FC<propsItem>;
