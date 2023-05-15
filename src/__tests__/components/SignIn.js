import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { SigninFormContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {

      const onSubmit = jest.fn()
      render(<SigninFormContainer onSubmit={onSubmit} />)
      fireEvent.changeText(screen.getByPlaceholderText('Username'), "testaaja")
      fireEvent.changeText(screen.getByPlaceholderText('Password'), "testisana")
      fireEvent.press(screen.getByText('Sign in'))
      // render the SignInContainer component, fill the text inputs and press the submit button

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "testaaja",
          password: "testisana"
        })
        // expect the onSubmit function to have been called once and with a correct first argument
      });
    });
  });
});