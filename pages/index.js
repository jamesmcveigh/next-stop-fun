import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import StationComboBox from '@components/StationComboBox';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Stop Fun!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next Stop Fun!" />
        <h2>Find Nearby Attractions by Train</h2>
    <StationComboBox />
    <h2>Popular Stations</h2>
    <ul>
      <li><a href="#">London</a></li>
      <li><a href="#">Edinburgh</a></li>
      <li><a href="#">Brighton</a></li>
      <li><a href="#">Bristol</a></li>
    </ul>
      </main>
      <Footer />
    </div>
  );
}
