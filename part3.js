import fetch from "isomorphic-fetch";
import tates from "tates";
import {
  ApolloClient,
  gql,
  InMemoryCache,
} from "@apollo/client/core/core.cjs.js";

const { state, subscribe } = tates.createState();

subscribe((posts) => {
  if (!Array.isArray(posts)) {
    return;
  }

  console.log(`There are ${posts.length} posts!`);
}, "posts");

for (let i = 0; i < 10; ++i) {
  subscribe((title) => {
    if (!title) {
      return;
    }

    console.log(title);
  }, `posts.${i}.title`);
}

async function getPosts() {
  try {
    const client = new ApolloClient({
      uri: "https://headlessfw.wpengine.com/graphql",
      cache: new InMemoryCache(),
      fetch,
    });

    const result = await client.query({
      query: gql`
        query GetPosts {
          posts {
            nodes {
              title
            }
          }
        }
      `,
    });

    state.posts = result.data?.posts?.nodes;
  } catch (e) {
    console.log(e);
  }
}

getPosts();
