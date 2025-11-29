import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ApplyPage from "../Apply";

test("application date is today or in the future", () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const { container } = render(
    <BrowserRouter>
      <ApplyPage />
    </BrowserRouter>,
  );

  const textContent = container.textContent || "";
  const dateRegex = /\b(\d{2})\/(\d{2})\/(\d{2})\b/g; // mm/dd/yy

  const firstMatch = dateRegex.exec(textContent);
  const secondMatch = dateRegex.exec(textContent); // check if there's more than one

  if (!firstMatch) {
    throw new Error(
      "Expected exactly one MM/DD/YY date on the Apply page, but found none.",
    );
  }

  if (secondMatch) {
    throw new Error(
      "Expected exactly one MM/DD/YY date on the Apply page, but found more than one.",
    );
  }

  const [, mm, dd, yy] = firstMatch;
  const year = 2000 + parseInt(yy, 10); // assume 20xx
  const monthIndex = parseInt(mm, 10) - 1;
  const day = parseInt(dd, 10);

  const dateOnPage = new Date(year, monthIndex, day);
  const isTodayOrFuture = dateOnPage >= today;

  // single expect, as requested
  expect(isTodayOrFuture).toBe(true);
});
