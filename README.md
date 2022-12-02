# FIFA API
An API that provides information about the teams, players and coachs that are in the fifa tournament

Endpoint: 

### TEAM ROUTES

###### Add a team:
- method: POST
- route: /fifa-teams
- body expected:
		name: String
		teamFlag: an url of the team flag
		teamBadge:  an url of the team badge

###### Get teams:
- method: GET
- route: /fifa-teams?page="?"&size=´"?"
- queries:
			page: Number, default is 1
			size: Number, default is 10

###### Get team:
- method: GET
- route: /fifa-teams/{id}
- params:
			id: String, id of the team

###### Update a team:
- method: PUT
- route: /fifa-teams/{id}
- params:
			id: String, id of the team
- body expected:
		name: String
		teamFlag: an url of the team flag
		teamBadge:  an url of the team badge

###### Delete team:
- method: DELETE
- route: /fifa-teams/{id}
- params:
			id: String, id of the team
------------
### PLAYER ROUTES

###### Add a player:
- method: POST
- route: /fifa-players
- body expected:
		firstName: String
		lastName: String
		photo: an url of the player
		age: Number
		birthday: Date
		playerPosition: String
		numberJearsy: Number
		isStartingPlayer: Boolean
		team: String, team id

###### Get players by team:
- method: GET
- route: /fifa-players
- body expected:
			teamId: String, team id

###### Get player:
- method: GET
- route: /fifa-players/{id}
- params:
			id: String, id of the player

###### Update a player:
- method: PUT
- route: /fifa-players/{id}
- params:
			id: String, id of the player
- body expected:
		firstName: String
		lastName: String
		photo: an url of the player
		age: Number
		birthday: Date
		playerPosition: String
		numberJearsy: Number
		isStartingPlayer: Boolean
		team: String, team id

###### Delete player:
- method: DELETE
- route: /fifa-players/{id}
- params:
			id: String, id of the player
------------
### COACHING ROUTES

###### Add a coach:
- method: POST
- route: /fifa-coaching
- body expected:
		firstName: String
		lastName: String
		age: Number
		birthday: Date
		nationatily: String
		rol: ['técnico', 'asistente', 'médico', 'preparador']
		team: String, team id

###### Get coaches by team:
- method: GET
- route: /fifa-coaching
- body expected:
			teamId: String, team id

###### Get coach:
- method: GET
- route: /fifa-coaching/{id}
- params:
			id: String, id of the coach

###### Update a coach:
- method: PUT
- route: /fifa-coach/{id}
- params:
			id: String, id of the coach
- body expected:
		firstName: String
		lastName: String
		age: Number
		birthday: Date
		nationatily: String
		rol: ['técnico', 'asistente', 'médico', 'preparador']
		team: String, team id

###### Delete coach:
- method: DELETE
- route: /fifa-coach/{id}
- params:
			id: String, id of the coach
------------
### INFO ROUTE

###### Get information of the teams, players and coaches:
- method: GET
- route: /fifa-info









