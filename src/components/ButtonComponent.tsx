import React from "react";
import { connect } from "react-redux";
import { updateStatus } from "../store/reducers/statusReducer";
import { RootState } from "../store/store";

interface Props {
  status: string;
  updateStatus: () => void;
}

const ButtonComponent: React.FC<Props> = ({ status, updateStatus }) => {
  const handleClick = () => {
    updateStatus();
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Status: {status}</p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  status: state.status.status,
});

const mapDispatchToProps = {
  updateStatus,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ButtonComponent);
