import { Button } from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

export default function Page() {
  return (
    <div className="bg-slate-200">
      <h1 className="text-[40px] underline">Headings</h1>
      <br />
      <Heading variant="primaryDark" size="lg">
        This is heading 60px
      </Heading>
      <Heading variant="primaryLight" size="lg">
        This is heading white 60px
      </Heading>
      <Heading variant="primaryLight" size="md">
        This is heading white 40px
      </Heading>
      <Heading variant="primaryDark" size="md">
        This is heading medium 40px
      </Heading>
      <Heading variant="primaryDark" size="sm">
        This is heading small 24px
      </Heading>
      <br />
      <Heading variant="secondaryLight" size="lg">
        This is thin 60px
      </Heading>
      <br />
      <br />
      <h1 className="text-[40px] underline">Buttons</h1>
      <br />
      <Button variant="primary" size="small" link="/books">
        View Books Page
      </Button>
      <br />
      <Button variant="primaryLight" size="small" link="/books">
        View Books Page
      </Button>

      <Button variant="ghost" size="small" link="/books">
        View Books Page
      </Button>
    </div>
  );
}
