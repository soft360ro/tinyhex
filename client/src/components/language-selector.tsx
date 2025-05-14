import React from "react";
import { useTranslation } from "react-i18next";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const languages = [
  { code: "en", name: "English" },
  { code: "ro", name: "Română" },
];

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      value={i18n.language}
      onValueChange={changeLanguage}
    >
      <SelectTrigger className="w-[130px] bg-transparent border-neutral-medium">
        <SelectValue placeholder={t("language")} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;