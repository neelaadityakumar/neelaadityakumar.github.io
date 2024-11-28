import MdxLayout from "../components/mdx-layout";
import Welcome from "../markdown/welcome.mdx";
import { overrideComponents } from "../components/mdx-components";

export default function Page() {
  return (
    <MdxLayout>
      <Welcome components={overrideComponents} />;
    </MdxLayout>
  );
}
