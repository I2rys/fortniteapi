// Dependencies
const axios = require('axios').default;
const { version: packageVersion } = require('./package.json');

// Main
class FI {
  constructor(apiKey) {
    if (!apiKey) throw new Error('Please provide an API key');
    this.apiKey = apiKey;

    this.axios = axios.create({
      method: 'GET',
      baseURL: 'https://fortniteapi.io',
      headers: {
        Authorization: this.apiKey,
        'User-Agent': `SBFAFFIM/${packageVersion}`,
      },
    });
  }

  async send_request(url, query) {
    const queryString = query ? `?${new URLSearchParams(query)}` : '';

    try {
      const resp = await this.axios({
        url: `${url}${queryString}`,
      });

      if (resp.data.code) {
        throw new Error(`API request failed with code ${resp.data.code}`);
      }

      return resp.data;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.code) {
        throw new Error(`API request failed with code ${err.response.data.code}`);
      }

      throw err;
    }
  }

  async challenges_list(season = 'current', lang = 'en') {
    return this.send_request('/v2/challenges', {
      season,
      lang,
    });
  }

  async items_list(lang = 'en') {
    return this.send_request('/v2/items/list', {
      lang,
    });
  }

  async upcoming_items(lang = 'en') {
    return this.send_request('/v2/items/upcoming', {
      lang,
    });
  }

  async item_details(item_id = 'CID_242_Athena_Commando_F_Bullseye', lang = 'en') {
    return this.send_request('/v2/items/get', {
      id: item_id,
      lang,
    });
  }

  async sets_list(lang = 'en') {
    return this.send_request('/v2/items/sets', {
      lang,
    });
  }

  async daily_shops(lang = 'en') {
    return this.send_request('/v2/shop', {
      lang,
    });
  }

  async rarities_list(lang = 'en') {
    return this.send_request('/v2/rarities', {
      lang,
    });
  }

  async get_account_id(username) {
    const account = await this.send_request('/v1/lookup', {
      username,
    });

    return account.account_id;
  }

  async global_player_stats(username_or_id) {
    const account = username_or_id.length === 32 ? username_or_id : await this.get_account_id(username_or_id);

    return this.send_request('/v1/stats', {
      account,
    });
  }

  async br_stw_c_news(type = 'br', lang = 'en') {
    return this.send_request('/v1/news', {
      type,
      lang,
    });
  }

  async battle_pass_rewards(season = 'current', lang = 'en') {
    return this.send_request('/v2/battlepass', {
      season,
      lang,
    });
  }

  async achievements(lang = 'en') {
    return this.send_request('/v1/achievements', {
      lang,
    });
  }

  async tournaments(region = 'NAE', lang = 'en') {
    return this.send_request('/v1/events/list', {
      region,
      lang,
    });
  }

  async tournament_details(window_id) {
    return this.send_request('/v1/events/window', {
      windowId: window_id,
    });
  }

  async tournament_scores(event_id) {
    return this.send_request('/v1/events/cumulative', {
      eventId: event_id,
    });
  }

  async maps_list() {
    return this.send_request('/v1/maps/list');
  }

  async list_seasons(lang = 'en') {
    return this.send_request('/v1/seasons/list', {
      lang,
    });
  }

  async loot_weapons_list(lang = 'en') {
    return this.send_request('/v1/loot/list', {
      lang,
    });
  }

  async pois_list(lang = 'en') {
    return this.send_request('/v2/game/poi', {
      lang,
    });
  }

  async gamemodes_list(lang = 'en') {
    return this.send_request('/v1/game/modes', {
      lang,
    });
  }

  async islands_list() {
    return this.send_request('/v1/creative/featured');
  }

  async fishes_list(lang = 'en') {
    return this.send_request('/v1/loot/fish', {
      lang,
    });
  }

  async player_fish_stats(username_or_id) {
    const accountId = username_or_id.length === 32 ? username_or_id : await this.get_account_id(username_or_id);

    return this.send_request('/v1/stats/fish', {
      accountId,
    });
  }

  async crews_list(lang = 'en') {
    return this.send_request('/v2/crew', {
      lang,
    });
  }

  async crews_history(lang = 'en') {
    return this.send_request('/v2/crew/history', {
      lang,
    });
  }

  async vehicles_list() {
    return this.send_request('/v2/game/vehicles');
  }
}

// Exporter
module.exports = {
  FI,
};
