import Head from "next/head";
import styles from "./Layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer.jsx";
import {useRouter} from "next/router";
const Layout = ({children}) => {
  const router = useRouter();
  console.log(router);

  return (
    <div className={styles.layout}>
      <Head>
        <title>Destin Coffee House</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/destincoffeeLOGO.png"
        ></link>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css"
          rel="stylesheet"
        />

        <link
          href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
