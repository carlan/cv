// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // meta
  head.meta.push({
    name: 'author',
    content: 'Carlan Calazans',
  });
  head.meta.push({
    name: 'description',
    content: "Hi, my name is Carlan. I'm a senior software engineer / ninja, for the past 10 years I've been analysing business rules in an IT environment, identifying and developing solutions with best practices in various technologies. During these years I've involved myself in the whole development cycle from requirements specification, development of specifications and software development as single developer or an active member of a agile team. I'm a full-stack developer and in the past 5 years I've been developing a lot of microservices and single page web applications (SPA) with Java and Javascript frameworks.",
  });
  head.meta.push({
    name: 'keywords',
    content: "Carlan Calazans, Carlan, Calazans, Software Engineer, Software, Enginner, Senior Software Enginner, Software Engineering, Java, Javascript, HTML, CSS, Spring, Spring Cloud, Grails, Hibernate, JPA, Clear Code, Clean Code, AngularJS, Angular, JQuery, Bootstrap, Microservices, API, REST, Docker, Elasticsearch, Agile, Scrum, Kanban, Jira, Confluence, Shell Scripting, SQL, TDD, SOLID, HTML5, CSS3, Maven, Gradle, Subversion, SVN, GIT, Sonar, IntelliJ Idea, Idea, SPA, Ubuntu, ReactJS, NodeJs, VueJs, Svelte",
  });
  //link
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Source+Code+Pro:400,700&display=swap'
  });

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
