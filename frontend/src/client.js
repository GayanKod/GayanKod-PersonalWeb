import sanityClient from "@sanity/client";
import imgURLBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-03-13",
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
})

const builder = imgURLBuilder(client);

export const urlFor = (source) => builder.image(source);
