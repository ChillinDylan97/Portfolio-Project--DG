import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Portfolio Webpage",
    description:
      "A sectioned, scrollable website sections advertising who I am, what I do, and how to contact me. You're already here.",
    getImageSrc: () => require("../images/you_are_here.jpg"),
  },
  {
    title: "Restaraunt Webpage",
    description:
      "A webpage for a fictional website where users can reserve a table for a specific time and date.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Blog Website",
    description:
      "A website that allows a user to create, edit, and delete blog posts. Each post contains a comment section that other users can leave comments on. There is also a functioning contact page that sends an email to the owner of the blog. This project is still a WIP.",
    getImageSrc: () => require("../images/blog_pic.png"),
  },
  {
    title: "Tetris-like Game",
    description:
      "A game that functions similarly to Tetris made entirely in React. I made this for the sole purpose of further educating myself.",
    getImageSrc: () => require("../images/tetris_game_pic.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
