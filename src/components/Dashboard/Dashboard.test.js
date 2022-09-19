import { render } from "@testing-library/react";

import { Dashboard } from "./Dashboard";
describe("Beehive component related tests", () => {
  it("Should render App", () => {
    const { container } = render(<Dashboard />);

    expect(container).toMatchSnapshot();
  });
});
