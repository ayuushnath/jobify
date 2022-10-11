import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, ChartsContainer, Loading } from "../../components";

const Stats = () => {
  const { isLoading, showStats, monthlyApplications } = useAppContext();
  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications && monthlyApplications.length > 0 && (
        <ChartsContainer />
      )}
    </>
  );
};

export default Stats;