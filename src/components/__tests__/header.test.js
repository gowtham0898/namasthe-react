import "@testing-library/jest-dom"
import { fireEvent, render,screen } from "@testing-library/react";
import Header from '../Header'
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom";


it("Should render header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBUteen = screen.getByRole("button",{name:"logout"});
  //const loginBUteen = screen.getByText("login")
  expect(loginBUteen).toBeInTheDocument();
});

it("Should render header cart list component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cart = screen.getByText("🥣- (0 items)")
    //const loginBUteen = screen.getByText("login")
    expect(cart).toBeInTheDocument();
  });

  it("Should contain cart item ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cart = screen.getByText(/🥣/) //regex
    //const loginBUteen = screen.getByText("login")
    expect(cart).toBeInTheDocument();
  });

  it("Should on click change to login", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const logoutBUteen = screen.getByRole("button",{name:"logout"});
    fireEvent.click(logoutBUteen)


    const loginBUteen = screen.getByRole("button",{name:"login"});
    expect(loginBUteen).toBeInTheDocument();
  });