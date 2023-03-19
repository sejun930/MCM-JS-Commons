import CommonsHooksComponents from "../../../hooks";
import { TextUnitTypes } from "../../../types/units";

// span 태그를 출력하는 컴포넌트
export default function _SpanText(props: TextUnitTypes) {
  const { getAllComponentsClassName } = CommonsHooksComponents();
  const { styles, className, children } = props;

  return (
    <span
      style={styles}
      className={getAllComponentsClassName("mcm-span-unit", className)}
    >
      {children}
    </span>
  );
}