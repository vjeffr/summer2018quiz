// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Singapore v. World Cup Teams: Population Edition",
        "main":    "<p>You think you how Singapore ranks next to other small countries?</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Champion! If they had a World Cup for population trivia, you'd totally win!",
        "level2":  "Semi Finals! You got almost every question right, hold your head up high!",
        "level3":  "Quarter Finals! You did better than most, nice shot!",
        "level4":  "Still in the group stage! The competition was tough, but you got a few right!",
        "level5":  "Better luck in 2020! Go back to training and maybe you'll get farther next time!" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of these countries has a smaller population than Singapore?",
            "a": [
                {"option": "Croatia",      "correct": true},
                {"option": "Switzerland",     "correct": false},
                {"option": "Portugal",      "correct": false},
                {"option": "Denmark",     "correct": false} // no comma here
            ],
            "correct": '<p>Croatia</p><iframe width="560" height="315" src="https://www.youtube.com/embed/_l7sak6Vlq8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
                        "incorrect": "<p><span>Sorry! The correct answer is Croatia.</span> With only 4 million people, Croatia has fewer people than Singapore." // no comma here
        },//End of question 1
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of these countries has a bigger population than Singapore?",
            "a": [
                {"option": "Iceland",               "correct": false},
                {"option": "Portugal",   "correct": true},
                {"option": "Panama",               "correct": false},
                {"option": "Sweden", "correct": true} // no comma here
            ],
            "select_any": true, //Make it select any rather than all.
            "correct": "<p><span>Nice!</span> Both Portugal and Sweden have ~10 million people.</p>",
            "incorrect": "<p><span>Not exactly.</span> At 4 million, Panama's population is smaller than Singapore's, while Iceland is positively teensy with 300,000!</p>" // no comma here
        }, //End of question 2
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of these countries has a smaller population than Singapore? Select ALL that apply.",
            "a": [
                {"option": "Uruguay",           "correct": true},
                {"option": "Denmark",                  "correct": false},
                {"option": "Costa Rica",  "correct": true},
                {"option": "Serbia",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius. Uruguay and Costa Rica are both smaller than SG, while Denmark and Serbia both slightly outweigh us.</p>",
            "incorrect": "<p><span>Not Quite.</span> Denmark and Serbia have more people than SG, while Uruguay and Costa Rica are both slightly smaller than us.</p>" // no comma here
        },//End of question 3
        { // Question 4
            "q": "About many people does Singapore have anyway?",
            "a": [
                {"option": "5.1 million",    "correct": false},
                {"option": "5.6 million",     "correct": true},
                {"option": "4.8 million ",      "correct": false},
                {"option": "3 million",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. We actually have approximately 5.6 million people here.</p>" // no comma here
        },//End of question 4

        { // Question 5
          "q": "Where does Croatia - the tiny team that made it to the finals - rank among the 32 World Cup contenters, in terms of population size?",
          "a": [
              {"option": "2nd smallest",    "correct": false},
              {"option": "4th smallest",     "correct": true},
              {"option": "10th smallest",      "correct": false},
              {"option": "16th smallest",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> That was the toughest question!</p>",
            "incorrect": "<p><span>ERRRR!</span> It's the 4th smallest, but that was the toughest question!</p>" // no comma here
        },

    ]
};
