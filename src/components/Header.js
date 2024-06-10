import Button from "./Button";
const Header = ({ onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1>Task Manager</h1>
      <Button
        color={!showAdd ? "green" : "red"}
        text={!showAdd ? "Add" : "Close"}
        onClick={onAdd}
      />
    </div>
  );
};

export default Header;
