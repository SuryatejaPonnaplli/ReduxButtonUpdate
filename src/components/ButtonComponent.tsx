import React from "react";
import { connect, ConnectedProps } from "react-redux";
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

// ✅ Correct typing for mapStateToProps
const mapStateToProps = (state: RootState) => ({
  status: state.status.status,
});

// ✅ Correct typing for mapDispatchToProps
const mapDispatchToProps = {
  updateStatus,
};

// ✅ Fix the typing for connect
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

// ✅ Ensure correct typing when exporting
export default connector(ButtonComponent);
