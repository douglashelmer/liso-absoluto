import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lisoabsoluto.com"),
  title: {
    default: "Domine a Arte do Alisamento Profissional — Do Básico ao Alto Padrão",
    template: "%s · Liso Absoluto",
  },
  description:
    "Aprenda a ler cada fio antes de tocar no produto. Protocolo completo de diagnóstico, aplicação científica e pós-tratamento para profissionais de salão que querem resultados consistentes. Garantia 7 dias.",
  keywords: [
    "alisamento profissional",
    "curso de alisamento",
    "técnica de alisamento capilar",
    "diagnóstico capilar",
    "curso cabeleireira",
  ],
  authors: [{ name: "Marineuma Viana e Marijeuza Pereira", url: "https://lisoabsoluto.com" }],
  creator: "Marineuma Viana e Marijeuza Pereira",
  publisher: "Liso Absoluto",
  alternates: { canonical: "https://lisoabsoluto.com" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lisoabsoluto.com",
    siteName: "Liso Absoluto",
    title: "Domine a Arte do Alisamento Profissional — Do Básico ao Alto Padrão",
    description:
      "Do diagnóstico preciso à hidratação final. O protocolo completo para profissionais de salão entregarem resultados que duram e fidelizam clientes.",
    images: [
      {
        url: "/herodesk.webp",
        width: 1920,
        height: 1080,
        alt: "Liso Absoluto — Domine a Arte do Alisamento Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domine a Arte do Alisamento Profissional",
    description: "O protocolo completo — diagnóstico, aplicação científica e pós-tratamento.",
    images: ["/herodesk.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Domine a Arte do Alisamento Profissional: Do Básico ao Alto Padrão",
      description:
        "Protocolo completo de alisamento profissional — diagnóstico preciso, aplicação científica com controle de pH, selagem térmica e pós-tratamento de hidratação profunda.",
      provider: {
        "@type": "Organization",
        name: "Liso Absoluto",
        sameAs: "https://lisoabsoluto.com",
      },
      offers: {
        "@type": "Offer",
        category: "Paid",
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        url: "https://pay.hub.la/1mB7eCtWxgKUlegy6NFO",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        inLanguage: "pt-BR",
      },
      instructor: [
        { "@type": "Person", name: "Marineuma Viana" },
        { "@type": "Person", name: "Marijeuza Pereira" },
      ],
    },
    {
      "@type": "Organization",
      name: "Liso Absoluto",
      url: "https://lisoabsoluto.com",
      logo: "https://lisoabsoluto.com/logo.png",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Preciso ter experiência prévia com alisamento para fazer o curso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O curso foi desenvolvido para profissionais de salão que já atuam ou estão iniciando na área. O conteúdo parte do diagnóstico desde o início, então cobre o fundamento mesmo para quem ainda não teve muito contato com o processo.",
          },
        },
        {
          "@type": "Question",
          name: "O curso é ao vivo ou gravado?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gravado. Você acessa quando quiser, pausa, volta, assiste de novo. Não depende de horário ou data.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
