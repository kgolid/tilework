//import * as tome from 'chromotome';
import * as tome from 'bekk-chromotome';
import * as dat from 'dat.gui';
import tilesets from './triangle-tiles'; // {fills, diagonals, halves, quarter_circles, half_circles, circles}

const opts = {
  cell_scale: 120,
  grid_size: 10,
  palette_name: 'bekk01m',
  stroke_weight: 0
};

const tile_opts = {
  mode: 'geometry',
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
  let grid_size;

  let padding;

  let color_grid;

  p.setup = function() {
    p.createCanvas(canvas_dim, canvas_dim);
    THE_SEED = p.floor(p.random(9999999));
    p.randomSeed(THE_SEED);
    p.frameRate(1);
    p.strokeJoin(p.ROUND);

    const gui = new dat.GUI();
    const f0 = gui.addFolder('General');
    f0.open();
    f0.add(opts, 'cell_scale', 100, 200, 10);
    f0.add(opts, 'grid_size', 4, 14, 1);
    f0.add(opts, 'palette_name', tome.getNames());
    f0.add(opts, 'stroke_weight', 0, 10, 1);
    const f1 = gui.addFolder('Tilesets');
    f1.open();
    f1.add(tile_opts, 'mode', ['crosses', 'arrows', 'zigzags', 'geometry']);
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

    cell_scale = opts.cell_scale;
    grid_size = opts.grid_size;

    padding = (canvas_dim - cell_scale * grid_size) / 2;

    color_grid = get_color_grid();
  }

  function get_color_grid() {
    const color_grid = [];
    for (let y = 0; y < grid_size + 1; y++) {
      const row = [];
      for (let x = 0; x < grid_size + 1; x++) {
        row.push(palette.colors[p.floor(p.random() * palette.size)]);
      }
      color_grid.push(row);
    }
    return color_grid;
  }

  function get_tiles() {
    return tilesets.circles;
  }

  function draw_tiles() {
    p.strokeWeight(opts.stroke_weight);
    p.stroke(palette.stroke);
    p.background(palette.background);
    const cell_height = get_cell_height(cell_scale);
    for (let y = 0; y < grid_size; y++) {
      let offset = y % 2 === 0 ? -cell_scale / 4 : cell_scale / 4;
      for (let x = 0; x < grid_size; x++) {
        const xpos = padding + x * cell_scale;
        const ypos = padding + y * cell_height;
        draw_random_tile(xpos + offset, ypos, cell_scale, true);
        draw_random_tile(xpos + offset, ypos + cell_height, cell_scale, false);
      }
    }
  }

  function get_cell_height(width) {
    return Math.sqrt(Math.pow(width, 2) - Math.pow(width / 2, 2));
  }

  function draw_random_tile(x, y, dim, upwards) {
    let selected_colors = p.shuffle(palette.colors).slice(0, 3);
    let tile_function = tiles[p.floor(p.random() * tiles.length)];

    tile_function(p, x, y, dim, upwards, ...selected_colors);
  }
};
new p5(sketch);
