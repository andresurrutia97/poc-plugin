import Resolver from "@forge/resolver";
import api, { route } from "@forge/api";

const resolver = new Resolver();

const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

resolver.define("GET events", async () => {
  const requestURL = route`/rest/api/2/search`;

  const res = await api.asApp().requestJira(requestURL, {
    headers: {
      ...jsonHeaders,
    },
  });

  const data = await res.json();

  return data;
});

export async function run(event, context) {
  console.log("Hello World!");
}

export async function copyIssue(event, context) {
  console.log("Hello World!");
}

export const handler = resolver.getDefinitions();
