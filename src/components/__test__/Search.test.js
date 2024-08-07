import "@testing-library/jest-dom"
import { fireEvent, render, screen} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mockdata/mockSearchData.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "react"

global.fetch = jest.fn(()=>{
   return Promise.resolve({
    json:()=>{
       return Promise.resolve(MOCK_DATA)
    }
   })
})

it("Should perform search and render component based on search",async()=>{
   
    await act(async()=>{
        render(<BrowserRouter><Body/></BrowserRouter>)
    })
    const beforeSearch = screen.getAllByTestId("resData")
    expect(beforeSearch.length).toBe(8)
    const button = screen.getByRole("button",{name:"Search"})
    //expect(button).toBeInTheDocument()
    const searchInput = screen.getByTestId("search")
    fireEvent.change(searchInput,{target:{value:"restaurant"}})
    fireEvent.click(button)
    const afterSearch = screen.getAllByTestId("resData")
    expect(afterSearch.length).toBe(2)
})

it("Should return top rated restraunt",async()=>{
   
    await act(async()=>{
        render(<BrowserRouter><Body/></BrowserRouter>)
    })
    const button = screen.getByRole("button",{name:"Top Restraunts"})
    fireEvent.click(button)
    const afterFilter = screen.getAllByTestId("resData")
    expect(afterFilter.length).toBe(6)
})