import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import routes from './Routes'
import Layout from '@components/layout'

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <route.Component />
                </Layout>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
