import { fireEvent, render,screen } from "@testing-library/react"
import RestrauntMenu from "../RestrauntMenu"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mockdata/mockResMenu.json"
import { act } from "react"
import { Provider } from "react-redux"
import AppStore from "../../utils/AppStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    })
})
it("Should load Restraunt Menu component with 4 category",async ()=>{
    await act(async()=>{
        render(<Provider store={AppStore}><RestrauntMenu/></Provider>)
    })
    const category = screen.getAllByTestId("category")
    expect(category.length).toBe(1)
})

// it("Should load Restraunt Menu component with Matka Kulfi (4) category",async ()=>{
//     await act(async()=>{
//         render(<Provider store={AppStore}><RestrauntMenu/></Provider>)
//     })
//     const accordianHeader = screen.getByText("Matka Kulfi (4)")
//     expect(accordianHeader).toBeInTheDocument()
// })

it("Should load Restraunt List component when click on Recommended (20)",async ()=>{
    await act(async()=>{
        render(<Provider store={AppStore}><RestrauntMenu/></Provider>)
    })
    const accordianHeader = screen.getByText("Recommended (20)")
    //fireEvent.click(accordianHeader)
    const resList = screen.getAllByTestId("resList")
    console.log(resList.length)
    expect(resList.length).toBe(20)
})

it("Should update header component when clicked on Add button",async ()=>{
    await act(async()=>{
        render(<BrowserRouter><Provider store={AppStore}><Header/><RestrauntMenu/></Provider></BrowserRouter>)
    })
    const addBtn = screen.getAllByRole("button",{name:"Add"})
    fireEvent.click(addBtn[0])
    const cartHeader = screen.getByText("Cart : 1")
    expect(cartHeader).toBeInTheDocument()
    fireEvent.click(addBtn[1])
    const cartHeader2 = screen.getByText("Cart : 2")
    expect(cartHeader2).toBeInTheDocument()
})

it("Should update card component",async ()=>{
    await act(async()=>{
        render(<BrowserRouter><Provider store={AppStore}><RestrauntMenu/><Cart/></Provider></BrowserRouter>)
    })
    const addBtn = screen.getAllByRole("button",{name:"Add"})
    fireEvent.click(addBtn[0])
    const resList = screen.getAllByTestId("resList")
    expect(resList.length).toBe(23)  // 20 for first test case and 2 for second test case 
})

it("Should clear cart when clicked on clear button in cart page.",async ()=>{
    await act(async()=>{
        render(<BrowserRouter><Provider store={AppStore}><RestrauntMenu/><Cart/></Provider></BrowserRouter>)
    })
    const resList = screen.getAllByTestId("resList")
    expect(resList.length).toBe(23)  // 20 for first test case and 2 for second test case 
    const clearButton = screen.getByRole("button",{name:"Remove All"})
    fireEvent.click(clearButton)
    const resListAfter = screen.getAllByTestId("resList")
    expect(resListAfter.length).toBe(20)
})