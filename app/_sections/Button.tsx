"use client";

import React from "react";
import mapEnumClass from "@/_lib/mapEnumClass";

function cn(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  color: "primary" | "secondary" | "error";
  disabled?: boolean;
  loading?: boolean;
  size: "small" | "medium" | "large";
  label?: string;
  icon?: any;
  iconLeft?: any;
}

export const mColor = Object.freeze({
  primary: "button-primary",
  secondary: "button-secondary",
  error: "button-error",
});

export const mSize = Object.freeze({
  small: "button-small",
  medium: "button-medium",
  large: "button-large",
});

export default class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    color: "primary",
    disabled: false,
    loading: false,
    size: "medium",
  };

  render() {
    const {
      color,
      disabled,
      loading,
      size,
      label,
      icon,
      iconLeft,
      className,
      ...otherProps
    } = this.props;

    return (
      <button
        type="button"
        className={cn(
          "button",
          {
            "button-loading": loading,
            "button-icon": !label,
          },
          label && mapEnumClass(mColor, color),
          label && mapEnumClass(mSize, size),
          className
        )}
        disabled={loading || disabled}
        {...otherProps}
      >
        {iconLeft && iconLeft}
        {label && label}
        {icon && icon}
      </button>
    );
  }
}
