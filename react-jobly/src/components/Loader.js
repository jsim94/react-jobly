import { BeatLoader } from "react-spinners";

export default function Loader() {
  return (
    <BeatLoader
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
