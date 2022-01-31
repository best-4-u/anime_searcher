import { create } from "react-test-renderer";

import NotFound from "./NotFound";

describe("Not found", () => {
  it("renders correctly snapshot", () => {
    const tree = create(<NotFound />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
