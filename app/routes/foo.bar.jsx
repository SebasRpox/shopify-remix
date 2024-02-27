import { json } from "@remix-run/node";
import { getOrderDetails } from "../mysql.connection.js";
import { useLoaderData } from "@remix-run/react";
import {
  AppProvider,
  Page,
  Card,
  DataTable,
  Text,
  Layout,
} from "@shopify/polaris";
// en.json is English. Replace with fr.json for French, etc
import translations from "@shopify/polaris/locales/en.json";
import React from "react";
import "@shopify/polaris/build/esm/styles.css";

export const loader = async () => {
  const orderDetail = await getOrderDetails();
  return json(orderDetail);
};

export default function Bar() {
  const loaderData = useLoaderData();
  //return <div style={{ width: 100, height: 200, background: "blue" }}></div>;
  const rows = [
    [
      loaderData.productDescription,
      loaderData.totalValue,
      loaderData.productSKU,
      loaderData.quantity,
      loaderData.catalogId,
    ],
  ];

  return (
    // <Card>
    //   <Text as="h2" variant="bodyMd">
    //     Content inside a card
    //   </Text>
    // </Card>
    <AppProvider i18n={translations}>
      <Page fullWidth title="Order detail">
        <Layout>
          <Layout.Section>
            <Card>
              <DataTable
                columnContentTypes={[
                  "text",
                  "numeric",
                  "numeric",
                  "numeric",
                  "numeric",
                ]}
                headings={[
                  "Product",
                  "Price",
                  "SKU Number",
                  "Net quantity",
                  "Catalog",
                ]}
                rows={rows}
                //totals={['', '', '', 255, '$155,830.00']}
              />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
}
