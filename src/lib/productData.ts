import productMenu from "@/data/productsMenu.json";
import heroImg from "@/assets/hero-chiller.jpg";
import screwImg from "@/assets/product-screw-chiller.jpg";
import scrollImg from "@/assets/product-scroll-chiller.jpg";
import ammoniaImg from "@/assets/product-ammonia-chiller.jpg";
import oilImg from "@/assets/product-oil-chiller.jpg";
import factoryImg from "@/assets/factory-floor.jpg";

interface ProductItem {
  title: string;
  slug: string;
}

interface ProductGroup {
  title: string;
  slug: string;
  items: ProductItem[];
}

interface ProductSection {
  title: string;
  slug: string;
  summary: string;
  groups: ProductGroup[];
}

interface ProductMenuData {
  sections: ProductSection[];
}

export interface ProductPageData {
  title: string;
  slug: string;
  parentSection: string;
  parentSectionSlug: string;
  parentGroup?: string;
  path: string;
  description: string;
  highlights: string[];
  specifications: Array<{ label: string; value: string }>;
  applications: string[];
  image: string;
  imageAlt: string;
}

export const productSections = (productMenu as ProductMenuData).sections;

const imageBySection: Record<string, string> = {
  products: screwImg,
  application: heroImg,
  "customized-chiller": ammoniaImg,
  "global-footprints": factoryImg,
};

const imageByGroup: Record<string, string> = {
  "scroll-chiller": scrollImg,
  "air-chiller": heroImg,
  "reciprocating-chillers": oilImg,
  "cooling-tower-manufacturer": factoryImg,
};

const buildHighlights = (title: string, section: string): string[] => [
  `${title} packages engineered for ${section.toLowerCase()} process stability`,
  "High-efficiency refrigeration circuit with low lifecycle operating cost",
  "Factory-tested controls, alarms, and safety interlocks for dependable uptime",
  "Commissioning and lifecycle support with responsive service coverage",
];

const buildSpecs = (title: string) => [
  { label: "Cooling Capacity Range", value: "15 TR to 450 TR" },
  { label: "Temperature Control", value: "±1°C process stability" },
  { label: "Refrigerant Options", value: "R134a / R407C / low-GWP options" },
  { label: "Controls", value: `${title} optimized PLC + HMI with BMS readiness` },
  { label: "Power", value: "3 Phase, 415V, 50Hz (customizable)" },
];

const buildApplications = (title: string, section: string) => [
  `${title} for continuous industrial production lines`,
  `${section} thermal load balancing and reliability planning`,
  "Retrofit and greenfield process cooling projects",
  "Mission-critical operations with high-uptime requirements",
];

export const categoryPages: ProductPageData[] = productSections.flatMap((section) =>
  section.groups.map((group) => ({
    title: group.title,
    slug: group.slug,
    parentSection: section.title,
    parentSectionSlug: section.slug,
    path: `/products/${section.slug}/${group.slug}`,
    description: `${group.title} solutions under ${section.title}, developed for rugged industrial performance and low-maintenance operation.`,
    highlights: buildHighlights(group.title, section.title),
    specifications: buildSpecs(group.title),
    applications: buildApplications(group.title, section.title),
    image: imageByGroup[group.slug] || imageBySection[section.slug] || heroImg,
    imageAlt: `${group.title} industrial chiller system`,
  })),
);

export const submenuPages: ProductPageData[] = productSections.flatMap((section) =>
  section.groups.flatMap((group) =>
    group.items.map((item) => ({
      title: item.title,
      slug: item.slug,
      parentSection: section.title,
      parentSectionSlug: section.slug,
      parentGroup: group.title,
      path: `/products/${section.slug}/${group.slug}/${item.slug}`,
      description: `${item.title} from ${section.title}${group.title ? ` - ${group.title}` : ""}, configured for process-specific cooling precision and long service life.`,
      highlights: buildHighlights(item.title, section.title),
      specifications: buildSpecs(item.title),
      applications: buildApplications(item.title, section.title),
      image: imageByGroup[group.slug] || imageBySection[section.slug] || heroImg,
      imageAlt: `${item.title} industrial cooling package`,
    })),
  ),
);

export const getCategoryPage = (sectionSlug: string, categorySlug: string) =>
  categoryPages.find((entry) => entry.parentSectionSlug === sectionSlug && entry.slug === categorySlug);

export const getSubmenuPage = (sectionSlug: string, categorySlug: string, itemSlug: string) => {
  const section = productSections.find((entry) => entry.slug === sectionSlug);
  const group = section?.groups.find((entry) => entry.slug === categorySlug);

  return submenuPages.find(
    (entry) =>
      entry.parentSectionSlug === sectionSlug &&
      entry.parentGroup === group?.title &&
      entry.slug === itemSlug,
  );
};
