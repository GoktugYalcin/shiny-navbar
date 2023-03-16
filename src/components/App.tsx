import React, { useState } from "react";
import { motion } from "framer-motion";

export interface NavbarItem {
  customClass?: string;
  label: string;
  onPerform?(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: NavbarItem,
    itemIndex: number
  ): void;
  url?: string;
}

export interface propsItem {
  items: NavbarItem[];
}

export const ShinyNavbar: React.FC<propsItem> = (props) => {
  const { items } = props;
  const [selected, setSelected] = useState<number>(0);

  const handlerOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
    item: NavbarItem
  ) => {
    setSelected(index);
    if (item.url) {
      window.open(item.url, "_blank");
    }
    if (item.onPerform) {
      item.onPerform(event, item, index);
    }
  };
  return (
    <div className="shiny-navbar__container">
      {Boolean(items.length) && (
        <div className="shiny-navbar__box">
          <div className="shiny-navbar__top"></div>
          {items.map((item, index) => {
            const isSelected: boolean = selected === index;
            const selectedBorder = `shiny-borders_${
              index === 0
                ? "left"
                : index + 1 === items.length
                ? "right"
                : "mid"
            }`;
            return (
              <button
                key={index}
                onClick={(e) => handlerOnClick(e, index, item)}
                className={`shiny-navbar__element${
                  isSelected ? " shiny-selected" : ""
                }${item.customClass ? item.customClass : ""}`}
              >
                {isSelected && (
                  <>
                    <motion.div
                      layoutId="bg"
                      className={`shiny-navbar__element__selected ${selectedBorder}`}
                      transition={{
                        duration: 0.3,
                        type: "spring",
                      }}
                    />
                    <motion.div
                      layoutId="bg-glow"
                      className={`shiny-glow`}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: "0.2",
                        scale: 2,
                        rotate: 85,
                      }}
                      transition={{
                        duration: 0.3,
                        type: "spring",
                      }}
                    />
                  </>
                )}
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
