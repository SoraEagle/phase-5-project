import React from 'react';

function Home(){
  return (
    <div id='content'>
      <section>
        <h2>Welcome to <i>Cardlet!</i></h2>
      </section>
      <section>
        <p>The purpose of this site is a simple one:</p>
        <p>To help people <b><i>study</i></b>!!!  &nbsp;</p>
        <p id='paragraph'>
          I started this website with the goal of helping me remember things that I might need to know later.
          For most of my life, I have had an <i>hard time</i> retaining things.
          I would have to write out extra notes while I was in college, 
          and take pictures or screenshots of examples that were given.
        </p>
        <p id='paragraph'>
          When I started learning Web Development (AKA how to make an website myself), 
          I had to either bookmark all of Flatiron's lectures, labs and links to other websites..., 
          or, I would have to write down <i>ten times</i> as many notes as I did before.
          It was grueling!!!
        </p>
        <p id='paragraph'>
          That's when I had the bright idea to use what I was learning in Web Development to (you guessed it) make my <b><i>very own website for taking notes</i></b>!
          This way, I can:
        </p>
        <li id='statement'>Leave groups of my notes in folders to keep them organized,</li>
        <li id='statement'>Add new folders and notes,</li>
        <li id='statement'>Edit any existing flashcards,</li>
        <li id='statement'>or delete any notes or folders I felt that I no longer needed</li>
      </section>
    </div>
  )
}

export default Home;