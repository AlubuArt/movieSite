import React from "react";
import { AppProps } from "next/app";
import { MainLayout } from "../ui/components/04-layouts/MainLayout/MainLayout";
import { ContentLayout } from "../ui/components/04-layouts/ContentLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <ContentLayout>
                <Component {...pageProps} />
            </ContentLayout>
        </MainLayout>
    );
}

export default MyApp;
