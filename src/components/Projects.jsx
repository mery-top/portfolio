import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Marquee from 'react-fast-marquee'
import 'boxicons'

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
  link,
  titleClassName = "",
  descriptionClassName = "",
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <img
        src={src}
        alt={title}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className={`bento-title special-font ${titleClassName}`}>
            {title}
          </h1>
          {description && (
            <p
              className={`mt-3 max-w-64 text-xs md:text-base ${descriptionClassName}`}
            >
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20 text-white">Check out</p>
          </a>
        )}
      </div>
    </div>
  );
};


const Projects = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
    <div className="px-5 py-32 text-start">
        <p className="max-w-md font-circular-web text-2xl text-blue-50 opacity-90">
          I am a B.E (CSE'27) Student @KCET interested in MERN, Web3, AI/ML and Anime!<br></br> <br></br>
          I love learning new things and also the challenges that come along with it.<br></br>
          I am extremely creative with my designs, because I feel life inside them too!<br></br>
          And my CGPA is 9.45 😉
        </p>
      </div>

            <div className='text-lg'>
        <Marquee>
            <box-icon name='javascript' color = "#FFFFFF" type='logo'></box-icon>
            <box-icon name='java' color = "#FFFFFF" type='logo'></box-icon>
            <box-icon name='react' color = "#FFFFFF" type='logo'></box-icon>
            <box-icon name='nodejs' color = "#FFFFFF" type='logo'></box-icon>
            <box-icon name='mongodb' color = "#FFFFFF" type='logo'></box-icon>
            <box-icon type='solid' color = "#FFFFFF" name='data'></box-icon>
            <box-icon name='tailwind-css' color = "#FFFFFF" type='logo'></box-icon>
            <box-icon name='css3' color = "#FFFFFF" type='logo'></box-icon>
            <box-icon name='html5' color = "#FFFFFF" type='logo'></box-icon>
            <box-icon name='figma' color = "#FFFFFF" type='logo'></box-icon>
            <box-icon name='docker' color = "#FFFFFF" type='logo'></box-icon>
        </Marquee>
      </div>


    <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          PROJECTS
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Each one is built with an Extraordinary combination of Flavours!
        </p>
      </div>
      

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="img/Plantey.jpg"
          title={
            <>
            
              Pla<b>n</b>tey
            </>
          }
          description="Geolocation based Plant recommendations for your Garden"
          titleClassName="text-black-50" // Apply custom color for the title
          descriptionClassName="text-black"
          isComingSoon={true}
          link={"https://github.com/mery-top/plantey"}
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="img/Trajectory.png"
            title={
              <>
                Tra<b>ject</b>ory
              </>
            }
            description="Carrer Pathway Analyzer Powered by Gemini"
            isComingSoon = {true}
            link={'https://github.com/mery-top/trajectory'}
          />
        </BentoTilt>

        {/* <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                n<b>e</b>xus
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
        </BentoTilt> */}

        {/* <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                az<b>u</b>l
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </BentoTilt> */}

      <BentoTilt className="bento-tilt_2">
        <a href="https://github.com/mery-top" target="_blank">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>
            
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </a>
      </BentoTilt>


        {/* <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt> */}
      </div>
    </div>
  </section>
);

export default Projects;
