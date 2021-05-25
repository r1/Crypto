import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "Crypto Tracker" }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_content}>{children}</main>
    </div>
  );
};

export default Layout;
