// React
import { forwardRef } from "react";

// Types
import { AccordionContentProps } from "./AccordionContent.types";

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  (props, ref) => {
    return (
      <div ref={ref}>
        <main>{props.children}</main>
      </div>
    );
  },
);

export default AccordionContent;
