import * as tome from 'chromotome';
import * as dat from 'dat.gui';
import tilesets from './tiles'; // {fills, diagonals, halves, quarter_circles, half_circles, circles}

const opts = {
  cell_scale: 100,
  cell_padding: 0,
  grid_size: 7,
  palette_name: 'sprague'
};

const tile_opts = {
  filled: true,
  diagonals: true,
  halves: true,
  circles: true,
  quarter_circles: true,
  half_circles: true
};

let sketch = function(p) {
  const canvas_dim = 800;
  let THE_SEED;
  let palette;
  let tiles;

  let cell_scale;
  let cell_padding;
  let grid_size;

  let padded_cell_scale;
  let padding;

  p.setup = function() {
    p.createCanvas(canvas_dim, canvas_dim);
    THE_SEED = p.floor(p.random(9999999));
    p.randomSeed(THE_SEED);
    p.frameRate(1);
    p.noStroke();

    const gui = new dat.GUI();
    const f0 = gui.addFolder('General');
    f0.open();
    f0.add(opts, 'cell_scale', 50, 150, 10);
    f0.add(opts, 'cell_padding', 0, 50, 5);
    f0.add(opts, 'grid_size', 4, 14, 1);
    f0.add(opts, 'palette_name', tome.getNames());
    const f1 = gui.addFolder('Tilesets');
    f1.open();
    f1.add(tile_opts, 'filled');
    f1.add(tile_opts, 'diagonals');
    f1.add(tile_opts, 'halves');
    f1.add(tile_opts, 'circles');
    f1.add(tile_opts, 'half_circles');
    f1.add(tile_opts, 'quarter_circles');
  };

  p.draw = function() {
    update_props();
    draw_tiles();
  };

  p.keyPressed = function() {
    if (p.keyCode === 80) p.saveCanvas('sketch_' + THE_SEED, 'jpeg');
  };

  function update_props() {
    palette = tome.get(opts.palette_name);
    tiles = get_tiles();

    cell_padding = opts.cell_padding;
    cell_scale = opts.cell_scale;
    grid_size = opts.grid_size;

    padded_cell_scale = cell_padding + cell_scale;
    padding = (canvas_dim - padded_cell_scale * grid_size + cell_padding) / 2;
  }

  function get_tiles() {
    let tiles = [].concat(
      tile_opts.filled ? tilesets.fills : [],
      tile_opts.halves ? tilesets.halves : [],
      tile_opts.diagonals ? tilesets.diagonals : [],
      tile_opts.circles ? tilesets.circles : [],
      tile_opts.half_circles ? tilesets.half_circles : [],
      tile_opts.quarter_circles ? tilesets.quarter_circles : []
    );

    return tiles.length === 0 ? tilesets.fills : tiles;
  }

  function draw_tiles() {
    p.background(palette.background);
    for (let y = 0; y < grid_size; y++) {
      for (let x = 0; x < grid_size; x++) {
        const xpos = padding + x * padded_cell_scale;
        const ypos = padding + y * padded_cell_scale;
        draw_random_tile(xpos, ypos, cell_scale);
      }
    }
  }

  function draw_random_tile(x, y, dim) {
    let selected_colors = p.shuffle(palette.colors).slice(0, 2);
    let tile_function = tiles[p.floor(p.random() * tiles.length)];

    tile_function(p, x, y, dim, ...selected_colors);
  }
};
new p5(sketch);
