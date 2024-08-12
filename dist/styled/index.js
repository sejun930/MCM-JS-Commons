"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffDrag = void 0;
// 드래그 방지 기능 사용
var getOffDrag = function () {
    return {
        pointerEvents: "none",
        webkitTouchCallout: "none",
        webkitUserSelect: "none",
        mozUserSelect: "none",
        msUseSelect: "none",
        userSelect: "none",
    };
};
exports.getOffDrag = getOffDrag;
