import { useEffect, useRef } from 'react';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text } from './About.styled'
import { Wrapper } from '../../style'
import { gsap } from "gsap";

export const About = () => {
  const txt1 = useRef(null);
  const txt2 = useRef();
  const txt3 = useRef();
  const wrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top 85%",
        end: "bottom 50%",
        scrub: true,
      }
    });
    tl.to(txt1.current, {opacity: 1, marginTop:"30px", duration: 3})
    tl.to(txt2.current, {opacity: 1, marginTop:"30px", duration: 3})
    tl.to(txt3.current, {opacity: 1, marginTop:"30px", duration: 3})
  }, []);
  
  return (
    <Wrapper
      positionMobile="relative"
      paddingMobile="30px"
      paddingDesktop="60px"
      ref={wrapper}
    >
      <Text ref={txt1}>
        Gummi bears tootsie roll jelly-o sugar plum croissant gingerbread biscuit oat cake. Carrot cake jelly carrot cake pie lemon drops sugar plum chupa chups dessert. Macaroon carrot cake soufflé pudding chocolate.
      </Text>
      <Text ref={txt2}>
        Liquorice sesame snaps sugar plum I love halvah I love bonbon. Pie shortbread shortbread marzipan bonbon. Fruitcake marzipan powder topping soufflé I love lemon drops jelly beans. Tiramisu toffee I love I love I love I love dessert.
      </Text>
      <Text ref={txt3}>
        Lollipop sweet carrot cake topping pastry tart. I love sesame snaps tootsie roll I love sweet roll topping jelly beans marshmallow chocolate cake. Halvah chocolate cake I love bonbon jelly beans apple pie liquorice. 
      </Text>
    </Wrapper>
  )}
export default About