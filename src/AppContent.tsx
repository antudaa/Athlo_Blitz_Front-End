import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

const AppContent = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppContent;
