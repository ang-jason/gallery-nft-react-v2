import * as React from "react";

const getJobs = (page, signal) => {
  return fetch(
    `https://ecomm-service.herokuapp.com/job?limit=5&page=${page}` +
      (page === 2 ? "&delay=3000" : ""),
    {
      signal,
    }
  ).then((res) => res.json());
};

export const useJobs = () => {
  const loadJobs = (pageNum, signal) =>
    getJobs(pageNum, signal).then((data) => setJobs(data));

  const [page, setPage] = React.useState(1);
  const [jobs, setJobs] = React.useState(undefined);

  React.useEffect(() => {
    const ab = new AbortController();
    loadJobs(page, ab.signal);
    return () => {
      ab.abort();
    };
  }, [page]);

  return {
    jobs,
    page,
    setPage,
    loadJobs,
  };
};
