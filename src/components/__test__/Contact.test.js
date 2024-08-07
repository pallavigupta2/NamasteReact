import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';

describe("Contact us test cases",()=>{
    it("Should render contact component",()=>{

        // render 
        render(<Contact/>)
    
        // Querying
        const heading = screen.getByRole("heading")
    
        //Assertion
        expect(heading).toBeInTheDocument()
    })
    
    test("Should render button in contact component",()=>{
    
        // render 
        render(<Contact/>)
    
        // Querying
        const button = screen.getByRole("button")
    
        //Assertion
        expect(button).toBeInTheDocument()
    })
    
    test("Should render input in contact component",()=>{
    
        // render 
        render(<Contact/>)
    
        // Querying
        const input = screen.getByPlaceholderText("EnterNmae");
    
        //Assertion
        expect(input).toBeInTheDocument()
    })
    
    test("Should render 2 input in contact component",()=>{
    
        // render 
        render(<Contact/>)
    
        // Querying
        const input = screen.getAllByRole("textbox")
    
        //Assertion
        expect(input.length).toBe(2)
    })
})

