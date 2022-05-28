import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "./Signup";

describe('<Signup />', () => {
  describe('signup the user', () => {
    beforeEach(async () => {
      render(
        <Router>
          <Signup />
        </Router>

      );

      await userEvent.type(
        screen.getByTestId('username'), 'Sanjay'
      );
      await userEvent.type(
        screen.getByTestId('password'), 'gritfeat@123'
      );
      await userEvent.type(
        screen.getByTestId('rpassword'), 'gritfeat@123'
      );
      userEvent.click(screen.getByTestId('signupButton'));
    })

    it('clears the text field', () => {
      expect(screen.getByTestId('username').value).toEqual('');
    })
  })
})