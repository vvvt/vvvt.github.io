var pathData = "M184,443c0,0-60-80,0-113c45-24,46-24,69-77c45-103,141,38,187-40c28-47,51-123,109-34c58,89,72,40,94,23s68-32,102,23s47,45,94,49c47,4,129,40,70,106C890,402,878,479,894,500c7,34,6,33-29,82s-32,47-17,106c15,58-1,102-51,137c-8,6-60,21-70,63c-6,44-102,133-185,47c-40-41-69-48-98-41c-44,11-61,12-98-17s-25-52-58-54c-32-2-81-22-84-81s-2-67-36-92s-50-58-14-98S199,477,183,443z";
var wobble = new Path(pathData).scale(0.5);
wobble.position = view.center;
wobble.fillColor = "none";

var from = new Point(view.center);
var to = new Point(view.center.x, view.center.y - 300);
var baseLine = new Path.Line(from, to);
baseLine.fillColor = "black";

var group = new Group([wobble, baseLine]);
group.clipped = true;

for (i = 1; i < 60; i++) {
    var p = new Path.Line(from, to).rotate(-i * 6, view.center);
    p.fillColor = "black";
    group.appendBottom(p);
}
if (group.firstChild !== wobble) {
    group.bringToFront(wobble);
}
group.strokeColor = 'white';

function onResize(event) {
    'use strict';
    var resX = view.center.x - wobble.position.x;
    var resY = view.center.y - wobble.position.y;
    group.getItems({
        fillColor: "black",
        class: Path
    }).forEach(function (value) {
        value.position.x += resX;
        value.position.y += resY;
    });
    wobble.position = view.center;
}

function onFrame(event) {
    'use strict';
    wobble.rotate(0.2, view.center);
    group.getItems({
        fillColor: "black",
        class: Path
    }).forEach(function (value, index) {
        if (index > new Date().getSeconds()) {
            value.opacity = 0;
        } else {
            value.opacity = 1;
        }
    });
}
