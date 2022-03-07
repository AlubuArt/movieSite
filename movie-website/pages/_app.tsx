import React from "react";
import { AppProps } from "next/app";
import { MainLayout } from "../ui/components/04-layouts/MainLayout/MainLayout";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}

export default MyApp;
