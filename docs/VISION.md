# It's Hidden - Text-Based Dungeon Adventure

## Overview
A multiplayer dungeon adventure game combining a top-down 2D visual representation with text-based interaction. Players explore procedurally generated dungeons, make choices, and face challenges based on their character type and pre-determined outcomes. Designed for mobile-first experience with web support through device-like window rendering.

## Core Features

### 1. Visual Interface
- Mobile-first design:
  - Optimized for smartphone screens
  - Portrait orientation
  - Touch-friendly controls
- Web implementation:
  - Rendered inside device-like window
  - Maintains mobile aspect ratio
  - Responsive scaling
- Split-screen layout:
  - Top (50%): Top-down 2D dungeon view
  - Bottom (50%): Text-based interaction
  - Optimized for mobile viewport
- Visual elements using Kenney Tiny Dungeon assets:
  - 16x16 pixel art style
  - Room tiles and features
  - Character sprites
  - Items and objects
  - UI elements
  - Optimized for mobile display
- Fog of War system:
  - Reveals explored areas
  - Character-specific visibility
  - Maintains exploration mystery
  - Touch-friendly reveal mechanics

### 2. Dungeon Generation
- Utilizes Donjon 5.5 Dungeon Generator
- Customizable dungeon parameters:
  - Size and layout
  - Room density and complexity
  - Door and trap frequency
  - Theme/motif selection
- Visual mapping of generated elements:
  - Room layouts
  - Door types and positions
  - Trap locations
  - Special features
  - Treasure placement

### 3. Character System
- Multiple character types with unique attributes:
  - Warrior: High strength, low perception
  - Rogue: High dexterity, medium perception
  - Mage: High intelligence, low strength
  - Cleric: High wisdom, medium strength
  - Ranger: Balanced stats, high perception
- Character-specific visual elements:
  - Unique sprites
  - Special ability effects
  - Visibility patterns
  - Interaction indicators

### 4. Hybrid Outcome System
- Combines character stats with pre-determined outcomes
- No real-time dice rolling
- Outcomes influenced by:
  - Character type and stats
  - Room difficulty
  - Previous choices
  - Game state

### 5. Multiplayer Architecture
- Asynchronous gameplay
- Individual player progress tracking
- Independent room states per player
- Shared dungeon layout
- No player-to-player interaction required

## Game Mechanics

### Room Interaction
- Visual representation of:
  - Room layout and features
  - Player position
  - Discovered elements
  - Active traps and monsters
- Text-based interaction for:
  - Detailed descriptions
  - Available actions
  - Choice outcomes
  - Status updates

### Character-Specific Mechanics
- Different success rates based on character type
- Unique abilities per character class
- Class-specific interaction options
- Specialized skill checks
- Character-specific visibility patterns

### Progress System
- Individual progress tracking
- Discovered secrets
  - Revealed on visual map
  - Documented in text log
- Found treasures
- Defeated monsters
- Unlocked areas

## Technical Implementation

### Data Structure
- Dungeon layout (fixed)
- Room features and connections
- Character states
- Player progress
- Outcome tables
- Visual asset mapping

### State Management
- Room states per player
- Character states
- Inventory tracking
- Progress tracking
- Encounter states
- Fog of war states

### Visual System
- Asset management
- Sprite rendering
- Fog of war implementation
- Character animations
- Effect overlays
- Mobile-optimized rendering
- Touch input handling
- Device window simulation for web

### UI/UX Considerations
- Touch-friendly controls
- Mobile-optimized text display
- Responsive layout adjustments
- Gesture support
- Accessibility features
- Screen size adaptation
- Input method detection
- Performance optimization

## Future Considerations
- Additional character types
- More complex interaction systems
- Expanded outcome tables
- Save/load functionality
- Achievement system
- Custom asset additions
- Enhanced visual effects

## Example Gameplay Flow
1. Player selects character type
2. Enters generated dungeon
3. Views top-down map with fog of war
4. Receives text-based room description
5. Makes choices based on character abilities
6. Sees visual updates of discoveries
7. Receives text outcomes of actions
8. Progresses through dungeon
9. Tracks individual progress 