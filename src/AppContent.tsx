import { RouterProvider } from 'react-router-dom';
import router from './routes';
import ScrollToTopButton from './utils/ScrollToTop';

const AppContent = () => {

  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
};

export default AppContent;
