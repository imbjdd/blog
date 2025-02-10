import Link from 'next/link'

const Header = () => {
  return (
    <section className="flex-col flex justify-center mt-8 mb-4 md:my-16 md:mb-12">
      <Link href="/" className="tracking-tighter leading-tight md:pr-8 font-bold">
        Salim Bjdd
      </Link>
      <p>GitHub</p>
      <p>LinkedIn</p>
      <p>Resume</p>
    </section>
  );
};

export default Header;
