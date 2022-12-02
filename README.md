# FIFA API
An API that provides information about the teams, players and coachs that are in the fifa tournament

Endpoint: [https://rebus-tech-test.up.railway.app/api/v1](https://rebus-tech-test.up.railway.app/api/v1 "https://rebus-tech-test.up.railway.app/api/v1")

### TEAM ROUTES

###### Add a team:
- method: POST
- route: /fifa-teams
- body expected:
1. name: String
2. teamFlag: an url of the team flag
3. teamBadge:  an url of the team badge

###### Get teams:
- method: GET
- route: /fifa-teams?page="?"&size=´"?"
- queries:
1. page: Number, default is 1
2. size: Number, default is 10

###### Get team:
- method: GET
- route: /fifa-teams/{id}
- params:
1. id: String, id of the team

###### Update a team:
- method: PUT
- route: /fifa-teams/{id}
- params:
1. id: String, id of the team
- body expected:
1. name: String
2. teamFlag: an url of the team flag
3. teamBadge:  an url of the team badge

###### Delete team:
- method: DELETE
- route: /fifa-teams/{id}
- params:
1. id: String, id of the team

------------
### PLAYER ROUTES

###### Add a player:
- method: POST
- route: /fifa-players
- body expected:
1. firstName: String
2. lastName: String
3. photo: an url of the player
4. age: Number
5. birthday: Date
6. playerPosition: String
7. numberJearsy: Number
8. isStartingPlayer: Boolean
9. team: String, team id

###### Get players by team:
- method: GET
- route: /fifa-players
- body expected:
1. teamId: String, team id

###### Get player:
- method: GET
- route: /fifa-players/{id}
- params:
1. id: String, id of the player

###### Update a player:
- method: PUT
- route: /fifa-players/{id}
- params:
1. id: String, id of the player
- body expected:
1. firstName: String
2. lastName: String
3. photo: an url of the player
4. age: Number
5. birthday: Date
6. playerPosition: String
7. numberJearsy: Number
8. isStartingPlayer: Boolean
9. team: String, team id

###### Delete player:
- method: DELETE
- route: /fifa-players/{id}
- params:
1. id: String, id of the player

------------
### COACHING ROUTES

###### Add a coach:
- method: POST
- route: /fifa-coaching
- body expected:
1. firstName: String
2. lastName: String
3. age: Number
4. birthday: Date
5. nationatily: String
6. rol: ['técnico', 'asistente', 'médico', 'preparador']
7. team: String, team id

###### Get coaches by team:
- method: GET
- route: /fifa-coaching
- body expected:
1. teamId: String, team id

###### Get coach:
- method: GET
- route: /fifa-coaching/{id}
- params:
1. id: String, id of the coach

###### Update a coach:
- method: PUT
- route: /fifa-coach/{id}
- params:
1. id: String, id of the coach
- body expected:
1. firstName: String
2. lastName: String
3. age: Number
4. birthday: Date
5. nationatily: String
6. rol: ['técnico', 'asistente', 'médico', 'preparador']
7. team: String, team id

###### Delete coach:
- method: DELETE
- route: /fifa-coach/{id}
- params:
1. id: String, id of the coach

------------
### INFO ROUTE

###### Get information of the teams, players and coaches:
- method: GET
- route: /fifa-info









