import "./MaskedField.css";

type MaskedInputProps = {
  children: string;
};

const MaskedField: React.FC<MaskedInputProps> = ({ children }) => {
  const valueLenght = children.length;
  const unmaskedValueLenght = Math.floor(valueLenght / 2);
  const maskedValueLength = valueLenght - unmaskedValueLenght;

  console.log("Value length " + valueLenght);
  console.log("Unmasked Value Length " + unmaskedValueLenght);
  console.log("Masked Value Length " + maskedValueLength);

  const unmaskedCharecterSet = children.substring(0, unmaskedValueLenght);
  const maskedCharacterSet = "*".repeat(maskedValueLength);

  return (
    <>
      <span>{`${unmaskedCharecterSet}${maskedCharacterSet}`}</span>
      <button className="show-button">Show</button>
      <div className="modal">Hello</div>
    </>
  );
};

export default MaskedField;
