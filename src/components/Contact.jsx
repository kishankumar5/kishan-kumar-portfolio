import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { contacts, resumeUrl } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Inline SVGs rather than image assets: these are single-colour glyphs that
// should inherit text colour, and it avoids shipping two more PNGs.
const MailIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-6 h-6'
    aria-hidden='true'
  >
    <rect x='2' y='4' width='20' height='16' rx='2' />
    <path d='m22 7-10 6L2 7' />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6' aria-hidden='true'>
    <path d='M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 21.5h5.16V9.75H2.4V21.5Zm7.72 0h5.16v-6.19c0-3.31 4.02-3.58 4.02 0v6.19h5.16v-7.97c0-6.83-7.2-6.58-9.18-3.22V9.75h-5.16V21.5Z' />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-5 h-5'
    aria-hidden='true'
  >
    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
    <polyline points='7 10 12 15 17 10' />
    <line x1='12' y1='15' x2='12' y2='3' />
  </svg>
);

const ContactIcon = ({ name }) => {
  if (name === "mail") return <MailIcon />;
  if (name === "linkedin") return <LinkedInIcon />;
  return <img src={github} alt='' aria-hidden='true' className='w-6 h-6 object-contain' />;
};

const ContactCard = ({ index, label, value, href, icon }) => (
  <motion.a
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    href={href}
    target={href.startsWith("mailto:") ? undefined : "_blank"}
    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
    className='bg-tertiary rounded-2xl p-5 flex items-center gap-4 sm:w-[340px] w-full hover:bg-black-200 transition-colors'
  >
    <div className='black-gradient w-12 h-12 rounded-full flex justify-center items-center text-white shrink-0'>
      <ContactIcon name={icon} />
    </div>
    <div className='min-w-0'>
      <p className='text-secondary text-[14px]'>{label}</p>
      <p className='text-white text-[16px] font-medium truncate'>{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm currently pursuing my MS in Computer Science at Northeastern University
        in San Jose and open to internship and full-time software engineering roles.
        The fastest way to reach me is email or LinkedIn.
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-5'>
        {contacts.map((contact, index) => (
          <ContactCard key={contact.label} index={index} {...contact} />
        ))}
      </div>

      <motion.div variants={fadeIn("up", "spring", 0.9, 0.75)} className='mt-10'>
        <a
          href={resumeUrl}
          download
          className='inline-flex items-center gap-3 bg-[#915EFF] hover:bg-[#7d4ce0] transition-colors text-white font-bold py-3 px-6 rounded-xl outline-none shadow-md shadow-primary'
        >
          <DownloadIcon />
          Download Résumé
        </a>
        <p className='mt-3 text-secondary text-[14px]'>PDF · updated May 2026</p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
