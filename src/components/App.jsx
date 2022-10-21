import { Routes, Route } from "react-router-dom";
import { LayoutHeader } from "pages/Layout";
import { PhoneBook } from "./PhoneBook/PhoneBook";
import { Home } from "pages/Home";
import { SignIn } from "pages/SignIn";
import { SignUp } from "pages/SignUp";
import NotFound from "./NotFound/NotFound";
export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutHeader />}>
        <Route index element={<Home />} />
        <Route path='contacts' element={<PhoneBook />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      
      </Routes>
    
  );
};
