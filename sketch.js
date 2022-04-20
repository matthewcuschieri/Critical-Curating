$("#cc").html(
  $("#cc")
    .text()
    .split("")
    .map((a) => `<span class="cc">${a}</span>`)
);

$("#secCC").html(
  $("#secCC")
    .text()
    .split("")
    .map((a) => `<span class="secCC">${a}</span>`)
);
