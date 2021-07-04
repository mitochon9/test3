import Head from "next/head";
import "tailwindcss/tailwind.css";

const App = (props) => {
  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      <props.Component {...props.pageProps} />
    </>
  );
};

export default App;
