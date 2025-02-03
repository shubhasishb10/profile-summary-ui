import MaskedField from "../mask/MaskedField";
import "./Header.css";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <div className="header">
      <h3>Shubhasish Bhunia</h3>
      <h6>Email: shubhasishb10@gmail.com</h6>
      <h6>
        Phone: <MaskedField>+918075041134</MaskedField>
      </h6>
    </div>
  );
};

export default Header;
