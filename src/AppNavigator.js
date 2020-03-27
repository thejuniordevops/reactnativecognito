import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  ConfirmSignUp,
  Home,
  User,
  SignIn,
  SignUp,
  Forgot,
  ForgotPassSubmit,
} from './screens/Authenticator';

const AppNavigator = createStackNavigator(
  {
    HOME: {screen: Home},
    SIGN_IN: {screen: SignIn},
    SIGN_UP: {screen: SignUp},
    FORGOT: {screen: Forgot},
    CONFIRM_SIGN_UP: {screen: ConfirmSignUp},
    USER: {screen: User},
    FORGOT_PASSWORD_SUBMIT: {screen: ForgotPassSubmit},
  },
  {
    initialRouteName: 'HOME',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
