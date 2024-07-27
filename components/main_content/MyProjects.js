import React, { Component } from 'react';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';

import styles from '../../styles/Projects.module.css';

export default class MyProjects extends Component {
  state = {
    projects: [
      {
        title: 'RPG-game-js',
        description:
          'Play a game about a lonely knight that teleported to an island on which there are lots of bandits.',
        image: '/screenshots/game.png',
        stack: 'JavaScript, Phaser, Matter.js,  Webpack, Tiled, Babbel',
        live: 'https://ecstatic-rosalind-eeae5f.netlify.app/',
        repo: 'https://github.com/MkrtichSargsyan/RPG-game-js',
      },
      {
        title: 'Spiral',
        description:
          'An appointment application for a Spirals office.',
        image: '/screenshots/spiral.png',
        stack: 'React.js, Redux, React Hooks, Tailwind.CSS, Ruby on Rails, PostgreSQL database, Jest, (bcrypt) to crypt password',
        live: 'https://nostalgic-wilson-91baa1.netlify.app',
        repo: 'https://github.com/MkrtichSargsyan/spiral-frontend',
      },
      {
        title: 'JoboCity',
        description:
          "A fully responsive web application where users are able to apply for jobs.",
        image: '/screenshots/jobocity.png',
        stack:
          'React.js, Redux, Redux-thunk, JWT, Tailwind.css, Ruby on Rails, PostgreSQL database, (bcrypt) to crypt password',
        live: 'https://zen-hamilton-529609.netlify.app',
        repo: 'https://github.com/MkrtichSargsyan/jobocity-frontend',
      },
      {
        title: 'Witcher Info',
        description:
          "This project is for showing the characters and creatures from the witcher game",
        image: '/screenshots/witcher.png',
        stack:
          'JavaScript/ES6, Jest, React.js, React Hooks, React Router, Redux, Redux-thunk, Tailwind.CSS, Netlify functions',
        live: 'https://determined-ritchie-1e224a.netlify.app',
        repo: 'https://github.com/MkrtichSargsyan/witcher-info',
      },
      {
        title: 'Transactions',
        description:
          'A mobile app where users can create, edit and delete transactions and group them.',
        image: '/screenshots/transaction.png',
        stack: 'Ruby on Rails, Bootstrap, PostgreSQL',
        live: 'https://transaction-01.herokuapp.com/',
        repo: 'https://github.com/MkrtichSargsyan/Transactions',
      },
      {
        title: 'Restaurant Page',
        description:
          'A restaurant page app that shows list of traditional Armenian meals.',
        image: '/screenshots/restaurant.png',
        stack: 'HTML, CSS, JavaScript, Tailwind.css, Webpack',
        live: 'https://restaurant-page-do205xims-mkrtichsargsyan.vercel.app',
        repo: 'https://github.com/MkrtichSargsyan/Restaurant-Page',
      },
    ],
  };
  render() {
    return (
      <section className={styles.projects} id="My Projects">
        <div className="container">
          <SectionTitle title1={'PORTFOLIO'} title2={'My Projects'} />
          {this.state.projects.map((item) => (
            <article key={item.title}>
              <div className={styles.characteristics}>
                <h2>{item.title}</h2>
                <p className={styles.stack}>Tech Stack Used: {item.stack}</p>
                <p>{item.description}</p>
                <div className={styles.icons}>
                  <a href={item.live} target="_blank">
                    <i className="fas fa-desktop fa-2x" />
                  </a>
                  <a href={item.repo} target="_blank">
                    <i className="fas fa-code fa-2x" />
                  </a>
                </div>
              </div>
              <div>
                <Image
                  src={item.image}
                  alt="Picture"
                  width={400}
                  height={250}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
