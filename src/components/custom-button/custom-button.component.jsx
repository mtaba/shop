import './custome-button.styles.scss'

const CutomButton = ({ children, ...otherProps }) => {
  return <button className="custom-button" {...otherProps}>{children}</button>;
};

export default CutomButton;
