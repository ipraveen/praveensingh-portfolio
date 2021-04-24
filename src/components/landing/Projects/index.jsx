import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid } from './styles';

export const Projects = () => (
  // const { theme } = useContext(ThemeContext);
  <Wrapper as={Container} id="projects">
    <h2>Projects</h2>
    <Grid>Project</Grid>
  </Wrapper>
);
