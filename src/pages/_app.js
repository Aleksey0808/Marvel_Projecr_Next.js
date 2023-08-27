import Head from "next/head";
import '@/styles/globals.scss'
import Layout from "@/components/Layout";


const App = ({ Component, pageProps }) => (
   <Layout>
      <Head>
      <link rel="icon" href="../../public/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
         <Component {...pageProps} />
      </main>
   </Layout>
);

export default App;