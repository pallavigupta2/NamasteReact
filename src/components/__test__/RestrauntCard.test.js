import { render , screen} from "@testing-library/react"
import RestrauntCards from "../RestrauntCards"
import MOCK_DATA from '../mockdata/RestrauntCardMockData.json'
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"


it("should render restraunt card with props data",()=>{
    render(<BrowserRouter><RestrauntCards resData={MOCK_DATA}/></BrowserRouter>)

    const name = screen.getByText("Burger Farm")
    expect(name).toBeInTheDocument()
})