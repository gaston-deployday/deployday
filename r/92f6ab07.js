/* @ds-bundle: {"format":4,"namespace":"DeploydayDesignSystem_6a7bcf","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0bba1c975aef","components/core/Button.jsx":"8de48e3e5bff","components/core/Card.jsx":"a263851b2d9e","components/core/Input.jsx":"c78ccf144c4c","components/core/Switch.jsx":"283ef24e46b6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DeploydayDesignSystem_6a7bcf = window.DeploydayDesignSystem_6a7bcf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — compact status/label pill. Condensed uppercase type.
 */
function Badge({
  children,
  variant = "neutral",
  dot = false,
  style = {},
  ...rest
}) {
  const variants = {
    neutral: {
      background: "var(--ink-100)",
      color: "var(--ink-700)"
    },
    brand: {
      background: "var(--blue-50)",
      color: "var(--blue-700)"
    },
    solid: {
      background: "var(--accent)",
      color: "#fff"
    },
    dark: {
      background: "var(--ink-950)",
      color: "#fff"
    },
    success: {
      background: "rgba(22,163,107,0.12)",
      color: "var(--success)"
    },
    warning: {
      background: "rgba(226,160,8,0.14)",
      color: "#9a6c02"
    },
    danger: {
      background: "rgba(226,72,61,0.12)",
      color: "var(--danger)"
    }
  };
  const v = variants[variant] || variants.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-condensed)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: "var(--text-xs)",
      lineHeight: 1,
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)",
      ...v,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "currentColor",
      display: "inline-block"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Deployday Button — the rounded, confident primary action.
 * Variants: primary (cyan), secondary (ink outline), ghost, dark, link.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 16px",
      height: 36,
      fontSize: "var(--text-sm)",
      gap: 8
    },
    md: {
      padding: "0 22px",
      height: 46,
      fontSize: "var(--text-md)",
      gap: 9
    },
    lg: {
      padding: "0 30px",
      height: 56,
      fontSize: "var(--text-lg)",
      gap: 11
    }
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-brand)",
      border: "1.5px solid var(--accent)",
      boxShadow: "var(--shadow-brand)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1.5px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1.5px solid transparent"
    },
    dark: {
      background: "var(--ink-950)",
      color: "var(--text-inverse)",
      border: "1.5px solid var(--ink-950)"
    },
    link: {
      background: "transparent",
      color: "var(--text-brand)",
      border: "1.5px solid transparent",
      padding: 0,
      height: "auto",
      boxShadow: "none"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      lineHeight: 1,
      height: v.height ?? s.height,
      padding: v.padding ?? s.padding,
      fontSize: s.fontSize,
      width: fullWidth ? "100%" : "auto",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled && variant !== "link") e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--accent-hover)";
      if (variant === "secondary") e.currentTarget.style.borderColor = "var(--accent)";
      if (variant === "ghost") e.currentTarget.style.background = "var(--ink-50)";
      if (variant === "dark") e.currentTarget.style.background = "var(--ink-800)";
      if (variant === "link") e.currentTarget.style.color = "var(--accent-hover)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      Object.assign(e.currentTarget.style, {
        background: v.background,
        borderColor: (v.border || "").split(" ").pop(),
        color: v.color
      });
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base surface. White, soft shadow, generous radius.
 * variant: "default" | "outline" | "dark" | "brand"
 */
function Card({
  children,
  variant = "default",
  interactive = false,
  padding = "var(--space-6)",
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-md)",
      color: "var(--text-body)"
    },
    outline: {
      background: "var(--surface-card)",
      border: "1.5px solid var(--border-default)",
      boxShadow: "none",
      color: "var(--text-body)"
    },
    dark: {
      background: "var(--ink-950)",
      border: "1px solid var(--border-inverse)",
      boxShadow: "var(--shadow-lg)",
      color: "var(--ink-200)"
    },
    brand: {
      background: "var(--accent)",
      border: "1px solid var(--accent)",
      boxShadow: "var(--shadow-brand)",
      color: "#fff"
    }
  };
  const v = variants[variant] || variants.default;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      transform: interactive && hover ? "translateY(-3px)" : "translateY(0)",
      boxShadow: interactive && hover ? "var(--shadow-lg)" : v.boxShadow,
      cursor: interactive ? "pointer" : "default",
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — clean single-line field. Optional label + leading icon.
 */
function Input({
  label,
  hint,
  iconLeft = null,
  error = false,
  type = "text",
  style = {},
  id,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--danger)" : focus ? "var(--accent)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-condensed)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: "var(--text-xs)",
      color: "var(--ink-600)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 48,
      padding: "0 16px",
      background: "var(--surface-raised)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-400)",
      display: "flex"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      color: "var(--text-strong)",
      minWidth: 0
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: error ? "var(--danger)" : "var(--ink-400)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — toggle. Cyan when on.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: toggle,
    role: "switch",
    "aria-checked": checked,
    style: {
      position: "relative",
      width: 46,
      height: 26,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--accent)" : "var(--ink-200)",
      transition: "background var(--dur-base) var(--ease-standard)",
      flex: "none"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
