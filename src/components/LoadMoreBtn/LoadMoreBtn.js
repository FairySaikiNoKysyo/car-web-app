import { useState } from "react";
import { useDispatch } from "react-redux";

import { MoreBtn } from "./LoadMoreBtn.styled";
import { fetchMoreCars } from "../../Redux/operations";

export const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const handleOnClick = () => {
    dispatch(fetchMoreCars(page + 1));

    setPage(page + 1);
  };
  return (
    <>
      <MoreBtn onClick={handleOnClick}>Load More</MoreBtn>
    </>
  );
};