import { useEffect } from "react";

import { useLazyGetUsersQuery } from "../api";
import { selectUsers } from "../slice";
import { useTypedSelector } from "../store";

const useList = () => {
  const [getUsers, effetcs] = useLazyGetUsersQuery();

  const users = useTypedSelector(selectUsers);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { users, effetcs };
};

export default useList;
