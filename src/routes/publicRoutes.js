import SignIn from "../pages/auth/login";
import SignUp from "../pages/auth/register";

const routes = [
  {
    id: 1,
    key: "login",
    path: '/login',
    component: <SignIn />,
    permissions: []
  },
  {
    id: 2,
    key: "register",
    path: '/register',
    component: <SignUp />,
    permissions: []
  },
]

export default routes