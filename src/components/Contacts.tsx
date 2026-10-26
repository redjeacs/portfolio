import { useTranslation } from "react-i18next";

function Contacts() {
  const { t } = useTranslation();

  return (
    <div id="contacts" className="p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">{t("contacts.title")}</h2>
      <p>Email: example@example.com</p>
      <p>Phone: +1234567890</p>
    </div>
  );
}

export default Contacts;
