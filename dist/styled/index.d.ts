export interface GetOffDragTypes {
    pointerEvents: string;
    webkitTouchCallout: string;
    webkitUserSelect: string;
    mozUserSelect: string;
    msUseSelect: string;
    userSelect: string;
}
declare const getOffDrag: () => GetOffDragTypes;
export { getOffDrag };
