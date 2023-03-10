import { createSlice } from "@reduxjs/toolkit";

interface RepositoriesState {
  isLoading: boolean;
  data: string[];
  error: string | null;
}

const initialState: RepositoriesState = {
  isLoading: false,
  data: [],
  error: null,
};

export const repositories = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
