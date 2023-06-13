import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import InvalidSample1 from './pages/InvalidSample1';
import InvalidSample2 from './pages/InvalidSample2';
import Sample from './pages/Sample';

import ValidSample from './pages/ValidSample';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <ValidSample />,
  },
  {
    path: '/sample',
    element: <Sample />,
  },
  {
    path: '/invalid/1',
    element: <InvalidSample1 />,
  },
  {
    path: '/invalid/2',
    element: <InvalidSample2 />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
