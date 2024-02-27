# Kick-offKickOff
KickOff is a mobile application developed with React Native Expo that allows users to view live football matches. Users can follow their favorite teams and players, get real-time updates on match scores, and check detailed player statistics. The application offers a complete experience for football enthusiasts to stay connected with the action of the latest matches.

## Usage
git clone https://github.com/abrache01/kickoff.git cd kickoff npm install

Run the App npm start

## Testing
Tests for this application are conducted using Jest and Jest-Expo. At least two components are subjected to testing. npm test

## State Management
Redux is used to manage the state of the application.

## Dockerization
To dockerize the application, run the following commands: docker build -t kickoff . docker run -p 3000:3000 kickoff

## API Access
Access the match API by creating an account and obtaining an access token: API Documentation: SportMonks API

# Screens
### Screen 1: Matches
Description: Displays a list of football matches. Features: Display all matches. Filter matches by "All Matches" or "Live Matches". Save a match with all information in the favorites screen. Components: Two filter buttons: "All Matches" and "Live Matches". List of matches. Navigation: By default, displays all matches. Selecting "Live Matches" displays only live matches.

### Screen 2: Match Details
Description: Displays detailed information about a selected match (teams, date, time, leagues, season, etc.). Features: Option to return to the matches screen. Components: Match details. Button to return to the matches screen. Accessible from the matches screen by selecting a specific match.

### Screen 3: Players
Description: Displays a list of all players with their photo and full name. Features: Display all players with their photo and full name. Ability to search for a player by name. Components: Search field to search for a player by name. List of players with their photo and full name. Navigation: Clicking on a player from the list redirects the user to the player details screen.

### Screen 4: Player Details
Description: Displays detailed information about a selected player. Features: Display player details such as height, weight, date of birth, country, etc. Option to return to the players screen. Components: Player details (height, weight, date of birth, country, etc.). Button to return to the players screen. Navigation: Accessible from the players screen by selecting a specific player.
