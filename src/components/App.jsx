import { Routes, Route } from "react-router-dom";
import { LayoutHeader } from "pages/Layout";
import { PhoneBook } from "./PhoneBook/PhoneBook";
import { Home } from "pages/Home";
import { SignIn } from "pages/SignIn";
import { SignUp } from "pages/SignUp";
import NotFound from "./NotFound/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/auth/authOperations";
import { selectIsRefreshing } from "redux/auth/authSelectors";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? <p>Refreshing... Please wait!</p> : (
    <Routes>
      <Route path='/' element={<LayoutHeader />}>
        <Route index element={<Home />} />
        <Route path='contacts' element={<PrivateRoute redirectTo="/signin" component={<PhoneBook />} />} />
        <Route path='signin' element={<PublicRoute redirectTo="/contacts" component={<SignIn />} />} />
        <Route path='signup' element={<PublicRoute redirectTo="/contacts" component={<SignUp />} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      
      </Routes>
    
  );
};
