# Game Rules and Mechanics

## Character Selection System

### Base Stats (All characters start with these)
- Health Points (HP): 20
- Movement Speed: 1 tile per action

### Character Classes (Choose one before entering dungeon)

#### Knight (Sword)
- Stats:
  - Strength: +3
  - Constitution: +3
  - Intelligence: -1
  - Wisdom: -1
  - Dexterity: 0
- Special Abilities:
  - Door Breaking: +5 to DC checks
  - Trap Resistance: +3 to save throws
  - Combat: +2 to attack rolls (1d8 damage)
- Visibility: Standard (5 tiles)
- Weapon: Sword (balanced damage)

#### Viking (Broad Axe)
- Stats:
  - Strength: +4
  - Constitution: +2
  - Intelligence: -2
  - Wisdom: 0
  - Dexterity: -1
- Special Abilities:
  - Door Breaking: +7 to DC checks
  - Heavy Attack: +3 to attack rolls (1d10 damage)
  - Berserk: Can attack twice when below 50% HP
- Visibility: Standard (5 tiles)
- Weapon: Broad Axe (high damage, slow)

#### Wizard (Staff)
- Stats:
  - Intelligence: +3
  - Wisdom: +3
  - Strength: -2
  - Constitution: -2
  - Dexterity: 0
- Special Abilities:
  - Magic Detection: Automatically detects any magical features in current room
  - Magical Interaction: +5 to DC checks for magical puzzles and locks
  - Arcane Insight: Can identify magical properties of items and features
- Visibility: Magical (sees magical traps and features)
- Weapon: Staff (1d4 damage, +2 to magical interactions)

#### Dark Wizard (Dark Staff)
- Stats:
  - Intelligence: +4
  - Wisdom: +2
  - Strength: -3
  - Constitution: -3
  - Dexterity: +1
- Special Abilities:
  - Dark Vision: Sees in darkness and detects hidden magical features
  - Curse Detection: Automatically identifies cursed items and dark magic
  - Dark Manipulation: Can interact with any dark magical features
- Visibility: Extended in darkness (8 tiles)
- Weapon: Dark Staff (1d4 damage, +3 to dark magical interactions)

#### Villager (Hammer)
- Stats:
  - Strength: +2
  - Constitution: +2
  - Intelligence: +1
  - Wisdom: +2
  - Dexterity: +1
- Special Abilities:
  - Tool Use: +4 to DC checks
  - Resourceful: Can find extra items
  - Crafting: Can repair items
- Visibility: Standard (5 tiles)
- Weapon: Hammer (1d6 damage, +2 to tool use)

#### Slave (Wooden Sword)
- Stats:
  - Strength: +1
  - Constitution: +1
  - Intelligence: 0
  - Wisdom: +1
  - Dexterity: +2
- Special Abilities:
  - Stealth: +4 to hide checks
  - Survival: +3 to save throws
  - Quick Movement: Can move twice per turn
- Visibility: Enhanced (7 tiles)
- Weapon: Wooden Sword (1d4 damage, +2 to speed)

## Interaction with Donjon Data

### Doors
- Normal Doors: Open automatically
- Locked Doors: DC check based on character stats
  - Base DC from Donjon data
  - Add character modifiers
  - Success = open, Failure = stuck
- Secret Doors: Detection check
  - Base DC from Donjon data
  - Character modifiers apply
  - Some classes auto-detect

### Traps
- Detection:
  - Base DC from Donjon data
  - Character modifiers apply
  - Some classes auto-detect
- Disarming:
  - Base DC from Donjon data
  - Character modifiers apply
  - Failure triggers trap
- Effects:
  - Damage based on Donjon data
  - Save throws with character modifiers

### Room Features
- Special Features (mosaics, chutes, etc.):
  - Detection based on character stats
  - Interaction DCs from Donjon data
  - Character-specific bonuses
- Environmental Effects:
  - Apply to all characters
  - Some classes may resist

### Monsters
- Encounter Difficulty:
  - Based on Donjon CR
  - Adjusted by character level
  - Some classes better against specific types
- Combat:
  - Attack rolls with character modifiers
  - Damage based on character stats
  - Special abilities may apply

### Treasure
- Finding:
  - Some classes auto-detect
  - Others need to search
  - DCs from Donjon data
- Types:
  - Gold (pp, gp, sp, cp)
  - Items
  - Special artifacts
- Distribution:
  - Based on Donjon data
  - Character bonuses may apply

