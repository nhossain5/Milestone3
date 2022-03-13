# Here is the Heroku link:
## https://frozen-hamlet-09935.herokuapp.com/
# If you want to run this locally without Heroku:
### Install the packages from requirements.txt in the terminal
### Obtain an API KEY from The Movie DB
### In your main directory do the following:
```
git init
heroku create
heroku addons:create heroku-postgresql:hobby-dev
heroku config
```
### Copy and paste the DATABASE_URL somewhere
### Make sure there is a 'ql' (without apostrophes) after postgres
### Create a .env file in the main directory
### Inside the .env file, put:
```
export TMDB_KEY='your_API_key'
export DATABASE_URL='your_DATABASE_URL'
```
### Replace your_API_key with the API KEY you have obtained from The Movie DB
### Make sure to keep the apostrophes
### After saving, run the main.py file in the terminal
### Follow the HTML link by holding control and clicking on the link in the terminal
### You should see a webpage that asks for you to login
### Create an account in the Sign Up page
### After signing up, it will redirect you to the Login page again
### Then, login with the sign up information
### Now, you should see the home page with a random popular movie
### It should have the title, poster, tagline, genre, and Wikipedia URL
### At the bottom of the page, you can comment and give a rating 
### You can also look at reviews made by others
### At the top of the page, you can click Home or Profile
### Home takes you to the regular webpage that has a random popular movie
### Profile takes you to a webpage that has all your comments
### With the comments, it has a movie ID
### You can click on this movie ID to go to the TMDB page for that specific movie
### You can also edit your reviews by clicking on the Edit Profile button, which is on the Profile Page
### On the Edit Profile Page, you can delete reviews that you no longer seem fit
### Editing Ratings and Comments can also be implemented, but I could not reach that point
### Lastly, if you refresh the home page, there should be a different random popular movie
### However, the size of the list of popular movies is 20,
### so there is a chance for the same movie to appear back-to-back
# Technical issues and how I solved them:
### 1)A technical issue was that I could not properly delete the reviews that I wanted to delete in the data
### I solved this by adding the indexes of the reviews I wanted to remove into an array, and then removing them from highest to lowest number
### 2)Another technical issue that I faced was that I could not properly use ESLint
### I solved this by deleting the node_modules and static folders and remaking them because I was messing with them for no reason; all I had to do was enable ESLint in the VSCode Settings
### 3)One more technical issue I had was that my python3 app.py would not always work
### I solved this by using:
```
ps -fA | grep python'
```
### in the terminal and then using:
```
kill -9 pid
```
### in the terminal as well. "pid" is the process ID associated with app.py
# Hardest Part of the Project for me:
### was that it would take a while for me to get used to frameworks that I have never worked with before as well as combining the features of multiple frameworks at once
# Most Useful thing that I learned from the Project:
### was that the rubber duck method actually works. Sometimes writing or thinking about code, which were simple and embarrassing problems most of the time, would go over my head. What helped me the most was taking a break and then going back to the code with a refreshed mindset.