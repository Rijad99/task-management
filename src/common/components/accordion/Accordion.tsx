// React
import { PropsWithChildren, useCallback } from 'react';

// CSS
import accordionCSS from './Accordion.module.scss';

// Components
import AccordionHeader from './components/accordion-header/AccordionHeader';
import AccordionContent from './components/accordion-content/AccordionContent';

// Types
import { AccordionProps } from './Accordion.types';

// Accordion hook
import useAccordionHook from './useAccordionHook';

function Accordion(props: PropsWithChildren<AccordionProps>) {
  const {
    isAccordionOpen,
    accordionContentScope,
    arrow,
    accordionContentVariant,
    arrowVariant,
    setIsAccordionOpen,
    animateAccordionContentScope,
    animateArrow,
  } = useAccordionHook();

  const rotateIcon = isAccordionOpen ? arrowVariant.rotate : arrowVariant.rotateToInitial;

  const handleShowHideContent = useCallback(() => {
    animateAccordionContentScope('main', isAccordionOpen ? accordionContentVariant.closed : accordionContentVariant.open);
    animateArrow(arrow.current, rotateIcon);

    setIsAccordionOpen(!isAccordionOpen);
  }, [isAccordionOpen]);

  return (
    <div className={accordionCSS.accordion}>
      <AccordionHeader ref={arrow} title={props.title} onShowHideContent={handleShowHideContent} />
      <AccordionContent ref={accordionContentScope} children={props.children} />
    </div>
  );
}

export default Accordion;
