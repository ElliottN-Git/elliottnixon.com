import React from 'react';
import Header from '../../Components/UI/Header/Header';
import ContentBlock from '../../Components/UI/ContentBlock/ContentBlock';
import AboutMe from '../../Components/UI/About Me/AboutMe';
import Projects from '../../Components/UI/Projects/Projects';

const Home = (props) => {
  return (
    <>
      <ContentBlock overflow='hidden'>
        <Header></Header>
      </ContentBlock>
      <ContentBlock overflow='hidden'>
        <AboutMe setMainScroll={props.setMainScroll}></AboutMe>
      </ContentBlock>
      {/* <ContentBlock overflow='hidden'> */}
      <Projects></Projects>
      {/* </ContentBlock> */}

    </>
  )
}

export default Home

