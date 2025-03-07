import { createAction, createReducer } from "@reduxjs/toolkit";

export const updateStatus = createAction("UPDATE_STATUS");

interface StatusState {
  status: string;
}

const initialState: StatusState = { status: "pending" };

const statusReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateStatus, (state) => {
    state.status = "success";
  });
});

export default statusReducer;
