/* eslint-disable import/no-named-as-default */
import { createBrowserRouter } from 'react-router-dom'
import { path } from 'src/constants/path'
import MainLayout from 'src/layouts/MainLayout'
import FormCard from 'src/pages/form-card/FormCard'
import GenerateCard from 'src/pages/generate-card/GenerateCard'
import Home from 'src/pages/home/Home'

export const router = createBrowserRouter([
  {
    path: path.home,
    element: <MainLayout />,
    children: [
      {
        path: path.home,
        element: <Home />
      },
      {
        path: path.form,
        element: <FormCard />
      },
      {
        path: path.generateCard,
        element: <GenerateCard />
      }
    ]
  }
])

export default router
