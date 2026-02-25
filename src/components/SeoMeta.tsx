import { useEffect } from "react";

interface SeoMetaProps {
  title: string;
  description: string;
}

const SeoMeta = ({ title, description }: SeoMetaProps) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const created = !meta;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;

    return () => {
      document.title = previousTitle;
      if (created && meta?.parentElement) {
        meta.parentElement.removeChild(meta);
      }
    };
  }, [title, description]);

  return null;
};

export default SeoMeta;
