import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Heading from "../components/Heading"

const Index = () => {
  const { t } = useTranslation("homepage")

  return (
    <div>
      <h1>{t("Welcome to i18next")}</h1>
      <Heading />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["homepage", "common"])),
    },
  }
}

export default Index
