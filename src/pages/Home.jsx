import { Form, useActionData } from "react-router-dom";
import CookTime from "./CookTime";
import PremTime from "./PremTime";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatYou from "../components/WhatYou";
import Ready from "../components/Ready";

const allProductsQueryc = (queryParams) => {
  return {
    pueryKey: ["products", search ?? ""],
  };
};

export const action = (pueryClent) => {
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await pueryClent.ensureQueryData(allProductsQuery(params));
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, response };
  };
};

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const title = formData.get("title");
//   const age = formData.get("age");
//   return { title, age };
// };

function Home() {
  const actionData = useActionData();
  console.log(actionData);
  return (
    <>
      <WhatYou />
      <Ready />
      {/* <div className="home__box">
        <PremTime />
        <CookTime />
      </div> */}
      {/* <div>
        <img
          src="./images/quinoa-veggie-bowl-large.webp"
          alt=""
          width={430}
          height={430}
        />
      </div>
      <div>
        <Form method="post">
          <input type="text" name="title" />
          <input type="text" name="age" />
          <button>Button</button>
        </Form>
      </div> */}
    </>
  );
}

export default Home;
