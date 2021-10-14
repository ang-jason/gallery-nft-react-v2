import * as React from "react";

const getListings = (page, signal) =>
  fetch(`https://ecomm-service.herokuapp.com/marketplace?page=${page}`, {
    signal,
  }).then((res) => res.json());

export const useListings = () => {
  const [listings, setListings] = React.useState(undefined);
  const [page, setPage] = React.useState(1);

  const loadListings = (pageNum, signal) =>
    getListings(pageNum, signal).then((data) => setListings(data));

  React.useEffect(() => {
    const ab = new AbortController();
    loadListings(page, ab.signal);
    return () => {
      ab.abort();
    };
  }, [page]);

  return {
    listings,
    page,
    setPage,
    loadListings,
  };
};
