//import Footer from '../../navigation/footer/Footer';
//import Header from '../../navigation/header/Header';
import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({}) => {
  return (
    <>
      <Head>
        <title> Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{}</main>
    </>
  );
};

export default PrimaryLayout;
