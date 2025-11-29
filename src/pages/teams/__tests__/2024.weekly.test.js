import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Team2024Page from "../2024";

// ensure that the previous year, or the most recent spring/summer semester is not
// found in members' graduating timelines to ensure the site is being kept up to
// date
test("team members are kept up to date", () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0 = Jan, 11 = Dec

  render(
    <BrowserRouter>
      <Team2024Page />
    </BrowserRouter>,
  );

  const previousYear = currentYear - 1;
  const augustMonthIndex = 7;
  const stalePatterns = [];

  // previous year
  stalePatterns.push(previousYear.toString());
  // previous year's semesters
  const semesters = ["Spring", "Summer", "Fall"];
  semesters.forEach((sem) => {
    stalePatterns.push(`${sem} ${previousYear}`);
  });
  // previous semesters of this year (if past august)
  if (currentMonth >= augustMonthIndex) {
    stalePatterns.push(`Spring ${currentYear}`);
    stalePatterns.push(`Summer ${currentYear}`);
  }

  // find matches and expect
  const foundStalePatterns = stalePatterns.filter((text) => {
    const matches = screen.queryAllByText(text, { exact: true });
    return matches.length > 0;
  });
  expect(foundStalePatterns).toEqual([]);
});
