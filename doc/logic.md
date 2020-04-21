*Note: data structures and other formats subject to change.*
# Card deck format (subject to change!)
## Card object
A `Card()` object is an object that defines one card.
It has a `number` (0-12, corresponding to 2-10, jack, queen, king, and ace) and
a `suit`, one of `diamonds`, `hearts`, `spades`, and `clubs`.
It also has a `config` object, which is used to configure comparisons and other
logic based on the specific rules of the game being played.
Currently, `config` has one key: `acesHigh`, which determines whether aces are
the highest or lowest card.

## Representing decks
Decks are represented as an array of `Card()` objects.

#   Game logic
##  Shithead
### Beginning
Shuffle standard deck of 52 cards, then deal each player three cards face down,
three cards face up, and a hand of three cards.
When all players have been dealt these cards, the excess goes in a draw pile.
This is represented as shown below.
```
Write something here.
```
At this point, players are allowed to swap cards between their hand and their
face-up cards.
Once everyone is satisfied, play begins with the player holding the lowest card
in their hand; ties are broken by proximity to the dealer, going clockwise.

### Gameplay
Play proceeds clockwise.
In a player's turn, they may play any card equal to or higher than the current
card, a two, or a ten.
If a player has multiple cards of a number in their hand, they may play any
number of these cards at the same time.
If by playing a card the player's hand has fewer than three cards in it, the
player must draw from the draw pile such that their hand has three cards in it.
*If and only if* a player is unable to play any card, they must pick up the
entire deck and add it to their hand.

When the draw pile is exhausted, the players play as normal but without
replenishing their hand.
When a player's hand is depleted, the player starts playing from the face-up
cards in front of them; when these cards are depleted, the player plays the
face-down cards without looking at them.

#### Special cards
* A two may be played at any time and resets the deck to its lowest value,
allowing the play of any card.

* A ten is similar to a two, but clears the deck as well and allows the player
to play any card following the ten.

* When four cards of the same number appear on the deck, an effect similar to
that of a ten results.

### Winning conditions
The first player who completely exhausts all of their cards (*i.e.* their hand,
their face-down cards, and their face-down cards) wins.

## Cribbage
TODO: write documentation on Cribbage.
