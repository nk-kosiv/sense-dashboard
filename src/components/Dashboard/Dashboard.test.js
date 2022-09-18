/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, fireEvent, act } from "@testing-library/react";

import { Dashboard } from "./Dashboard";

const beehiveMock = [{ health: 100 }, { health: 100 }];

describe("Beehive component related tests", () => {
  it("Should render App", () => {
    const { container } = render(<Dashboard />);

    expect(container).toMatchSnapshot();
  });

 
});
