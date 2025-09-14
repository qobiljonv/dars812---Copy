// import { useActionData } from "react-router-dom";

import WhatYou from "../components/WhatYou";
import Ready from "../components/Ready";
import Healthy from "../components/Healthy";
import Built from "../components/Built";

// const allProductsQueryc = (queryParams) => {
//   return {
//     pueryKey: ["products", search ?? ""],
//   };
// };

// export const action = (pueryClent) => {
//   async ({ request }) => {
//     const params = Object.fromEntries([
//       ...new URL(request.url).searchParams.entries(),
//     ]);
//     const response = await pueryClent.ensureQueryData(
//       allProductsQueryc(params)
//     );
//     const products = response.data.data;
//     const meta = response.data.meta;
//     return { products, meta, response };
//   };
// };

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const title = formData.get("title");
//   const age = formData.get("age");
//   return { title, age };
// };

function Home() {
  // const actionData = useActionData();
  // console.log(actionData);
  return (
    <>
      <Healthy />
      <WhatYou />
      <Built />
      <Ready />
    </>
  );
}

export default Home;
