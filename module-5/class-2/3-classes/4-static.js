// Static

class Player {
  static totalPlayers = 0;
  static onlinePlayers = 0;

  #isOnline;

  constructor(username) {
    this.username = username;
    this.#isOnline = false;
    this.friends = [];

    Player.totalPlayers++;
  }

  get online() {
    return this.#isOnline;
  }

  login() {
    if (this.#isOnline) return;
    this.#isOnline = true;

    Player.onlinePlayers++;
  }

  logout() {
    if (!this.#isOnline) return;
    this.#isOnline = false;

    Player.onlinePlayers--;
  }

  addFriend(player) {
    this.friends.push(player);
    console.log(`Added friend: ${player.username}`);
  }

  static logPlayers() {
    const count = `[${Player.onlinePlayers}/${Player.totalPlayers}]`;
    const percent = Player.onlinePlayers / Player.totalPlayers * 100;
    console.log(`${count}:  ${percent.toFixed(2)}% players online`);
  }
}


const first = new Player("First_1");
const second = new Player("Second_2");

first.login();
second.login();

first.logout();

const third = new Player("Third_3");

console.log("Total:", Player.totalPlayers);
console.log("Online", Player.onlinePlayers);

// console.log(Player.totalPlayers);

Player.logPlayers();
