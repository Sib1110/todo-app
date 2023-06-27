import Button from "../button/Button";

interface Props {
  onDarkmode: () => void;
  darkmodeOpen: boolean;
}

function Darkmode({ onDarkmode, darkmodeOpen }: Props) {
  return (
    <Button onClickHandler={onDarkmode}>
      {darkmodeOpen ? "밝은 테마" : "어두운 테마"}
    </Button>
  );
}

export default Darkmode;
