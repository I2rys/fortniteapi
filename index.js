//Dependencies
const Request = require("request")

//Variables
var Self = {}
Self.api_down = "It looks like the API is down, please try again later."

//Main
function FI(api_key = String){
    this.challenges_list = async function(season = String = "current", language = String = "en"){
        return new Promise((resolve)=>{
            if(!season){
                season = "current"
            }
    
            if(!language){
                language = "en"
            }
    
            Request(`https://fortniteapi.io/v2/challenges?season=${season}&lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the season, language & api_key is valid.")
                }
            })
        })
    }

    this.items_list = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }
    
            Request(`https://fortniteapi.io/v2/items/list?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }

    this.upcoming_items = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }
    
            Request(`https://fortniteapi.io/v2/items/upcoming?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }
    
    this.item_details = async function(item_id = String = "CID_242_Athena_Commando_F_Bullseye", language = String = "en"){
        return new Promise((resolve)=>{
            if(!item_id){
                item_id = "CID_242_Athena_Commando_F_Bullseye"
            }

            if(!language){
                language = "en"
            }
    
            Request(`https://fortniteapi.io/v2/items/get?id=${item_id}&lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the item_id, language & api_key is valid.")
                }
            })
        })
    }

    this.sets_list = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }
    
            Request(`https://fortniteapi.io/v2/items/sets?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }

    this.daily_shops = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }
    
            Request(`https://fortniteapi.io/v2/shop?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }

    this.rarities_list = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }
    
            Request(`https://fortniteapi.io/v2/rarities?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }

    this.get_account_id = async function(username = String = "Ninja"){
        return new Promise((resolve)=>{
            if(!username){
                username = "Ninja"
            }
    
            Request(`https://fortniteapi.io/v1/lookup?username=${username}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the username & api_key is valid.")
                }
            })
        })
    }

    this.global_player_stats = async function(account_id = String = "8d0e3c7416f143fabbf1668e7f30e778"){
        return new Promise((resolve)=>{
            if(!account_id){
                account_id = "8d0e3c7416f143fabbf1668e7f30e778"
            }
    
            Request(`https://fortniteapi.io/v1/stats?account=${account_id}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the account_id & api_key is valid.")
                }
            })
        })
    }

    this.br_stw_c_news = async function(type = String = "br", language = String = "en"){
        return new Promise((resolve)=>{
            if(!type){
                type = "br"
            }

            if(!language){
                language = "en"
            }
    
            Request(`https://fortniteapi.io/v1/news?lang=${language}&type=${type}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the type, language & api_key is valid.")
                }
            })
        })
    }

    this.battle_pass_rewards = async function(season = String = "current", language = String = "en"){
        return new Promise((resolve)=>{
            if(!season){
                season = "current"
            }

            if(!language){
                language = "en"
            }
    
            Request(`https://fortniteapi.io/v2/battlepass?lang=${language}&season=${season}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the season, language & api_key is valid.")
                }
            })
        })
    }

    this.achievements = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }
    
            Request(` https://fortniteapi.io/v1/achievements?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }

    this.tournaments = async function(region = String = "NAE", language = String = "en"){
        return new Promise((resolve)=>{
            if(!region){
                region = "NAE"
            }

            if(!language){
                language = "en"
            }
    
            Request(`https://fortniteapi.io/v1/events/list?lang=${language}&region=${region}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the region, language & api_key is valid.")
                }
            })
        })
    }

    this.tournament_details = async function(tournament_id = String = "S11_CC_Contenders_EU_Event1"){
        return new Promise((resolve)=>{
            if(!tournament_id){
                tournament_id = "S11_CC_Contenders_EU_Event1"
            }
    
            Request(`https://fortniteapi.io/v1/events/window?windowId=${tournament_id}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the tournament_id & api_key is valid.")
                }
            })
        })
    }

    this.tournament_scores = async function(event_id = String = "epicgames_S14_FNCS_Qualifier1_EU_PC"){
        return new Promise((resolve)=>{
            if(!event_id){
                event_id = "epicgames_S14_FNCS_Qualifier1_EU_PC"
            }
    
            Request(`https://fortniteapi.io/v1/events/cumulative?eventId=${event_id}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the event_id & api_key is valid.")
                }
            })
        })
    }

    this.maps_list = async function(){
        return new Promise((resolve)=>{
            Request("https://fortniteapi.io/v1/maps/list", {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the api_key is valid.")
                }
            })
        })
    }

    this.list_seasons = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }

            Request(`https://fortniteapi.io/v1/seasons/list?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }

    this.loot_weapons_list = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }

            Request(`https://fortniteapi.io/v1/loot/list?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }

    this.pois_list = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }

            Request(`https://fortniteapi.io/v2/game/poi?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }

    this.gamemodes_list = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }

            Request(`https://fortniteapi.io/v1/game/modes?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }

    this.islands_list = async function(){
        return new Promise((resolve)=>{
            Request("https://fortniteapi.io/v1/creative/featured", {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the api_key is valid.")
                }
            })
        })
    }

    this.fishes_list = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }

            Request(`https://fortniteapi.io/v1/loot/fish?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the api_key is valid.")
                }
            })
        })
    }

    this.player_fish_stats = async function(account_id = String = "cfd16ec54126497ca57485c1ee1987dc"){
        return new Promise((resolve)=>{
            if(!account_id){
                account_id = "cfd16ec54126497ca57485c1ee1987dc"
            }

            Request(`https://fortniteapi.io/v1/stats/fish?accountId=${account_id}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the account_id & api_key is valid.")
                }
            })
        })
    }

    this.crews_list = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }

            Request(`https://fortniteapi.io/v2/crew?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the account_id & api_key is valid.")
                }
            })
        })
    }

    this.crews_history = async function(language = String = "en"){
        return new Promise((resolve)=>{
            if(!language){
                language = "en"
            }

            Request(`https://fortniteapi.io/v2/crew/history?lang=${language}`, {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the language & api_key is valid.")
                }
            })
        })
    }

    this.vehicles_list = async function(){
        return new Promise((resolve)=>{
            Request("https://fortniteapi.io/v2/game/vehicles", {
                "headers": {
                    "Authorization": api_key
                }
            }, function(err, res, body){
                if(err){
                    resolve(Self.api_down)
                }
    
                body = JSON.parse(body)
    
                if(body.result){
                    resolve(body)
                }else{
                    resolve("Please make sure the api_key is valid.")
                }
            })
        })
    }
}

//Exporter
module.exports = {
    FI: FI
}
