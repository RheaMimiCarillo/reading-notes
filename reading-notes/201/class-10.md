# Debugging

## [What Went Wrong? Troubleshooting JavaScript]https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)

1. Name some key differences between a **Syntax Error** and a **Logic Error**.

I liken a syntax error to spelling and grammar mistakes, except in 'coding language'. A few examples would be missing a closing tag in HTML, or putting a curly brace in a random spot in JavaScript.

A logic error is when everything is "spelled" right, but the code doesn't do what you wanted it to. For example, when making a chilli dog, you put the hotdog and the chili in the bun. We'll have problems if the loose chili is used as a container to hold the chili.

2. List a few types of errors that you have encountered in past lab assignments and explain how you were able to correct them.

An error I had was trying to make an array to hold hourly totals across every Salmon Cookie Stand per hour. I ran in to NaN errors. I debugged by logging the array and the indices to the console. Okay so I know it's NaN, so I tried hard coding the array to have the starting value of 0. Great! That got the array to not be NaN in the console log, but a new issue I had was after running the accumulator, the values still ended up as NaN in the browser. I google'd some and realized JS was having trouble interpreting my math expression. I surrounded my expression in parenthesis and then everything was peachy keen

3. How will this topic continue to influence your long term goals?

It highlights to me just how much of the job can be debugging in a real job, as well as makes me think that it'd be wise to write just a small section of code at a time, test for proof of life, and make sure it's logically don't what I designed it to do. This'll prevent or reduce frustrations when I'm on the job.

## [The JavaScript Debugger](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#the_javascript_debugger)

1. How would you describe the JavaScript Debugger tool and how it works to someone just starting out in software development?

If the rendered page that a person sees is like the 'skin', then the Debugger tools are like the guts and internal bits. Like Leonardo da Vinci inspecting cadavers and drawing his conclusions, we  can get in a website's body and really see what make it tic.

3. What is the call stack?

The call stack is a list of code that was run to get to the line you're looking at.

## Bookmark and Review

[Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)

[Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)

## Things I want to know more about

- Are there robust debugging tools like these already built into my IDE?
