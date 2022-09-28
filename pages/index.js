import Homepage from "components/pages/Homepage/homepage";
import { getSliderData } from "services/productService";

export default function Home({ sliders }) {
  return <Homepage sliders={sliders} />;
}

export async function getServerSideProps(context) {
  try {
    const sliders = await getSliderData();
    return {
      props: {
        sliders: sliders.data,
      },
    };
  } catch (err) {
    return {
      props: {
        example: "1",
      },
    };
  }
}
