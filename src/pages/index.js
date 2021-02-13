import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import ProjectItem from "../components/ProjectItem";
import Showcase from "../components/Showcase";

const projects = [
  [
    {
      image:
        "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2989&q=80",
      caption: "Slack | Logo design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560257354-b6d45f4badf0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      caption: "CyberVpn | Logo design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554463529-e27854014799?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      caption: "Coffee Shop | Logo design",
    },
  ],
  [
    {
      image:
        "https://images.unsplash.com/photo-1514944152559-a103040c7f16?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
      caption: "Photo of Moon | Astrophotography",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80",
      caption: "Photo of Cheese | Portrait",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586712351524-1832e6c54f5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
      caption: "Photo of Giant's Causeway | Landscape",
    },
  ],
  [
    {
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
      caption: "Portfolio",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2599&q=80",
      caption: "Google",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516832336751-adc31dc5b454?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2846&q=80",
      caption: "Steam",
    },
  ],
];

function Homepage() {
  return (
    <Page>
      <Header name="Philip Park" tagline="Aspiring Graphic Designer" />
      <Showcase projects={projects[0]} />
      <Showcase projects={projects[1]} />
      <Showcase projects={projects[2]} />
    </Page>
  );
}

export default Homepage;
