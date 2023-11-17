import {
  FaBrandsDev,
  FaBrandsLinkedin,
  FaBrandsSquareGithub,
  FaBrandsSquareYoutube,
  FaSolidFileArrowDown,
} from "solid-icons/fa";
import Section from "../../sharedComponents/Section";
import Socials from "../../sharedComponents/Socials";

interface ContactProps {
  // add props here
}

function Contact(props: ContactProps) {
  return (
    <Section
      id="contact"
      title={{ name: "SAY HELLO" }}
      class="bg-dark pb-10 pl-[10vw] pr-[10vw] pt-28 font-k2d"
    >
      <div class="contact-info mb-20 ml-2 mr-0 mt-28 flex flex-col gap-14 text-xl -tracking-tighter text-light">
        <div class="info-group">
          <label class="text-primaryLight">Email:</label>
          <p>butadpj@gmail.com</p>
        </div>
        <div class="info-group">
          <label class="text-primaryLight">Mobile number:</label>
          <p>+63 950 786 7559</p>
        </div>

        <div class="my-resume hoverable">
          <a href="./my_resume.pdf" download class="flex items-center gap-2">
            My Resume <FaSolidFileArrowDown />
          </a>
        </div>
      </div>
      <Socials
        class="mb-6 mt-32 text-white"
        socials={[
          {
            href: "https://github.com/butadpj",
            icon: <FaBrandsSquareGithub size={45} />,
          },
          {
            href: "https://dev.to/butadpj",
            icon: <FaBrandsDev size={45} />,
          },
          {
            href: "https://www.youtube.com/@butadpj",
            icon: <FaBrandsSquareYoutube size={45} />,
          },
          {
            href: "https://www.linkedin.com/in/paul-john-butad-5bb70a218",
            icon: <FaBrandsLinkedin size={45} />,
          },
        ]}
      />
      <hr />
      <p class="copyright mt-6 text-center text-primaryLight">
        © butadpj 2022
      </p>
    </Section>
  );
}

export default Contact;
