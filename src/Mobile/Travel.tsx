import { TravelDetails } from "../Shared/TravelDetails";

function Travel() {
  return (
    <>
      <TravelDetails />
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.8077461590641!2d103.81319686717659!3d1.3048336286222277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da193420e53bfb%3A0xc828523761e16842!2sClaudine%20Restaurant!5e0!3m2!1sen!2ssg!4v1737779302096!5m2!1sen!2ssg"
        width="100%"
        height="400"
        loading="lazy"
      ></iframe>
    </>
  );
}

export default Travel;
