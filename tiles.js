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
  p.endShape(p.CLOSED);
};

const diagonal_desc = (p, x, y, dim, c1, c2) => {
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.beginShape();
  p.vertex(x + dim, y);
  p.vertex(x + dim, y + dim);
  p.vertex(x, y + dim);
  p.endShape(p.CLOSED);
};

const circle = (p, x, y, dim, c1, c2) => {
  const center = dim / 2;
  p.fill(c2);
  p.rect(x, y, dim, dim);
  p.fill(c1);
  p.ellipse(x + center, y + center, center, center);
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

export default {
  fills,
  halves,
  diagonals,
  circles,
  quarter_circles,
  half_circles
};
