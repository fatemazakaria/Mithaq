// Mock data — replace with API calls to your Express/MongoDB backend later.
import spicesImg from "./assets/spices.jpg";
import herbsImg from "./assets/herbs.jpg";
import legumesImg from "./assets/legumes.jpg";
import chiliPepperImg from "./assets/chili.jpg";
import turmericImg from "./assets/turmeric.jpg";
import hibiscusImg from "./assets/hibiscus.jpg";
import mintImg from "./assets/mint.jpg";
import molokhiaImg from "./assets/mollow.jpg";
import chamomileImg from "./assets/chamomile.jpg";
import calendulaImg from "./assets/calendula.jpg";
import peppermintImg from "./assets/peppermint.jpg";
import basilImg from "./assets/basil.jpg";
import dillImg from "./assets/dill.jpg";
import marjoramImg from "./assets/marjoram.jpg";
import rosemaryImg from "./assets/rosemary.jpg";
import sageImg from "./assets/sage.jpg";
import thymeImg from "./assets/thyme.jpg";
import corianderImg from "./assets/coriander.jpg";
import fennelImg from "./assets/fennel.jpg";
import cuminImg from "./assets/cumin.jpg";
import blackPepperImg from "./assets/blackpepper.jpg";
import wormwoodImg from "./assets/wormwood.jpg";
import lemongrassImg from "./assets/lemongrass.jpg";
import carawayImg from "./assets/caraway.jpg";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Catalog", href: "#catalog" },
  { label: "About Us", href: "#about" },
  { label: "For Suppliers", href: "#suppliers" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { key: "suppliers", value: "80+", label: "Verified Suppliers" },
  { key: "clients", value: "1,200+", label: "Business Clients" },
  { key: "varieties", value: "600+", label: "Plant Varieties" },
  { key: "countries", value: "24", label: "Countries Served" },
];

export const CATEGORIES = [
  { name: "SPICES", img: spicesImg },
  { name: "AROMATIC HERBS", img: herbsImg },
  { name: "SEEDS", img: legumesImg },
];

export const FEATURES = [
  { icon: "Recycle", title: "Direct Source Advantage", text: "Our proximity to farms and growers enables efficient sourcing, closer quality control, and competitive pricing with fewer intermediaries." },

  { icon: "Shield", title: "Quality You Can Rely On", text: "We carefully select and process our products according to the requirements of international buyers, focusing on cleanliness, consistency, and product quality." },

  { icon: "Globe", title: "Product Traceability", text: "We maintain clear sourcing and supply processes, connecting our products from the agricultural fields of Fayoum to their final destination in global markets." },

  { icon: "Headphones", title: "Reliable Export Partner", text: "We aim to build long-term relationships with importers, distributors, manufacturers, and wholesalers by combining quality products, competitive value, and dependable service." },
];


export const PRODUCTS = [
  {
    name: "Chili Pepper",
    category: "SPICES",
    moq: "10 kg / 20 kg",
    packaging: "Bag / Paper Bags",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img: chiliPepperImg,
  },
  {
    name: "Black Pepper",
    category: "SPICES",
    moq: "10 kg / 20 kg",
    packaging: "Bag / Paper Bags",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
   img:turmericImg,
  },
  {
    name: "Hibiscus",
    category: "Aromatic Herbs",
    moq: "20 kg /17 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img: hibiscusImg,
  },
  {
    name: "Peppermint",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img: peppermintImg,
  },
  {
    name: "Dried Mollow (Molokhia)",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:molokhiaImg,
  },
  {
    name: "Chamomile",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:chamomileImg,
  },
  {
    name: "Calendula",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:calendulaImg,
  },
  {
    name: "Basil",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:basilImg,
  },
  {
    name: "Dill",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:dillImg,
  },
  {
    name: "Marjoram",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:marjoramImg,
  },
  {
    name: "Sage",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:sageImg,
  },
  {
    name: "Rosemary",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:rosemaryImg,
  },
  {
    name: "Wormwood",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:wormwoodImg,
  },
  {
    name: "Thyme",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:thymeImg,
  },
  {
    name: "Lemongrass",
    category: "Aromatic Herbs",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:lemongrassImg,
  },
  {
    name: "Fennel",
    category: "Seeds",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:fennelImg,
  },
  {
    name: "Caraway",
    category: "Seeds",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:carawayImg,
  },
  {
    name: "Cumin",
    category: "SPICES",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:cuminImg,
  },
  {
    name: "Coriander",
    category: "SPICES",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:corianderImg,
  },
  {
    name: "Black Pepper",
    category: "SPICES",
    moq: "10 kg / 25 kg",
    packaging: "Bags / Carton box",
    CapacityPerContainer:"20 FT:6 TONS 40 FT: 12 TONS",
    availability: "In Stock",
    img:blackPepperImg,
  },
  
  
];

export const TRUST_STRIP = [
  { icon: "Truck", title: "Bulk Shipping Network", text: "Consolidated freight for large orders" },
  { icon: "FileCheck", title: "Trade Documentation", text: "Full export & phytosanitary paperwork" },
  { icon: "Headphones", title: "Account Managers", text: "One contact for suppliers and buyers" },
];
