import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Any image dropped into src/assets/projects is picked up at build time and
// matched to a project by filename, so adding a preview needs no code change.
// See src/assets/projects/README.md.
const previewModules = import.meta.glob(
  "../assets/projects/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);

const previews = Object.fromEntries(
  Object.entries(previewModules).map(([path, url]) => [
    path.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase(),
    url,
  ])
);

const ProjectCard = ({
  index,
  name,
  date,
  description,
  tags,
  slug,
  source_code_link,
  live_demo_link,
}) => {
  const image = previews[slug?.toLowerCase()];

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          {image ? (
            // `object-contain` rather than `object-cover`: these previews are
            // UI screenshots, and cropping one to fill the slot slices off
            // whatever sits near the edges (titles, nav, controls). Fitting
            // the whole frame keeps the screenshot legible at any aspect ratio.
            <img
              src={image}
              alt={name}
              className='w-full h-full object-contain rounded-2xl bg-black/40'
            />
          ) : (
            <div className='w-full h-full rounded-2xl green-pink-gradient flex justify-center items-center p-5'>
              <span className='text-white/70 text-[14px] tracking-wider uppercase'>
                Preview coming soon
              </span>
            </div>
          )}

          {(source_code_link || live_demo_link) && (
            <div className='absolute inset-0 flex justify-end items-start gap-2 m-3'>
              {live_demo_link && (
                <a
                  href={live_demo_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={`${name} — live demo`}
                  aria-label={`${name} — live demo`}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-1/2 h-1/2 text-white'
                    aria-hidden='true'
                  >
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                    <polyline points='15 3 21 3 21 9' />
                    <line x1='10' y1='14' x2='21' y2='3' />
                  </svg>
                </a>
              )}

              {source_code_link && (
                <a
                  href={source_code_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={`${name} — source code`}
                  aria-label={`${name} — source code`}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
                </a>
              )}
            </div>
          )}
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          {date && <p className='text-secondary text-[14px] mt-1'>{date}</p>}
          <p className='mt-2 text-secondary text-[14px] leading-[24px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
          </div>
        </Tilt>
      </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have built</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          A mix of graduate coursework and personal builds — spanning multimodal machine
          learning, cross-platform mobile development, and classical algorithms. Each one
          below describes the problem, the approach, and the results.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
