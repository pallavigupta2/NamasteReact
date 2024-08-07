import { fireEvent, render, screen} from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import AppStore from "../../utils/AppStore"
import Header from "../Header"
import "@testing-library/jest-dom"

it("Should render header component with a login button",()=>{
    render(<BrowserRouter>
    <Provider store={AppStore}>
        <Header/>
    </Provider>
    </BrowserRouter>)

    const button = screen.getByRole("button",{name:'Login'})
    
    expect(button).toBeInTheDocument()
})

it("Should render header component with a cart items as 0",()=>{
    render(<BrowserRouter>
    <Provider store={AppStore}>
        <Header/>
    </Provider>
    </BrowserRouter>)

    const cart = screen.getByText("Cart : 0")
    
    expect(cart).toBeInTheDocument()
})

it("Should render header component with a cart items",()=>{
    render(<BrowserRouter>
    <Provider store={AppStore}>
        <Header/>
    </Provider>
    </BrowserRouter>)

    const cartItems = screen.getByText(/Cart/)
    
    expect(cartItems).toBeInTheDocument()
})

it("Should change login button to logout when clicked.",()=>{
    render(<BrowserRouter>
    <Provider store={AppStore}>
        <Header/>
    </Provider>
    </BrowserRouter>)

    const loginButton = screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:'Logout'})
    expect(logoutButton).toBeInTheDocument()
})