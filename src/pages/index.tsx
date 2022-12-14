import Link from "next/link"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

const Index = () => {
  const { t } = useTranslation("common")

  return (
    <div>
      <Link href="/two">two</Link>

      <h1>{t("Welcome to React")}</h1>
      <h1>{t("Welcome to React???")}</h1>
    </div>
  )
}

export default Index

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  }
}
