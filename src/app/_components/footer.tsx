import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-12 md:py-28 flex flex-col lg:flex-row items-center">
          <p>Always open for a coffee chat in Paris ☕.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
