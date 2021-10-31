<h1 align="center">SBFAFFIM</h1>
<h4 align="center">Simple but fast & flexible complete fortnite.io API module maybe</h4>
<p align="center">
	<a href="https://github.com/I2rys/SBFAFFIM/blob/main/LICENSE"><img src="https://img.shields.io/github/license/I2rys/SBFAFFIM?style=flat-square"></img></a>
	<a href="https://github.com/I2rys/SBFAFFIM/issues"><img src="https://img.shields.io/github/issues/I2rys/SBFAFFIM.svg"></img></a>
	<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/-Nodejs-green?style=flat-square&logo=Node.js"></img></a>
</p>


## Installation
Github:

    git clone https://github.com/I2rys/SBFAFFIM

NPM Packages:

    npm i request
    
## Usage
Challenges list

    FI.challenges_list(season, language)
    
Items list

    FI.items_list(language)
    
Upcoming items

    FI.upcoming_items(language)
    
Item details

    FI.item_details(item_id, language)

Daily shops
```
FI.daily_shops(language)
```

Rarities list
```
FI.rarities_list(language)
```

Get account ID
```
FI.get_account_id(username)
```

Player global stats
```
FI.global_player_stats(account_id)
```

Battle Royale/STW/Creative news
```
FI.br_stw_c_news(type, language)
```

Battle pass rewards
```
FI.battle_pass_rewards(season, language)
```

Achievements
```
FI.achievements(language)
```

Region tournaments list
```
FI.tournaments(region, language)
```

Tournaments details
```
FI.tournament_details(tournament_id)
```

Tournament scores
```
FI.tournament_scores(event_id)
```

Maps list
```
FI.maps_list()
```

Seasons list
```
FI.list_seasons(language)
```

Loot/Weapons list
```
FI.loot_weapons_list(language)
```

POIs list
```
FI.pois_list(language)
```

Gamemodes list
```
FI.gamemodes_list(language)
```

Islands list
```
FI.islands_list()
```

Fishes list
```
FI.fishes_list(language)
```

Player fish stats
```
FI.player_fish_stats(account_id)
```

Crews list
```
FI.crews_list(language)
```

Crews history
```
FI.crews_history(language)
```

Vehicle list
```
FI.vehicle_list()
```

## License
MIT © I2rys
