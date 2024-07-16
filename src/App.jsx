import { Fragment } from "react";
import NavBar from "./compontents/NavBar";
import Hero from "./compontents/Hero";
import HomeCards from "./compontents/HomeCards";
import JobsListing from "./compontents/JobsListing";

const App=()=>{

  const title="Become a React Developer later";
  const subject="Finding a React Job now!"
  return (
    <Fragment>
      <NavBar></NavBar>
      <Hero title={title} subject={subject}></Hero>
      <HomeCards></HomeCards>
      <JobsListing></JobsListing>
    </Fragment>
  );
};

export default App;