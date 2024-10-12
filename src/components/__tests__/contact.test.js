import { render,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


// grouping the test cases
// can write describe inside describe alse
describe("contact component test cases", () => {
    test("should load cnatct component",() =>{
        render(<Contact />)
       const heading =  screen.getByRole("heading");
       //Assersion
       expect(heading).toBeInTheDocument()
    });
    
    //test as it
    it("should load button in contact component",() =>{
        render(<Contact />)
       const button =  screen.getByText("Submit")
       //Assersion
      expect(button).toBeInTheDocument();
    });
    
    it("should load input in contact component",() =>{
        render(<Contact />)
       const input =  screen.getByPlaceholderText("name");
       //Assersion
      expect(input).toBeInTheDocument();
    });
    test("should load two input in contact component",() =>{
        render(<Contact />)
       const inputBoxes =  screen.getAllByRole("textbox");
       //Assersion
      expect(inputBoxes.length).toBe(2);
    });
})

