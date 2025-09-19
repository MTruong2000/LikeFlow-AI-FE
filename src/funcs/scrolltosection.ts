const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const y = section.getBoundingClientRect().top + window.scrollY - 80;
      // window.scrollTo({ top: y, behavior: "smooth" });
    window.scrollTo({ top: y });
  }
};

export default scrollToSection;
