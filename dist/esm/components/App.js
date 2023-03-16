import React, { useState } from "react";
import { motion } from "framer-motion";
export var ShinyNavbar = function (props) {
    var items = props.items;
    var _a = useState(0), selected = _a[0], setSelected = _a[1];
    var handlerOnClick = function (event, index, item) {
        setSelected(index);
        if (item.url) {
            window.open(item.url, "_blank");
        }
        if (item.onPerform) {
            item.onPerform(event, item, index);
        }
    };
    return (React.createElement("div", { className: "shiny-navbar__container" }, Boolean(items.length) && (React.createElement("div", { className: "shiny-navbar__box" },
        React.createElement("div", { className: "shiny-navbar__top" }),
        items.map(function (item, index) {
            var isSelected = selected === index;
            var selectedBorder = "shiny-borders_".concat(index === 0
                ? "left"
                : index + 1 === items.length
                    ? "right"
                    : "mid");
            return (React.createElement("button", { key: index, onClick: function (e) { return handlerOnClick(e, index, item); }, className: "shiny-navbar__element".concat(isSelected ? " shiny-selected" : "").concat(item.customClass ? item.customClass : "") },
                isSelected && (React.createElement(React.Fragment, null,
                    React.createElement(motion.div, { layoutId: "bg", className: "shiny-navbar__element__selected ".concat(selectedBorder), transition: {
                            duration: 0.3,
                            type: "spring"
                        } }),
                    React.createElement(motion.div, { layoutId: "bg-glow", className: "shiny-glow", initial: {
                            opacity: 0
                        }, animate: {
                            opacity: "0.2",
                            scale: 2,
                            rotate: 85
                        }, transition: {
                            duration: 0.3,
                            type: "spring"
                        } }))),
                item.label));
        })))));
};
//# sourceMappingURL=App.js.map