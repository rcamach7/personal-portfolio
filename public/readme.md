# Catch the Falling Objects Game Guide

Here's a step-by-step guide to help you create the "Catch the Falling Objects" game in Scratch.

## Step 1: Set Up the Project

1. **Create a New Project**: Open Scratch and click on "Create" to start a new project.
2. **Rename the Project**: Click on the project name at the top and rename it to "Catch the Falling Objects".

## Step 2: Create the Sprites

1. **Create the Catcher**:
   - Click on the "Choose a Sprite from Library" button.
   - Select a sprite that will be the catcher (e.g., a basket, character, etc.).
   - Position the sprite at the bottom of the screen.

2. **Create the Falling Objects**:
   - Click on the "Choose a Sprite from Library" button.
   - Select a sprite for the falling objects (e.g., apples, stars, etc.).
   - Position the sprite at the top of the screen.

## Step 3: Code the Catcher Sprite

1. **Move with Arrow Keys**:
   - Click on the catcher sprite to start coding it.
   - Drag the "when green flag clicked" block to the coding area.
   - Add a "forever" block.
   - Inside the "forever" block, add an "if" block and a "key right arrow pressed?" block.
   - Inside the "if" block, add a "change x by 10" block.
   - Duplicate the "if" block and change it to "key left arrow pressed?" and "change x by -10".

   ```scratch
   when green flag clicked
   forever
     if <key [right arrow v] pressed?> then
       change x by (10)
     end
     if <key [left arrow v] pressed?> then
       change x by (-10)
     end
   end
   ```

## Step 4: Code the Falling Objects
1. Falling Motion:
   - Click on the falling object sprite to start coding it.
   - Drag the "when green flag clicked" block to the coding area.
   - Add a "forever" block.
   - Inside the "forever" block, add a "go to x: (pick random -240 to 240) y: 180" block.
   - Add a "repeat until <y position < -180>" block inside the "forever" block.
   - Inside the "repeat until" block, add a "change y by -5" block.
   - After the "repeat until" block, add a "wait (1) seconds" block.
   ```scratch
    when green flag clicked
    forever
      go to x: (pick random (-240) to (240)) y: (180)
      repeat until <(y position) < (-180)>
        change y by (-5)
        if <touching [Catcher v]?> then
          go to x: (pick random (-240) to (240)) y: (180)
        end
      end
      wait (1) seconds
    end
   ```

2. Catching the Objects:
  - Inside the "repeat until" block, add an "if <touching [Catcher v]?>" block.
  - Inside the "if" block, add a "go to x: (pick random -240 to 240) y: 180" block to reset the position of the falling object.
   ```scratch
  when green flag clicked
  forever
    go to x: (pick random (-240) to (240)) y: (180)
    repeat until <(y position) < (-180)>
      change y by (-5)
      if <touching [Catcher v]?> then
        go to x: (pick random (-240) to (240)) y: (180)
      end
    end
    wait (1) seconds
  end
   ```

## Step 5: Add Scoring
1. Create a Score Variable:
  - Click on the "Variables" category in the blocks palette.
  - Click "Make a Variable" and name it "Score".

2. Increase Score:
   - Go back to the falling object sprite.
   - Inside the "if <touching [Catcher v]?>" block, add a "change [Score v] by 1" block before resetting the position.
  ```scratch
    when green flag clicked
    forever
      go to x: (pick random (-240) to (240)) y: (180)
      repeat until <(y position) < (-180)>
        change y by (-5)
        if <touching [Catcher v]?> then
          change [Score v] by (1)
          go to x: (pick random (-240) to (240)) y: (180)
        end
      end
      wait (1) seconds
    end
  ```

## Step 6: Game Over Condition

1. Add a Game Over Screen:
   - Create a new sprite or backdrop for the game over screen.

2. Show Game Over When Object Falls:
   - In the falling object sprite, inside the "repeat until" block, add an "if <(y position) < -180>" block.
   - Inside the "if" block, add a "switch backdrop to [Game Over v]" block and a "stop all" block.

```scratch
when green flag clicked
forever
  go to x: (pick random (-240) to (240)) y: (180)
  repeat until <(y position) < (-180)>
    change y by (-5)
    if <touching [Catcher v]?> then
      change [Score v] by (1)
      go to x: (pick random (-240) to (240)) y: (180)
    end
    if <(y position) < (-180)> then
      switch backdrop to [Game Over v]
      stop [all v]
    end
  end
  wait (1) seconds
end
```
