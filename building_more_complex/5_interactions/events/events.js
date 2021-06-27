async function createEvent() {
  const rectColors = ["black", "cornflowerblue", "seagreen", "slateblue"];

  // create and bind data to our rects
  const rects = d3
    .select("#svg")
    .selectAll(".rect")
    .data(rectColors)
    .join("rect")
    .attr("height", 100)
    .attr("width", 100)
    .attr("x", (d, i) => i * 110)
    .attr("fill", "lightgrey");

  // create listeners /* arrow func refers to the lexical scope .. meaning that (this) will always refer to the same thing inside and outside of a func. */
  rects
    .on("mouseenter", (e, d) => {
      const selection = d3.select(e.currentTarget);
      selection.attr("fill", d);
    })
    .on("mouseleave", function () {
      const selection = d3.select(e.currentTarget);
      selection.attr("fill", d);
    });

  // destroy our events after 3 seconds
  setTimeout(() => {
    rects.dispatch("mouseleave").on("mouseenter", null).on("mouseleave", null);
  }, 3000);
}
createEvent();
