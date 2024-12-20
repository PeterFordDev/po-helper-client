// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, MantineProvider } from '@mantine/core';
import App from "./App";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import "./styles.css";

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    </React.StrictMode>
);
