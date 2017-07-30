var updater = new PaperAnimate.Updater();
var cx = view.center.x;
var cy = view.center.y;
var r = 150;

var segments = [new Point(cx - r, cy), new Point(cx, cy - r),
                new Point(cx + r / 3, cy - r / 4), new Point(cx, cy + r), new Point(cx - r / 3, cy + r / 4), new Point(cx, cy - r),
                new Point(cx + r, cy), new Point(cx, cy + r),
                new Point(cx - r, cy), new Point(cx + r / 3, cy - r / 4), new Point(cx + r, cy), new Point(cx - r / 3, cy + r / 4),
                new Point(cx - r, cy)];
var cube = new Path(segments);
cube.strokeColor = 'white';
//cube.animate(0.5, updater).rotate(90);

var onResize = function (event) {
    'use strict';
    cube.position = view.center;
};

var onFrame = function (event) {
    'use strict';
    //updater.update(event);
};

var onMouseDrag = function (event) {
    'use strict';
    cube.segments[2].point = event.point;
    cube.segments[9].point = event.point;
    cube.segments[4].point = new Point(view.bounds.width - event.point.x, view.bounds.height - event.point.y);
    cube.segments[11].point = new Point(view.bounds.width - event.point.x, view.bounds.height - event.point.y);
};
