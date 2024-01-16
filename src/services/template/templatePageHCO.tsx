import Head from "next/head";
import type { TemplateConfig } from "./withTemplateConfig";
import { TemplateConfigProvider } from "./TemplateConfigContext";

interface templatePageHCOProps {
  title?: string;
}

export default function templatePageHCO(
  Component: (props: any) => JSX.Element,
  templatePageHCOProps: templatePageHCOProps = {}
) {
  return function WarappedComponents(props: { templateConfig: TemplateConfig }) {
    return (
      <>
        <Head>
          <title>
            {templatePageHCOProps.title ?
              `${templatePageHCOProps.title} | ${props.templateConfig.site.title}`
              : templatePageHCOProps.title}
          </title>
        </Head>
        <TemplateConfigProvider value={props.templateConfig}>
          <Component {...props} />
        </TemplateConfigProvider>
      </>
    )
  }
}