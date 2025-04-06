# Donjon Generator Guide

## Core Settings for Our Game

### Dungeon Level & Party Size
- **Level**: 4 (Base difficulty)
- **Party Size**: 4 (Standard party)
- **Difficulty Levels**:
  - Easy: Level 4
  - Normal: Level 7
  - Hard: Level 10

### Size Settings
- **Dungeon Size**: Colossal (Custom)
  - Recommended: 20x20 to 30x30 grid
  - Why: Allows for meaningful exploration and use of character abilities
- **Room Size**: Medium to Large
  - Why: Creates challenging spaces that test character visibility ranges (5-8 tiles)

### Layout Options

#### Room Layout
- **Sparse**: Fewer rooms, more corridors
- **Scattered**: Random room placement
- **Dense**: Many rooms close together
- **Symmetric**: Balanced layout
- **Recommended**: Dense or Scattered
  - Why: Creates interesting exploration challenges for all character types

#### Corridors
- **Labyrinth**: Complex, winding paths
- **Errant**: Somewhat random paths
- **Straight**: Direct connections
- **Recommended**: Labyrinth or Errant
  - Why: Creates interesting navigation challenges

### Feature Settings

#### Doors
- **None**: No doors
- **Basic**: Simple doors
- **Secure**: Locked/barred doors
- **Standard**: Mix of door types
- **Deathtrap**: Trapped doors
- **Recommended**: Standard or Deathtrap
  - Why: Provides meaningful challenges for all character types

#### Stairs
- **No**: Single level
- **Yes**: Some stairs
- **Many**: Multiple levels
- **Recommended**: Yes
  - Why: Adds verticality without overwhelming complexity

#### Remove Deadends
- **None**: Keep all deadends
- **Some**: Remove some deadends
- **All**: Remove all deadends
- **Recommended**: Some
  - Why: Maintains some exploration challenge while preventing frustration

### Advanced Options

#### Polymorph Rooms
- **No**: Standard room shapes
- **Yes**: Some irregular rooms
- **Many**: Mostly irregular rooms
- **Recommended**: Yes
  - Why: Adds visual interest and tactical variety

#### Peripheral Egress
- **No**: No special exits
- **Yes**: Some special exits
- **Many**: Multiple special exits
- **Tiling**: Connects to other dungeon sections
- **Recommended**: Yes or Many
  - Why: Creates interesting exploration options

### Map Style
- **Recommended**: Standard or Classic
  - Why: Clear visibility of features and grid

### Grid Type
- **Recommended**: Square
  - Why: Matches our movement system

## Character-Specific Considerations

### For Knight/Viking
- Higher chance of locked/barred doors
- More physical traps
- More combat encounters

### For Wizards
- More magical traps
- More secret doors
- More magical features

### For Villager/Slave
- More hidden treasure
- More environmental features
- More tool-based challenges

## Recommended Configuration

```json
{
  "dungeon_size": "Colossal",
  "room_size": "Large",
  "room_layout": "Dense",
  "corridors": "Labyrinth",
  "doors": "Standard",
  "stairs": "Yes",
  "remove_deadends": "Some",
  "polymorph_rooms": "Yes",
  "peripheral_egress": "Yes",
  "map_style": "Standard",
  "grid": "Square"
}
```

This configuration will:
1. Create challenging but manageable dungeons
2. Provide meaningful interactions for all character types
3. Allow for interesting tactical decisions
4. Maintain good balance between exploration and combat
5. Support our character visibility system 

## Vertical Dungeon Design

### Level Structure and Exits

#### Level Entry/Exit System
```json
{
  "level_exits": {
    "level_1": {
      "entry": "Main Dungeon Entrance",
      "exits": ["Stairs Down", "Optional Side Exit"],
      "connections": ["Level 2"]
    },
    "level_2": {
      "entry": "Stairs from Level 1",
      "exits": ["Stairs Up", "Stairs Down", "Optional Side Exit"],
      "connections": ["Level 1", "Level 3"]
    },
    "level_3": {
      "entry": "Stairs from Level 2",
      "exits": ["Stairs Up", "Final Exit"],
      "connections": ["Level 2"]
    }
  }
}
```

### Level Transition Rules

1. **Stair Behavior**
   - Stairs connect specific points between levels
   - Up stairs on Level 1 connect to down stairs on Level 2
   - Each stair connection is a specific pair (not random)
   - Stairs can be one-way or two-way

2. **Exit Types**
   - **Main Entrance**: Only on Level 1
   - **Final Exit**: Only on Level 3
   - **Side Exits**: Optional exits on any level
   - **Stair Connections**: Specific point-to-point connections

