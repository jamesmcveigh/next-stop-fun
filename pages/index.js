import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Stop Fun!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next Stop Fun!" />
        <h1>Find Nearby Attractions by Train</h1>
    <form>
      <label for="station">Select a Train Station:</label>
      <select name="station" id="station">
        <option value="london">London</option>
        <option value="manchester">Manchester</option>
        <option value="liverpool">Liverpool</option>
      </select>
      <button type="submit">Search</button>
    </form>
    <h2>Popular Stations</h2>
    <ul>
      <li><a href="#">London</a></li>
      <li><a href="#">Edinburgh</a></li>
      <li><a href="#">Brighton</a></li>
      <li><a href="#">Bristol</a></li>
    </ul>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
