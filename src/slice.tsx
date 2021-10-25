import { createSlice } from "@reduxjs/toolkit";

import api from "./api";

import type { RootState } from "./store";

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const slice = createSlice({
  name: "users",
  initialState: [] as User[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => payload
    );
  },
});

export default slice.reducer;

export const selectUsers = ({ users }: RootState) => users;