## Game Flow

1. **Character Selection**
   - Choose class
   - Review stats and abilities
   - Understand strengths/weaknesses

2. **Dungeon Entry**
   - Start at entrance
   - Apply character visibility
   - Begin exploration

3. **Room Interaction**
   - Automatic features based on class
   - DC checks for hidden elements
   - Character-specific bonuses
   - Record discoveries

4. **Combat Resolution**
   - Automatic based on stats
   - Character abilities apply
   - Record outcomes

5. **Progress Tracking**
   - Individual per character
   - Record discoveries
   - Track resources
   - Note special finds

## Important Notes
1. All DCs come from Donjon data
2. Character stats modify these DCs
3. Some abilities bypass DCs entirely
4. Each character has unique advantages
5. No real-time dice rolling
6. Outcomes pre-determined by stats

## Combat System (Choose one)

1. **Simple Combat**
   - Attack vs Defense
   - Fixed damage
   - No special moves
   - Quick resolution

2. **Tactical Combat**
   - Turn-based
   - Special abilities
   - Position matters
   - Resource management

3. **Automatic Combat**
   - Stats determine outcome
   - No player input
   - Quick resolution
   - Focus on preparation

## Interaction System

### Doors (Choose options)
1. **Types**
   - Normal (open/close)
   - Locked (need key/skill)
   - Trapped (trigger effects)
   - Secret (hidden)
   - Magical (special rules)

2. **Actions**
   - Open
   - Close
   - Lock
   - Unlock
   - Break
   - Search
   - Listen

### Traps (Choose options)
1. **Types**
   - Mechanical (pressure plates)
   - Magical (spell traps)
   - Environmental (falling rocks)
   - Poison (contact/dart)
   - Mental (illusions)

2. **Detection**
   - Automatic for some classes
   - Skill check for others
   - Time spent searching
   - Equipment bonuses

### Treasure (Choose options)
1. **Types**
   - Gold/coins
   - Equipment
   - Potions
   - Scrolls
   - Artifacts
   - Keys

2. **Finding**
   - Automatic for some classes
   - Search required
   - Hidden in objects
   - Guarded by traps

## Progression System (Choose one)

1. **Experience Points**
   - Gain XP from:
     - Defeating monsters
     - Finding treasure
     - Solving puzzles
     - Exploring new areas
   - Level up for stat increases

2. **Skill-Based**
   - Improve by using skills
   - No levels
   - Direct stat increases
   - Learn new abilities

3. **Achievement-Based**
   - Complete challenges
   - Unlock abilities
   - No traditional progression
   - Focus on exploration

## Win Conditions (Choose options)

1. **Exploration**
   - Find the exit
   - Discover all rooms
   - Find specific items
   - Map the dungeon

2. **Combat**
   - Defeat boss monster
   - Clear all enemies
   - Survive waves
   - Protect NPCs

3. **Puzzle**
   - Solve main puzzle
   - Collect artifacts
   - Activate mechanisms
   - Unlock secrets

## Loss Conditions (Choose options)

1. **Health**
   - Reach 0 HP
   - Critical wounds
   - Poison death
   - Trap death

2. **Resources**
   - Run out of food
   - No light sources
   - Out of equipment
   - Time limit

3. **Other**
   - Trapped forever
   - Cursed
   - Insanity
   - Lost in maze

## Time System (Choose one)

1. **Real-Time**
   - Continuous time
   - Day/night cycle
   - Time-based events
   - Resource consumption

2. **Turn-Based**
   - Player actions take time
   - Monsters move on turns
   - Resource management
   - Strategic planning

3. **Hybrid**
   - Exploration real-time
   - Combat turn-based
   - Mixed mechanics
   - Flexible pacing

## Visibility System (Choose options)

1. **Line of Sight**
   - See only what's visible
   - Walls block view
   - Distance matters
   - Light sources needed

2. **Fog of War**
   - Remember explored areas
   - Darken unexplored
   - Different per character
   - Can be cleared

3. **Special Vision**
   - Darkvision for some
   - Magic detection
   - Trap sight
   - Secret door detection

## Save System (Choose one)

1. **Checkpoints**
   - Save at specific points
   - Limited saves
   - Strategic planning
   - Risk management

2. **Continuous**
   - Save anywhere
   - Auto-save
   - Multiple slots
   - No restrictions

3. **Ironman**
   - No saves
   - One life
   - High stakes
   - Permanent choices 