import { useTranslation } from "react-i18next";

const MyContainer = () => {
  const { t } = useTranslation();
  return <div>{t("frontPageText")}</div>;
};

export default MyContainer;
