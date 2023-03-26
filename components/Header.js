export default function Header({ title }) {
  return (
    <>
      <header>
      <img src="logo.png" alt="{title}" />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}
