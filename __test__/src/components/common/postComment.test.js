import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../../../test-utils";
import PostComment, {
  replieComments,
} from "../../../../src/components/common/postComment";
import { data } from "../../../data/postComments";

describe("Sub header", () => {
  it("testing without comments  ", () => {
    const comments = replieComments([]);
    expect(comments).toEqual([]);
  });
  it("testing comments  comments", () => {
    const comments = replieComments(data);
    expect(comments.length).toEqual(2);
  });

  it("should render the  sub header", () => {
    render(<PostComment children={data} />);
    const comments = screen.getByText("maybe cloudinary its an option");
    expect(comments).toBeInTheDocument();
  });
});
