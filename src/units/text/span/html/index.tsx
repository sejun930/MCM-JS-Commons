import { useState, useEffect } from "react";
import { SpanText } from "../..";
import DOMPurify from "dompurify";

import CommonsHooksComponents from "../../../../hooks";
import { TextHTMLUnitTypes } from "../../../../types/units";

// dangerouslySetInnerHTML 속성을 사용할 수 있는 Span Text Component
export default function _SpanTextWithHtml(props: TextHTMLUnitTypes) {
  const [render, setRender] = useState(false);
  const { getAllComponentsClassName } = CommonsHooksComponents();
  const { styles, className, isError, dangerouslySetInnerHTML } = props;

  useEffect(() => {
    // window 객체가 있을 때만 해당 컴포넌트 렌더하기
    setRender(true);
  }, []);

  const getRender = () => {
    return !dangerouslySetInnerHTML ? (
      <SpanText isError={true}>
        {`<_SpanTextWithHtml /> : * dangerouslySetInnerHTML props가 필요합니다.`}
      </SpanText>
    ) : (
      <SpanText
        style={styles}
        className={getAllComponentsClassName("mcm-span-unit", className)}
        isError={isError}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(dangerouslySetInnerHTML || ""),
        }}
      />
    );
  };

  return (render && getRender()) || <></>;
}