import PropTypes from "prop-types";

const Message = ({ variant, children }) => {
  return <div className={`alert ${variant}`}>{children}</div>;
};

Message.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
