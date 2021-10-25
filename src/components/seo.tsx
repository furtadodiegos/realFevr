import React from "react";
import Helmet from "react-helmet";

import type { FC } from "react";
import type { HelmetProps } from "react-helmet";

interface SEOProps extends HelmetProps {
  description: string;
  title: string;
  socialBanner?: string;
  author?: string;
  url?: string;
}

const SEO: FC<SEOProps> = ({
  description,
  meta,
  title,
  socialBanner,
  author,
  url,
}) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      titleTemplate={`%s | ${description}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: socialBanner,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: socialBanner,
        },
        ...(meta || []),
      ]}
    />
  );
};

export default SEO;
