import Nav from "./nav";

function Header() {
  return (
    <header>
      <Nav />
      <h1 className="mt-5 text-3xl font-bold underline">
        Bem-vindo ao meu curriculum digital - EM CONSTRUCAO
      </h1>
      <h2 className="mt-2 text-2xl font-bold underline">
        Aqui voce conhecera um pouco mais de mim e da minha trajetoria
        profissional
      </h2>
    </header>
  );
}
export default Header;
