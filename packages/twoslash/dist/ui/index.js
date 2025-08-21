"use client";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "../chunk-ORMEWXMH.js";

// src/ui/popup.tsx
import {
  createContext,
  forwardRef,
  useContext,
  useMemo,
  useRef,
  useState
} from "react";
import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger
} from "@radix-ui/react-popover";

// src/ui/cn.ts
import { twMerge } from "tailwind-merge";

// src/ui/popup.tsx
import { jsx } from "react/jsx-runtime";
var PopupContext = createContext(void 0);
function Popup({
  delay = 300,
  children
}) {
  const [open, setOpen] = useState(false);
  const openTimeoutRef = useRef(void 0);
  const closeTimeoutRef = useRef(void 0);
  return /* @__PURE__ */ jsx(Popover, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsx(
    PopupContext.Provider,
    {
      value: useMemo(
        () => ({
          open,
          setOpen,
          handleOpen(e) {
            if (e.pointerType === "touch") return;
            if (closeTimeoutRef.current)
              clearTimeout(closeTimeoutRef.current);
            openTimeoutRef.current = window.setTimeout(() => {
              setOpen(true);
            }, delay);
          },
          handleClose(e) {
            if (e.pointerType === "touch") return;
            if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
            closeTimeoutRef.current = window.setTimeout(() => {
              setOpen(false);
            }, delay);
          }
        }),
        [delay, open]
      ),
      children
    }
  ) });
}
var PopupTrigger = forwardRef((_a, ref) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error("Missing Popup Context");
  return /* @__PURE__ */ jsx(
    PopoverTrigger,
    __spreadProps(__spreadValues({
      ref,
      onPointerEnter: ctx.handleOpen,
      onPointerLeave: ctx.handleClose,
      asChild: true
    }, props), {
      children: /* @__PURE__ */ jsx("span", { className: "twoslash-hover", children })
    })
  );
});
PopupTrigger.displayName = "PopupTrigger";
var PopupContent = forwardRef(
  (_a, ref) => {
    var _b = _a, { className, side = "bottom", align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "side", "align", "sideOffset"]);
    const ctx = useContext(PopupContext);
    if (!ctx) throw new Error("Missing Popup Context");
    return /* @__PURE__ */ jsx(PopoverPortal, { children: /* @__PURE__ */ jsx(
      PopoverContent,
      __spreadValues({
        ref,
        side,
        align,
        sideOffset,
        className: twMerge("fd-twoslash-popover", className),
        onPointerEnter: ctx.handleOpen,
        onPointerLeave: ctx.handleClose,
        onOpenAutoFocus: (e) => {
          e.preventDefault();
        },
        onCloseAutoFocus: (e) => {
          e.preventDefault();
        }
      }, props)
    ) });
  }
);
PopupContent.displayName = "PopupContent";
export {
  Popup,
  PopupContent,
  PopupTrigger
};
