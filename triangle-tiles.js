const start_ring = 0;
const rings = 3;

const upwards_triangle = function(p, x, y, w, h, col) {
  p.fill(col);
  p.beginShape();
  p.vertex(x + w / 2, y);
  p.vertex(x + w, y + h);
  p.vertex(x, y + h);
  p.endShape(p.CLOSE);
};

const downwards_triangle = function(p, x, y, w, h, col) {
  p.fill(col);
  p.beginShape();
  p.vertex(x, y);
  p.vertex(x + w, y);
  p.vertex(x + w / 2, y + h);
  p.endShape(p.CLOSE);
};

const n_arc = function(p, x, y, w, h, radius, col) {
  p.fill(col);
  p.arc(x + w / 2, y, radius, radius, p.PI / 3, (2 * p.PI) / 3, p.PIE);
};

const s_arc = function(p, x, y, w, h, radius, col) {
  p.fill(col);
  p.arc(x + w / 2, y + h, radius, radius, (4 * p.PI) / 3, (5 * p.PI) / 3, p.PIE);
};

const sw_arc = function(p, x, y, w, h, radius, col) {
  p.fill(col);
  p.arc(x, y + h, radius, radius, (5 * p.PI) / 3, p.TWO_PI, p.PIE);
};

const ne_arc = function(p, x, y, w, h, radius, col) {
  p.fill(col);
  p.arc(x + w, y, radius, radius, (2 * p.PI) / 3, p.PI, p.PIE);
};

const se_arc = function(p, x, y, w, h, radius, col) {
  p.fill(col);
  p.arc(x + w, y + h, radius, radius, p.PI, (4 * p.PI) / 3, p.PIE);
};

const nw_arc = function(p, x, y, w, h, radius, col) {
  p.fill(col);
  p.arc(x, y, radius, radius, 0, p.PI / 3, p.PIE);
};

const nsw_circle = (p, x, y, dim, upwards, c1, c2, c3) => {
  const bw = dim / 15;
  const h = get_cell_height(dim);
  if (upwards) {
    upwards_triangle(p, x, y, dim, h, c1);
    for (let i = start_ring; i < start_ring + rings; i++) {
      n_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c2);
      n_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
    for (let i = start_ring; i < start_ring + rings; i++) {
      sw_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c3);
      sw_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
  } else {
    downwards_triangle(p, x, y, dim, h, c1);
    for (let i = start_ring; i < start_ring + rings; i++) {
      s_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c2);
      s_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
    for (let i = start_ring; i < start_ring + rings; i++) {
      ne_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c3);
      ne_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
  }
};

const swse_circle = (p, x, y, dim, upwards, c1, c2, c3) => {
  const bw = dim / 15;
  const h = get_cell_height(dim);
  if (upwards) {
    upwards_triangle(p, x, y, dim, h, c1);
    for (let i = start_ring; i < start_ring + rings; i++) {
      sw_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c2);
      sw_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
    for (let i = start_ring; i < start_ring + rings; i++) {
      se_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c3);
      se_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
  } else {
    downwards_triangle(p, x, y, dim, h, c1);
    for (let i = start_ring; i < start_ring + rings; i++) {
      ne_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c2);
      ne_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
    for (let i = start_ring; i < start_ring + rings; i++) {
      nw_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c3);
      nw_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
  }
};

const sen_circle = (p, x, y, dim, upwards, c1, c2, c3) => {
  const bw = dim / 15;
  const h = get_cell_height(dim);
  if (upwards) {
    upwards_triangle(p, x, y, dim, h, c1);
    for (let i = start_ring; i < start_ring + rings; i++) {
      se_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c2);
      se_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
    for (let i = start_ring; i < start_ring + rings; i++) {
      n_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c3);
      n_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
  } else {
    downwards_triangle(p, x, y, dim, h, c1);
    for (let i = start_ring; i < start_ring + rings; i++) {
      nw_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c2);
      nw_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
    for (let i = start_ring; i < start_ring + rings; i++) {
      s_arc(p, x, y, dim, h, dim + (5 - 4 * i) * bw, c3);
      s_arc(p, x, y, dim, h, dim + (3 - 4 * i) * bw, c1);
    }
  }
};

const circles = [nsw_circle, swse_circle, sen_circle];

export default { circles };

function get_cell_height(width) {
  return Math.sqrt(Math.pow(width, 2) - Math.pow(width / 2, 2));
}
