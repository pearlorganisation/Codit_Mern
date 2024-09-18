const SuccessMessage = ({ children, ...props }) => {
  return (
    <div
      style={{ color: "green", textAlign: "center", margin: "0.5rem 0" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default SuccessMessage;
