import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { StyledLayout } from "./Layout.styled";
import { Loader } from "components/Loader/Loader";




export const Layout = () => {
    return (
      <StyledLayout>
        <Suspense fallback={<Loader/>}>
          <Outlet />
          <Toaster />
        </Suspense>
      </StyledLayout>
    );
  };