3. **Level Progression**
   ```
   Level 1 (Entry Level)
   ├── Main Entrance
   ├── Optional Side Exit
   └── Stairs Down → Level 2
   
   Level 2 (Middle Level)
   ├── Stairs Up ← Level 1
   ├── Optional Side Exit
   └── Stairs Down → Level 3
   
   Level 3 (Final Level)
   ├── Stairs Up ← Level 2
   └── Final Exit
   ```

### Implementation Details

1. **Stair Placement**
   - Each level's stairs are placed in specific locations
   - Stair pairs are matched between levels
   - Stairs can be hidden or require special activation

2. **Exit Requirements**
   - Main Entrance: Always accessible
   - Final Exit: May require completing level objectives
   - Side Exits: May require special keys or abilities
   - Stairs: May have level-specific requirements

3. **Level State Tracking**
   - Track which exits are available
   - Track which stairs are discovered
   - Track which level objectives are completed
   - Maintain state between level transitions

### Character-Specific Exit Interactions

#### Knight/Viking
- Can force open blocked exits
- Better at finding hidden stair connections
- Can create temporary exits in emergencies

#### Wizards
- Can detect magical exits
- May create temporary portals between levels
- Can manipulate exit requirements

#### Villager/Slave
- Better at finding hidden exits
- Can create temporary passages
- More efficient at using side exits

### Recommended Exit Configuration
```json
{
  "exit_system": {
    "main_entrance": "Level 1",
    "final_exit": "Level 3",
    "side_exits": {
      "level_1": "Optional",
      "level_2": "Optional",
      "level_3": "None"
    },
    "stair_connections": {
      "level_1_to_2": "Required",
      "level_2_to_3": "Required",
      "return_paths": "Optional"
    },
    "exit_requirements": {
      "main_entrance": "None",
      "final_exit": "Level Complete",
      "side_exits": "Variable",
      "stairs": "Discovered"
    }
  }
}
```

This exit system:
1. Provides clear progression
2. Allows for optional exploration
3. Maintains level independence
4. Supports character-specific interactions
5. Creates meaningful choices

## Vertical Dungeon Design

### Stair Options
- **Single Level**: No vertical movement
- **Multiple Levels**: 2-3 connected levels
- **Tower Design**: Multiple floors with central connection
- **Underground**: Descending levels with increasing difficulty

### Recommended Vertical Structure
```json
{
  "vertical_design": {
    "max_levels": 3,
    "level_connections": "Stairs",
    "level_size": "30x30",
    "level_spacing": "Connected",
    "difficulty_progression": "Ascending"
  }
}
```

### Level Design Considerations

#### Level 1 (Ground/Entry Level)
- Size: 30x30
- Features:
  - Main entrance
  - Basic traps and puzzles
  - Easier combat encounters
  - More open spaces
  - Basic treasure

#### Level 2 (Middle Level)
- Size: 30x30
- Features:
  - More complex traps
  - Harder combat
  - Secret passages
  - Better treasure
  - Environmental hazards

#### Level 3 (Deep Level)
- Size: 30x30
- Features:
  - Most difficult challenges
  - Boss encounters
  - Best treasure
  - Complex puzzles
  - Magical features

### Vertical Movement Mechanics

#### Stair Types
1. **Normal Stairs**
   - Visible on map
   - No special requirements
   - Can move up/down freely

2. **Secret Stairs**
   - Hidden until discovered
   - May require special abilities to find
   - Often lead to special areas

3. **Magical Portals**
   - Instant transportation
   - May require magical activation
   - Can be one-way or two-way

#### Character-Specific Vertical Abilities

##### Knight/Viking
- Can force open stuck doors between levels
- Better at climbing/descending quickly
- Can carry more between levels

##### Wizards
- Can detect hidden stairs/portals
- May have limited teleportation
- Can manipulate magical portals

##### Villager/Slave
- Better at finding hidden passages
- Can create temporary bridges/ladders
- More efficient at carrying items between levels

### Vertical Gameplay Considerations

1. **Visibility System**
   - Each level has its own visibility grid
   - Characters can't see between levels
   - Special abilities may allow limited level-to-level vision

2. **Resource Management**
   - Items must be carried between levels
   - Some items may be level-specific
   - Consider weight limits for vertical movement

3. **Difficulty Progression**
   - Each level increases in difficulty
   - Monsters get stronger
   - Traps become more complex
   - Treasure becomes more valuable

4. **Backtracking**
   - Allow return to previous levels
   - Maintain progress between levels
   - Consider fast travel options

### Recommended Vertical Configuration
```json
{
  "vertical_settings": {
    "total_levels": 3,
    "level_size": "30x30",
    "stair_count": "Moderate",
    "secret_passages": "Some",
    "magical_portals": "Few",
    "difficulty_curve": "Steady",
    "backtracking": "Allowed"
  }
}
```

This vertical design:
1. Creates meaningful progression
2. Adds strategic depth
3. Works with our character abilities
4. Maintains good performance
5. Provides interesting gameplay choices 