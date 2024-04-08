//3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const rows = 20;
const cols = 20;

  const grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
const grid1 = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
 
]
  function findRoutes(grid) {
    for (let i = 0; i < rows; i++) {
      grid[i][0] = 1;
    }

    for (let j = 0; j < cols; j++) {
      grid[0][j] = 1;
    }

    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
      }

    }

    return grid[rows - 1][cols - 1];
  }

  const routes = findRoutes(grid);
  console.log("Total number of routes:", routes);
  document.write("<br> <h3>Total number of routes in 20 * 20 grid is:</h3>", routes);


  function latticePaths(gridSize) {
    // Create a grid of size gridSize x gridSize filled with zeros
    const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));

    // Initialize the edges of the grid with 1
    for (let i = 0; i < gridSize; i++) {
        grid[i][0] = 1;
        grid[0][i] = 1;
    }

    // Fill the interior points of the grid
    for (let i = 1; i < gridSize; i++) {
        for (let j = 1; j < gridSize; j++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
        }
    }

    // Return the value in the bottom-right corner of the grid
    return grid[gridSize - 1][gridSize - 1];
}

// Example usage:
const gridSize = 3;
const paths = latticePaths(grid);
console.log("Total number of routes in a", gridSize, "x", gridSize, "grid is:", paths);
