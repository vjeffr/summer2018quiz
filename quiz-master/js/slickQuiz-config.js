// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Singapore v. World Cup Teams: Population Edition",
        "main":    "<img src='img/combined.png'><p>You think you know how Singapore ranks next to other small countries?</p>",
        "results": '<img src="img/crowd.jpg"><h4>Answers</h4>At 5.7 million, Singapore is larger than Costa Rica (4.8 million), Croatia (4.2 million), Panama (4 million), Uruguay (3.4 million), and Iceland (300,000). Two of those countries made it to the quarter finals: Uruguay beat 2016 Euro-Cup champions Portugal in the round of 16, and tiny Croatia remains undefeated so far, making it all the way to the final for the first time ever. <h5>Three cheers for tiny teams!</h5> <h5>Now how about more of that Croatian dancing!</h5> <iframe width="780" height="439" src="https://www.youtube.com/embed/Xzeg7MrxMao?start=40" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        "level1":  "Champion! If they had a World Cup for population trivia, you'd totally win!",
        "level2":  "Semi Finals! You got almost every question right, hold your head up high!",
        "level3":  "Quarter Finals! You did better than most, nice shot!",
        "level4":  "Still in the group stage! The competition was tough, but you got a few right!",
        "level5":  "Better luck in 2020! Go back to training and maybe you'll get farther next time!" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of these countries has a smaller population than Singapore? <p><img src='img/skyline.jpg'></p>",
            "a": [
                {"option": "Croatia",      "correct": true},
                {"option": "Switzerland",     "correct": false},
                {"option": "Portugal",      "correct": false},
                {"option": "Denmark",     "correct": false} // no comma here
            ],
            "correct": '<p>Right! The small country of Croatia, known as a beachy paradise at the crossroads of Eastern and Western Europe, has fewer people than Singapore - and some crazy traditional dances.</p><iframe width="780" height="439" src="https://www.youtube.com/embed/p4Y1k9awJ6M?start=110" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
                        "incorrect": '<p><span>Sorry! The correct answer is Croatia.</span> The little nation, known as a beachy paradise at the crossroads of Eastern and Western Europe, has fewer people than Singapore - and crazy traditional dances.</p><iframe width="780" height="439" src="https://www.youtube.com/embed/p4Y1k9awJ6M?start=110" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'  // no comma here
        },
        //End of question 1

        { // Question 2 - Multiple Choice,
          "q": "About many people does Singapore have anyway? <p><img src='img/row.jpg'></p>",
          "a": [
              {"option": "5.1 million",    "correct": false},
              {"option": "5.6 million",     "correct": true},
              {"option": "4.8 million ",      "correct": false},
              {"option": "3 million",   "correct": false} // no comma here
          ],
          "correct": "<p><span>Correct!</span> I didn't actually expect you to know that! Singapore has approximately 5.6 million people, all of whom seem to love football.</p> <img src='http://blog.eoasia.com/wp-content/uploads/2015/08/6.jpg'",
          "incorrect": "<p><span>Fail.</span> Sorry. You lose. We actually have approximately 5.6 million people here, and they all seem to love football.</p> <img src='http://blog.eoasia.com/wp-content/uploads/2015/08/6.jpg'" // no comma here
        },
//End of question 2

        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
          "q": "Which of these countries has a bigger population than Singapore? <p><img src='img/singmap.jpg'></p>",
          "a": [
              {"option": "Iceland",               "correct": false},
              {"option": "Portugal",   "correct": true},
              {"option": "Panama",               "correct": false},
              {"option": "Sweden", "correct": true} // no comma here
          ],
          "select_any": true, //Make it select any rather than all.
          "correct": "<p><img src='img/portugal.png'> <img src='img/sweden.png'><span>Nice!</span> Both Portugal and Sweden have ~10 million people.</p>",
          "incorrect": "<p><span>Not exactly.</span> At 4 million, Panama's population is smaller than Singapore's, while Iceland is positively teensy with 300,000!</p>" // no comma here
        },
        //End of question 3

        { // Question 4
          "q": "Which of these countries has a smaller population than Singapore? Select ALL that apply. <p><img src='img/alley.jpg'></p>",
          "a": [
              {"option": "Uruguay",           "correct": true},
              {"option": "Denmark",                  "correct": false},
              {"option": "Costa Rica",  "correct": true},
              {"option": "Serbia",          "correct": false} // no comma here
          ],
          "correct": "<p><span>Brilliant!</span> You're seriously a genius. Uruguay and Costa Rica are both smaller than SG, while Denmark and Serbia both slightly outweigh us.</p>",
          "incorrect": "<p><span>Not Quite.</span> Denmark and Serbia have more people than SG, while Uruguay and Costa Rica are both slightly smaller than us.</p>"

 // no comma here
        },
        //End of question 4

        { // Question 5
          "q": "Where does Croatia - the tiny team that made it to the finals - rank among the 32 World Cup contenters, in terms of population size? <p><img src='img/croatiapic.jpg'></p>",
          "a": [
              {"option": "2nd smallest",    "correct": false},
              {"option": "4th smallest",     "correct": true},
              {"option": "10th smallest",      "correct": false},
              {"option": "16th smallest",   "correct": false} // no comma here
            ],
            "correct": '<p><span>Score! You are hotter than Ivan Perisic in the 68th minute of the semi-finals!</span></p><p><iframe width="780" height="439" src="https://www.youtube.com/embed/zaRUUUfIvyU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>',
            "incorrect": '<p><span>Ouch! They are the 4th smallest team this year.</span></p><p><iframe width="780" height="439" src="https://www.youtube.com/embed/zaRUUUfIvyU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p><p>That hurts more than getting scored on by Ivan Perisic in the 68th minute of the World Cup semi-finals!</p>' // no comma here
        },

    ]
};
