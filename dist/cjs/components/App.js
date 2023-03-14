"use strict";
exports.__esModule = true;
exports.ShinyNavbar = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var ShinyNavbar = function (props) {
    var items = props.items;
    var _a = (0, react_1.useState)(0), selected = _a[0], setSelected = _a[1];
    var handlerOnClick = function (event, index, item) {
        setSelected(index);
        if (item.url) {
            window.open(item.url, '_blank');
        }
        if (item.onPerform) {
            item.onPerform(event, item, index);
        }
    };
    return (react_1["default"].createElement("div", { className: 'shiny-navbar__container' }, Boolean(items.length) && (react_1["default"].createElement("div", { className: 'shiny-navbar__box' },
        react_1["default"].createElement("div", { className: 'shiny-navbar__top' }),
        items.map(function (item, index) {
            var isSelected = selected === index;
            var selectedBorder = "shiny-borders_".concat(index === 0 ? 'left' : index + 1 === items.length ? 'right' : 'mid');
            return (react_1["default"].createElement("button", { key: index, onClick: function (e) { return handlerOnClick(e, index, item); }, className: "shiny-navbar__element".concat(isSelected ? ' shiny-selected' : '') },
                isSelected && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(framer_motion_1.motion.div, { layoutId: 'bg', className: "shiny-navbar__element__selected ".concat(selectedBorder), transition: {
                            duration: 0.3,
                            type: 'spring'
                        } }),
                    react_1["default"].createElement(framer_motion_1.motion.div, { layoutId: 'bg-glow', className: "shiny-glow", initial: {
                            opacity: 0
                        }, animate: {
                            opacity: '0.2',
                            scale: 2,
                            rotate: 85
                        }, transition: {
                            duration: 0.3,
                            type: 'spring'
                        } }))),
                item.label));
        })))));
};
exports.ShinyNavbar = ShinyNavbar;
//# sourceMappingURL=App.js.map