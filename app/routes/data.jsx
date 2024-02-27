import { json } from "@remix-run/node";
import db from "../db.server";
import { Form, useActionData, useLoaderData } from "@remix-run/react";

export const loader = () => {
  return json({ message: "I'm Sebas" });
};

export const action = async ({ request }) => {
  const body = await request.formData();
  console.log(body.get("first_name"));
  console.log(db);
  return Object.fromEntries(body.entries());
};

export default function Data() {
  const loaderData = useLoaderData();
  const actionData = useActionData();

  return (
    <div>
      <Form method="POST">
        <input type="text" name="first_name" />
        <button>Submit</button>
      </Form>
      <div>Name: {actionData ? `${actionData.first_name}` : null}</div>
    </div>
  );
  //return <div>{loaderData.message}</div>;
}
