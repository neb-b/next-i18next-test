import { useTranslation } from "next-i18next"

const Index = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h2>{t("Heading")}</h2>
    </div>
  )
}

export default Index
