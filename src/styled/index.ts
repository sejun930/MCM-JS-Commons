export interface GetOffDragTypes {
  pointerEvents: string;
  webkitTouchCallout: string;
  webkitUserSelect: string;
  mozUserSelect: string;
  msUseSelect: string;
  userSelect: string;
}

// 드래그 방지 기능 사용
const getOffDrag = (): GetOffDragTypes => {
  return {
    pointerEvents: "none", // PC 이미지 다운로드 금지
    webkitTouchCallout: "none", // 아이폰 다운로드 금지
    webkitUserSelect: "none", // 드래그 방지
    mozUserSelect: "none",
    msUseSelect: "none",
    userSelect: "none",
  };
};

export { getOffDrag };
