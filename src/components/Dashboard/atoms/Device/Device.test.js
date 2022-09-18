/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, fireEvent, act } from "@testing-library/react";
import { Device } from "./Device";

describe("Device component related tests", () => {
  it("Should render Device", () => {
    const { container } = render(<Device />);

    expect(container).toMatchSnapshot();
  });
});
