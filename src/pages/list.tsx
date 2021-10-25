import React from "react";
import type { FC } from "react";

import Loading from "../components/loading";
import SEO from "../components/seo";
import ListOfCards from "../components/listOfCards";
import useList from "../hooks/useList";

const List: FC = () => {
  const {
    users,
    effetcs: { isLoading, isSuccess, isError },
  } = useList();

  return (
    <div>
      <SEO description="list of users" title="Page list" />

      {isLoading && <Loading />}

      {isSuccess && <ListOfCards users={users} />}

      {isError && <p>Ops... We have an error.</p>}
    </div>
  );
};

export default List;
