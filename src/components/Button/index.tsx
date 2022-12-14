import Link from "next/link"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

const Index = () => {
  const { t } = useTranslation("button")

  return (
    <div>
      <Link href="/two">two</Link>

      <h1>{t("Button")}</h1>
      <h1>{t("Button???")}</h1>
    </div>
  )
}

export default Index
