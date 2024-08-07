import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppState from "./context/AppContext/AppState";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from "./redux/store";
import { useQuery,QueryClient, QueryClientProvider, } from '@tanstack/react-query';

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AppState>
		<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
	  <QueryClientProvider client={queryClient}>
        <App />
		</QueryClientProvider>
      </PersistGate>
    </Provider>
		</AppState>
	</BrowserRouter>
);
