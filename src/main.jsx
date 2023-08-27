import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './components/reduxStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)







// const router = createBrowserRouter( [
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//         children: [
//           { path: "/NewEmployee", element: <NewEmployee />, },
//         ],
//       },
//     ],
//   },
// ] );

// ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
//   <React.StrictMode>
//     <Provider store={ store }>
//       <RouterProvider router={ router } />    </Provider>
//   </React.StrictMode>,
// )
