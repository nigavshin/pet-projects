import img from "./errorImage.jpeg";

const ErrorImage = () => {
  return (
    <img
      src={img}
      style={{
        width: "180px",
        height: "180px",
        objectFit: "contain",
      }}
      alt="Not Found"
    />
  );
};

export default ErrorImage;
