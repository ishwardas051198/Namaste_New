import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Body from "../src/components/Body";
import data from "../src/mocks/mockRestroList.json";
import "@testing-library/jest-dom"
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(data);
    },
  });
});

test("search should work fine", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resList=screen.getAllByTestId("resItem")
  //console.log(resList)
  expect(resList.length).toBe(20)

  const searchInput=screen.getByTestId("searchInput")

   fireEvent.change(searchInput,{target:{value:"burger"}})

  const searchButton=screen.getByRole("button",{name:"Search"})

   fireEvent.click(searchButton)
   const newResList=screen.getAllByTestId("resItem")
   console.log(newResList.length)

//   const clickedItems=screen.getAllByTestId("resItem")
  expect(newResList.length).toBe(2)
   
});
