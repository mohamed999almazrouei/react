function Header() {
      const name = "Mohamed Almazrouei";
    const profession = "full Stack Developer";
  return (
        <header className='header'>
          <h1>{name}</h1>
          <p>{profession}</p>
<nav>
  <a href="#about">About</a >
  {"\u00A0\u00A0"}
  <a href="#projects">Projects</a>
  {"\u00A0\u00A0"}
  <a href="#contact">Contact</a>
</nav>
</header>
  );
}
export default Header;