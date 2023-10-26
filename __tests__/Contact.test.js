import { render, screen } from "@testing-library/react"
import Contact from "../src/components/Contact"
import "@testing-library/jest-dom"



describe("contact us testing",()=>{
    it("test the contact us component is loaded ",()=>{
        render(<Contact />)
    const heading=screen.getByRole("heading")
    
    expect(heading).toBeInTheDocument();
    
        
    })
    test("should load all the div",()=>{
        const {container}=render(<Contact />)
    const divCount=container.getElementsByClassName("div");
    expect(divCount.length).toBe(1);
    })
})
