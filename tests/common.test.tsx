import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "jest-canvas-mock";

import { ShinyNavbar, NavbarItem } from "../src/components/App";

describe("Common render", () => {
  const config: NavbarItem[] = [
    {
      label: "Nav1",
      onPerform() {
        console.log("Nav1 is triggered!");
      },
    },
    {
      label: "Nav2",
      onPerform() {
        console.log("Nav2 is triggered!");
      },
      url: "https://google.com",
    },
    {
      label: "Nav3",
      onPerform(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        item: NavbarItem,
        itemIndex: number
      ) {
        console.log({ event, item, itemIndex });
      },
      customClass: "green-text",
    },
    {
      label: "Nav4",
      onPerform(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        item: NavbarItem,
        itemIndex: number
      ) {
        console.log({ event, item, itemIndex });
      },
    },
  ];

  it("renders without crashing", () => {
    render(<ShinyNavbar items={config} />);
  });

  it("performs the onPerform property", async () => {
    const logSpy = jest.spyOn(console, "log");
    render(<ShinyNavbar items={config} />);

    await userEvent.click(screen.getByText("Nav1"));
    expect(logSpy).toBeCalledWith("Nav1 is triggered!");
  });

  it("opens url when click the specified item", async () => {
    window.open = jest.fn();
    const windowSpy = jest.spyOn(window, "open");
    render(<ShinyNavbar items={config} />);

    await userEvent.click(screen.getByText("Nav2"));
    expect(windowSpy).toBeCalledWith(config[1].url, "_blank");
  });

  it("renders items with custom class", () => {
    const { container } = render(<ShinyNavbar items={config} />);

    expect(container.getElementsByClassName("green-text"));
  });
});
