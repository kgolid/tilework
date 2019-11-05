const filled = (p, x, y, dim, c1, c2) => {
  p.fill(c1);
  p.rect(x, y, dim, dim);
};

const vertical_half = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.rect(x, y, dim / 2, dim);
};

const horizontal_half = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.rect(x, y, dim, dim / 2);
};

const diagonal_asc = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.beginShape();
  p.vertex(x, y);
  p.vertex(x + dim, y + dim);
  p.vertex(x, y + dim);
  p.endShape(p.CLOSE);
};

const diagonal_desc = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.beginShape();
  p.vertex(x + dim, y);
  p.vertex(x + dim, y + dim);
  p.vertex(x, y + dim);
  p.endShape(p.CLOSE);
};

const circle = (p, x, y, dim, c1, c2) => {
  const center = dim / 2;
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.ellipse(x + center, y + center, dim, dim);
};

const northwest_quarter_circle = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.arc(x, y, dim * 2, dim * 2, 0, p.HALF_PI, p.PIE);
};

const northeast_quarter_circle = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.arc(x + dim, y, dim * 2, dim * 2, p.HALF_PI, p.PI, p.PIE);
};

const southeast_quarter_circle = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.arc(x + dim, y + dim, dim * 2, dim * 2, p.PI, 3 * p.HALF_PI, p.PIE);
};

const southwest_quarter_circle = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.arc(x, y + dim, dim * 2, dim * 2, 3 * p.HALF_PI, p.TWO_PI, p.PIE);
};

const north_half_circle = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.arc(x + dim / 2, y, dim, dim, 0, p.PI, p.PIE);
};
const east_half_circle = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.arc(x + dim, y + dim / 2, dim, dim, p.HALF_PI, 3 * p.HALF_PI, p.PIE);
};
const south_half_circle = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.arc(x + dim / 2, y + dim, dim, dim, p.PI, p.TWO_PI, p.PIE);
};
const west_half_circle = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.arc(x, y + dim / 2, dim, dim, 3 * p.HALF_PI, p.HALF_PI, p.PIE);
};

const tilted_cross = (p, x, y, dim, c1, c2) => {
  const u = dim / 5;
  p.fill(c1);
  p.beginShape();
  p.vertex(x, y);
  p.vertex(x + 2 * u, y + -1 * u);
  p.vertex(x + 3 * u, y + 1 * u);
  p.vertex(x + 5 * u, y + 0 * u);
  p.vertex(x + 6 * u, y + 2 * u);
  p.vertex(x + 4 * u, y + 3 * u);
  p.vertex(x + 5 * u, y + 5 * u);
  p.vertex(x + 3 * u, y + 6 * u);
  p.vertex(x + 2 * u, y + 4 * u);
  p.vertex(x + 0 * u, y + 5 * u);
  p.vertex(x + -1 * u, y + 3 * u);
  p.vertex(x + 1 * u, y + 2 * u);
  p.endShape(p.CLOSE);
};

const north_arrow = (p, x, y, dim, c1, c2, c3, c4) => {
  vertical_half(p, x, y, dim, c4, c3);
  p.fill(c1);
  p.arc(x, y, dim, dim, 0, p.HALF_PI, p.PIE);
  p.fill(c2);
  p.arc(x + dim, y, dim, dim, p.HALF_PI, p.PI, p.PIE);
};

const south_arrow = (p, x, y, dim, c1, c2, c3, c4) => {
  vertical_half(p, x, y, dim, c1, c2);
  p.fill(c4);
  p.arc(x, y + dim, dim, dim, 3 * p.HALF_PI, p.TWO_PI, p.PIE);
  p.fill(c3);
  p.arc(x + dim, y + dim, dim, dim, p.PI, 3 * p.HALF_PI, p.PIE);
};

const east_arrow = (p, x, y, dim, c1, c2, c3, c4) => {
  horizontal_half(p, x, y, dim, c1, c4);
  p.fill(c2);
  p.arc(x + dim, y, dim, dim, p.HALF_PI, p.PI, p.PIE);
  p.fill(c3);
  p.arc(x + dim, y + dim, dim, dim, p.PI, 3 * p.HALF_PI, p.PIE);
};

const west_arrow = (p, x, y, dim, c1, c2, c3, c4) => {
  horizontal_half(p, x, y, dim, c2, c3);
  p.fill(c1);
  p.arc(x, y, dim, dim, 0, p.HALF_PI, p.PIE);
  p.fill(c4);
  p.arc(x, y + dim, dim, dim, 3 * p.HALF_PI, p.TWO_PI, p.PIE);
};

const north_zig = (p, x, y, dim, c1, c2, c3, c4) => {
  vertical_half(p, x, y, dim, c4, c2);
  p.fill(c1);
  p.arc(x, y, dim, dim, 0, p.HALF_PI, p.PIE);
  p.fill(c3);
  p.arc(x + dim, y + dim, dim, dim, p.PI, 3 * p.HALF_PI, p.PIE);
};

const south_zig = (p, x, y, dim, c1, c2, c3, c4) => {
  vertical_half(p, x, y, dim, c1, c3);
  p.fill(c4);
  p.arc(x, y + dim, dim, dim, 3 * p.HALF_PI, p.TWO_PI, p.PIE);
  p.fill(c2);
  p.arc(x + dim, y, dim, dim, p.HALF_PI, p.PI, p.PIE);
};

const east_zig = (p, x, y, dim, c1, c2, c3, c4) => {
  horizontal_half(p, x, y, dim, c1, c3);
  p.fill(c2);
  p.arc(x + dim, y, dim, dim, p.HALF_PI, p.PI, p.PIE);
  p.fill(c4);
  p.arc(x, y + dim, dim, dim, 3 * p.HALF_PI, p.TWO_PI, p.PIE);
};

const west_zig = (p, x, y, dim, c1, c2, c3, c4) => {
  horizontal_half(p, x, y, dim, c2, c4);
  p.fill(c1);
  p.arc(x, y, dim, dim, 0, p.HALF_PI, p.PIE);
  p.fill(c3);
  p.arc(x + dim, y + dim, dim, dim, p.PI, 3 * p.HALF_PI, p.PIE);
};

const fills = [filled];
const halves = [vertical_half, horizontal_half];
const diagonals = [diagonal_asc, diagonal_desc];

const circles = [circle];
const quarter_circles = [
  northwest_quarter_circle,
  northeast_quarter_circle,
  southeast_quarter_circle,
  southwest_quarter_circle
];
const half_circles = [
  north_half_circle,
  east_half_circle,
  south_half_circle,
  west_half_circle
];

const crosses = [tilted_cross];
const arrows = [north_arrow, south_arrow, west_arrow, east_arrow];
const zigzags = [north_zig, south_zig, west_zig, east_zig];

export default {
  fills,
  halves,
  diagonals,
  circles,
  quarter_circles,
  half_circles,
  arrows,
  zigzags,
  crosses
};
