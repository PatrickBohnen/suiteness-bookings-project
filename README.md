# Bookings Project
This project was for a job interview and it is meant to call a api that provides a list of bookings. Then on the main page is displays a summary of the bookings. The user can click on the Booking Id to take them to a more detailed page for each booking which also includes additional information on the hotel and guest.

# Installing and Running
This one is fairly straightfowrward.
1: Download the project
2: create a .env.local file with the variables 'api_url' and 'api_key' and enter the appropriate values.
3: run 'npm install'
4: run 'npm start' 
5: go to http://localhost:5173/ and have fun!

# Notes
Qwik: This was my first project with Qwik, and overall I found it pretty intuitive. Coming from a React and TS background definitely helped pick it up. The documentation was alright. I was able to sort through most issues as they came up, but it wasn't always the clearest, and there was a lack of information on typing for a fair amount of it. I could see a less experienced person struggling to parse the documentation. Similarly the community is quite small which is a concern, but that's not a reason not to use something. I did occasionally find myself searching for plain JSX or React solutions and adapting them for Qwik. Overall I see Qwik as very promising, and revisiting how we load JS has become more relevant then ever as webapps continue to become more and more complex, I am excited to see where Qwik goes, and I am excited to add it to my repotoire.

Tailwind: This project was 100% Tailwind. I've used Tailwind before and my feelings on tailwind are such that it's great for quickly prototyping or styling straightforward components but for more complex or repetative styles it becomes more of a hinderance then a help. Frankly, I've always prefered just plain SCSS and I don't feel like Tailwind solves the problems it claims to solve. Despite the simplicity of this project my opinions remain. To sum up my feelings I personally have no problem using Tailwind, but I feel like using only Tailwind is robbing yourself of tools. To me it is a tool in the styling toolbox, not a replacement for the entire toolbox. On the other hand, to be fair to Tailwind I would rate my css knowledge as expert level, and I can see how having the guardrails that Tailwind applies could be invaluable for developers who don't have as much of a front-end background.