import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<RootLayout>HOMEPAGE</RootLayout>} />
         <Route path="/profile" element={<h2>user profile page</h2>} />
         {/* if path does not exists then redirect */}
         <Route path="*" element={<Navigate to="/" />} />
         to homepage
      </Routes>
   );
};

export default AppRoutes;
