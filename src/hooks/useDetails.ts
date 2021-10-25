import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { LatLngExpression } from "leaflet";

import { selectUsers, User } from "../slice";
import { useTypedSelector } from "../store";

import { handleUserInfo } from "../utils/handleUserInfo";

export interface InfoProps {
  subheader: string;
  data: { primary: string; secondary: string }[];
}

const useDetails = () => {
  const [user, setuser] = useState<User>();
  const [info, setinfo] = useState<InfoProps[]>([]);
  const [position, setposition] = useState<LatLngExpression>([0, 0]);

  const { id } = useParams<{ id: string }>();

  const users = useTypedSelector(selectUsers);

  useEffect(() => {
    setuser(users.find((u) => u.id === parseInt(id)));
  }, [id, users]);

  useEffect(() => {
    if (user) {
      setposition([
        parseFloat(user.address.geo.lat),
        parseFloat(user.address.geo.lng),
      ]);

      setinfo(handleUserInfo(user));
    }
  }, [user]);

  return { info, position, username: user?.username };
};

export default useDetails;
