// Inheritance
console.clear();

// We can now use functionalities defined for Player class
// as Player is now a "superclass" or "parent class" of PremiumPlayer
class PremiumPlayer extends Player {
  static totalPremiumPlayers = 0;
  static onlinePremiumPlayers = 0;

  constructor(name, rank) {
    super(name);
    this.rank = rank;
    PremiumPlayer.totalPremiumPlayers++;
  }

  // Polymorphism and shadowing
  login() {
    super.login();
    PremiumPlayer.onlinePremiumPlayers++;
  }

  logout() {
    super.logout();
    PremiumPlayer.onlinePremiumPlayers--;
  }

  addFriend(friends, greeting) {
    this.friends.push(...friends)
    console.log(`Added ${friends.length} friends!`);
    console.log(`Sent greeting to each of them: \n"${greeting}"`);
  }
}

const player1 = new PremiumPlayer("Player 1", "Gold user");
const Arthur = new PremiumPlayer("Arthur", "Diamond user");

player1.login();
Arthur.login();

player1.logout();

PremiumPlayer.logPlayers();

console.log(player1.username); // inherited public property
console.log(player1.rank); // extended public property
console.log(player1.online); // inherited private property via getter


console.log("Total premium:", PremiumPlayer.totalPremiumPlayers);
console.log("Online premium:", PremiumPlayer.onlinePremiumPlayers);


// Function overloading?
player1.addFriend([Arthur, first], "Hello");

/*
  This would call the Player.addFriend(friend) method
  But function overloading is not supported in JavaScript
  However it is supported in TypeScript
  It can differentiate between functions with same name, based on its arguments
  Allowing for different method behaviour based on its inputs

  BUT! It wouldn't work in this case!
  Because the function needs to have the same number of parameters.
  So it distinguishes two or more definitions of a function based on its inputs types
*/
// player1.addFriend(Arthur);
