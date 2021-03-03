import Logo from "./logo/Logo";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";

const BaseLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Nav />
      <Logo />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
