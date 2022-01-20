/**
 * @jest-environment jsdom
 */

/* eslint-disable import/no-extraneous-dependencies -- ignore extraneous dependencies in test files. */

import { render } from "@testing-library/react";

import Index from "../../src/pages";

describe("index page", () => {
  test("renders", () => {
    const result = render(<Index />);
    expect(result).toMatchSnapshot();
  });
});
