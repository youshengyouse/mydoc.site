import * as react from 'react';
import { ReactNode } from 'react';
import * as _radix_ui_react_popover from '@radix-ui/react-popover';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare function Popup({ delay, children, }: {
    delay?: number;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare const PopupTrigger: react.ForwardRefExoticComponent<Omit<_radix_ui_react_popover.PopoverTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const PopupContent: react.ForwardRefExoticComponent<Omit<_radix_ui_react_popover.PopoverContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

export { Popup, PopupContent, PopupTrigger };
