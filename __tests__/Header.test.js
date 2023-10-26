import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import Header from "../src/components/Header"
import appStore from "../src/components/utils/AppStore"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"


test("Should load the header component",()=>{
    render(
    <BrowserRouter>
     <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    )

    // const loginButton=screen.getByRole("button")
    const loginButton=screen.getByText("login")
   expect(loginButton).toBeInTheDocument()
    // render(<Header />)
   
})
test("Should load the cart items component",()=>{
    render(
    <BrowserRouter>
     <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    )

    // const loginButton=screen.getByRole("button")
    const cartItems=screen.getByText("Cart-0 items")
   expect(cartItems).toBeInTheDocument()
    // render(<Header />)
   
})
test("Should convert login button to logout when clicked",()=>{
    render(
    <BrowserRouter>
     <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    )

    const loginButton=screen.getByRole("button")
    fireEvent.click(loginButton)
    const LogOutButton=screen.getByText("logout")
    //const cartItems=screen.getByText("Cart-0 items")
   expect(LogOutButton).toBeInTheDocument()
    // render(<Header />)
   
})