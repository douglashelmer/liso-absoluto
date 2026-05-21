"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Crosshair,
  FlaskConical,
  Shield,
  Sparkles,
  Star,
  XCircle,
} from "lucide-react";

const CHECKOUT = "https://pay.hub.la/1mB7eCtWxgKUlegy6NFO";

function useFadeUp() {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduce ? 0 : 0.6 },
  };
}

const modules = [
  {
    num: "01",
    title: "Diagnóstico Preciso",
    description:
      "Análise sensorial, teste de elasticidade, mapeamento de porosidade e identificação de danos anteriores. O protocolo que elimina surpresas antes de abrir qualquer produto.",
    image: "/cards/01.jpg",
  },
  {
    num: "02",
    title: "Preparação Estratégica",
    description:
      "A higienização que abre cutícula com controle, divisão em quadrantes e enxágue de alta performance. A base invisível de todo alisamento que dura.",
    image: "/cards/02.jpg",
  },
  {
    num: "03",
    title: "Aplicação com Ciência",
    description:
      "Dosagem precisa, distância de segurança do couro cabeludo, oclusão potencializada e reequilíbrio de pH. O que separa uma aplicação segura de um corte químico.",
    image: "/cards/03.jpg",
  },
  {
    num: "04",
    title: "Selagem Térmica",
    description:
      "Escovação alinhadora, secagem 100%, temperatura calibrada por espessura e ciclos de selagem. Como entregar o brilho espelhado sem danificar — técnica, não força.",
    image: "/cards/04.jpg",
  },
  {
    num: "05",
    title: "Pós-Tratamento e Brilho Final",
    description:
      "Remoção de resíduos térmicos, hidratação profunda, enluvamento e neutralização final. O toque de especialista que faz o liso durar semanas a mais.",
    image: "/cards/05.jpg",
  },
  {
    num: "B",
    title: "Bônus: Teste de Mecha",
    description:
      "Como selecionar a mecha, interpretar resultados, identificar incompatibilidade química e comunicar com a cliente. Sua proteção ética antes de qualquer procedimento.",
    image: "/cards/06.jpg",
  },
];

const steps = [
  {
    icon: Crosshair,
    num: "01",
    title: "Diagnóstico de Elite",
    desc: "Antes de qualquer produto, você aprende a ler: porosidade, elasticidade, danos anteriores. O diagnóstico define tudo que vem depois.",
  },
  {
    icon: FlaskConical,
    num: "02",
    title: "Protocolo Científico",
    desc: "Higienização estratégica, aplicação milimétrica, controle de pH, selagem térmica com temperatura certa para cada fio.",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "Resultado que Fideliza",
    desc: "Pós-tratamento de hidratação profunda e home care orientado. O alisamento termina com o tratamento — não com a prancha.",
  },
];

const forYou = [
  "Você já atua em salão, mas os resultados ainda variam de cliente para cliente",
  "Quer entender a ciência por trás do alisamento — não só seguir uma receita",
  "Quer ter segurança técnica para cobrar mais e justificar o preço do seu serviço",
  "Cansa de ver o resultado diminuir antes do esperado e não saber por quê",
];

const notForYou = [
  "Você quer uma fórmula mágica sem precisar entender como o fio funciona",
  "Não tem intenção de implementar o protocolo no seu atendimento",
  "Acha que alisamento é só passar produto e usar a prancha",
];

const faqs = [
  {
    q: "Preciso ter experiência prévia com alisamento para fazer o curso?",
    a: "O curso foi desenvolvido para profissionais de salão que já atuam ou estão iniciando na área. O conteúdo parte do diagnóstico desde o início, então cobre o fundamento mesmo para quem ainda não teve muito contato com o processo.",
  },
  {
    q: "Quanto tempo tenho para assistir o conteúdo?",
    a: "Acesso vitalício. Não tem prazo. Você assiste no seu ritmo, revisita os módulos quando precisar e acompanha qualquer atualização que o conteúdo receber.",
  },
  {
    q: "O curso é ao vivo ou gravado?",
    a: "Gravado. Você acessa quando quiser, pausa, volta, assiste de novo. Não depende de horário ou data.",
  },
  {
    q: "Como recebo o acesso após a compra?",
    a: "Imediatamente após a confirmação do pagamento, você recebe os dados de acesso no e-mail que usou na compra.",
  },
  {
    q: "E se eu não gostar ou o curso não atender às minhas expectativas?",
    a: "7 dias de garantia total. Sem questionamentos. Acessa, assiste, e se não for o que esperava, devolvemos tudo.",
  },
];

export default function Home() {
  const fadeUp = useFadeUp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>

      {/* ── Hero ── */}
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-28 overflow-hidden">
        {/* Imagem hero — mobile */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/HERO.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        {/* Imagem hero — desktop */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/herodesk.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/55 via-bg/50 to-bg" />
        {/* Gradiente horizontal desktop — funde o lado esquerdo */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-bg/90 via-bg/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/6 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative w-full px-5 md:pl-16 lg:pl-24 text-center md:text-left">
          <div className="md:max-w-[440px] lg:max-w-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 mb-8"
          >
            <Star className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span className="text-xs font-semibold text-accent tracking-wide uppercase">
              Curso Online&nbsp;· Acesso Vitalício&nbsp;· 5 Módulos + Bônus
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl md:text-[2.6rem] lg:text-5xl font-bold tracking-tight leading-[1.2] mb-5 text-balance"
          >
            Alisamento que dura,{" "}
            <span className="text-gradient">brilho que impressiona</span>{" "}
            — começa no diagnóstico, não no produto.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-lg text-ink-dim max-w-2xl mx-auto md:mx-0 mb-8 leading-snug md:leading-relaxed"
          >
            Aprenda a ler cada fio antes de tocar na química. Do diagnóstico preciso à
            hidratação final, este curso te dá o protocolo completo para entregar resultados
            que fidelizam clientes e posicionam você como especialista no mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12"
          >
            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-bg font-bold text-lg hover:bg-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg touch-manipulation"
            >
              Quero dominar o alisamento
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-ink-dimmer"
          >
            {["5 módulos + bônus exclusivo", "Acesso vitalício ao conteúdo", "100% online — assiste quando quiser"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  {item}
                </span>
              )
            )}
          </motion.div>
          </div>
        </div>
      </section>

      {/* ── Banner 1 — instrutoras ── */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="relative w-full aspect-[21/9] min-h-[220px]">
          <Image
            src="/cards/07.jpg"
            alt="Marineuma Viana e Marijeuza Pereira — instrutoras do curso Liso Absoluto"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-bg/40 to-bg/80" />
          <div className="absolute inset-0 flex items-center justify-center px-5">
            <div className="bg-bg/70 backdrop-blur-md border border-accent/30 rounded-2xl px-8 py-6 md:px-14 md:py-8 max-w-3xl text-center">
              <p className="font-display text-xl md:text-4xl font-bold leading-snug">
                <span className="text-ink">Ministrado por</span>
                <br />
                <span className="text-accent">Marineuma Viana</span>
                <span className="text-ink-dim"> &amp; </span>
                <span className="text-accent">Marijeuza Pereira</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problema ── */}
      <section className="py-20 md:py-32 bg-bg-soft">
        <div className="max-w-3xl mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-5xl font-bold mb-8 text-balance leading-tight"
          >
            Você sabe alisar.{" "}
            <span className="text-ink-dim">
              Mas o resultado some antes da cliente voltar.
            </span>
          </motion.h2>

          <motion.div {...fadeUp} className="space-y-5 text-ink-dim text-lg leading-relaxed">
            <p>
              Você aplica o produto, usa a prancha, entrega um liso bonito. A cliente sai
              satisfeita. Aí vem o pior: duas semanas depois, o ondulado voltou. Ela não
              retornou — e não recomendou.
            </p>
            <p>
              Não é falta de esforço. É que ninguém te ensinou a diferença entre um cabelo
              com porosidade fechada e um com cutícula erodida — e como cada um reage
              diferente ao mesmo produto. Você aprendeu a receita, mas não a ciência.
            </p>
            <p>
              Resultado inconsistente. Clientes que não fidelizam. Dificuldade de cobrar
              mais porque o serviço parece igual ao da cabeleireira da esquina.
            </p>
          </motion.div>

          <motion.p
            {...fadeUp}
            className="mt-8 text-ink font-semibold text-xl italic border-l-4 border-accent pl-5"
          >
            Não é falta de talento. É falta de um protocolo baseado na estrutura real do fio.
          </motion.p>
        </div>
      </section>

      {/* ── Agita ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-5xl font-bold mb-8 text-balance leading-tight"
          >
            Enquanto você aplica produto na intuição,{" "}
            <span className="text-accent">
              a especialista ao lado cobra 3x mais
            </span>{" "}
            — e a agenda dela está cheia.
          </motion.h2>

          <motion.div {...fadeUp} className="space-y-5 text-ink-dim text-lg leading-relaxed">
            <p>
              Não porque ela é mais experiente. Porque ela entende o que está acontecendo
              dentro de cada fibra capilar. Sabe identificar a porosidade antes de abrir o
              produto. Testa a elasticidade antes de qualquer química. Faz o mapa de danos
              antes de escolher a técnica.
            </p>
            <p>
              Esse protocolo não é segredo de salão caro. É ciência aplicada — e é
              exatamente o que este curso te ensina, do primeiro módulo ao último.
            </p>
          </motion.div>

          <motion.p
            {...fadeUp}
            className="mt-8 text-ink font-semibold text-xl italic border-l-4 border-accent pl-5"
          >
            Diagnóstico preciso uma vez. Resultado que dura meses. Cliente que volta e ainda te indica.
          </motion.p>
        </div>
      </section>

      {/* ── Solution intro ── */}
      <section className="py-16 bg-bg-soft border-t border-white/5">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-5xl font-bold mb-6 text-balance"
          >
            Este curso não te ensina a receita.{" "}
            <span className="text-accent">Te ensina a ler o cabelo.</span>
          </motion.h2>
          <motion.p {...fadeUp} className="text-ink-dim text-lg leading-relaxed">
            Cada módulo foi construído em cima de um princípio: o alisamento perfeito não
            começa na aplicação — começa na análise. Quando você entende a estrutura do fio,
            a seleção do produto vira óbvia. A técnica vira precisa. O resultado vira
            consistente.
          </motion.p>
        </div>
      </section>

      {/* ── Como funciona (3 passos) ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-14 text-balance"
          >
            Como funciona o protocolo
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-bg-card border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <step.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div className="font-display text-4xl font-bold text-ink-dimmer/40">
                    {step.num}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-ink-dim leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Banner 2 ── */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="relative w-full aspect-[21/9] min-h-[180px]">
          <Image
            src="/cards/08.jpg"
            alt="Técnica de alisamento profissional de alto padrão"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/30 to-bg/60" />
          <div className="absolute inset-0 flex items-center justify-center px-5">
            <p className="font-display text-2xl md:text-5xl font-bold text-center leading-tight drop-shadow-lg">
              <span className="text-ink">&ldquo;Alisar é química. Alisar com técnica e segurança</span>
              <br />
              <span className="text-accent">profissional faz toda a diferença.&rdquo;</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Módulos ── */}
      <section id="modulos" className="py-20 md:py-32 bg-bg-soft scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
              O que você aprende
            </h2>
            <p className="text-ink-dim text-lg max-w-xl mx-auto">
              5 módulos completos + 1 bônus exclusivo. Cada aula foi construída em cima de
              resultado real — não de teoria desconectada da bancada.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.num}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={mod.image}
                    alt={`Módulo ${mod.num}: ${mod.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-bg/80 backdrop-blur-sm border border-accent/30">
                    <span className="text-xs font-bold text-accent">
                      {mod.num === "B" ? "BÔNUS" : `MÓD. ${mod.num}`}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold mb-2">{mod.title}</h3>
                  <p className="text-ink-dim text-sm leading-relaxed">{mod.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Para quem ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-14 text-balance"
          >
            Este curso é pra você?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              {...fadeUp}
              className="bg-bg-card border border-accent/40 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-accent" aria-hidden="true" />
                <h3 className="font-display text-2xl font-bold text-accent">É pra você se:</h3>
              </div>
              <ul className="space-y-4 text-ink-dim">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-accent shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-bg-card border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-ink-dimmer" aria-hidden="true" />
                <h3 className="font-display text-2xl font-bold text-ink-dim">
                  Não é pra você se:
                </h3>
              </div>
              <ul className="space-y-4 text-ink-dim">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle
                      className="w-5 h-5 text-ink-dimmer shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quebra de objeção ── */}
      <section className="py-20 md:py-32 bg-bg-soft border-t border-white/5">
        <div className="max-w-3xl mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-4xl font-bold mb-8 text-balance"
          >
            &ldquo;Já fiz outros cursos de alisamento. Por que este seria diferente?&rdquo;
          </motion.h2>

          <motion.div {...fadeUp} className="space-y-5 text-ink-dim text-lg leading-relaxed">
            <p>
              A maioria dos cursos te ensina a sequência: lava, divide, aplica, enxágua,
              seca, passa a prancha. Funciona — às vezes. Quando o cabelo é &ldquo;fácil&rdquo;.
            </p>
            <p>
              Este curso começa onde os outros terminam: no diagnóstico. Porque é a
              porosidade que define qual produto usar. É o teste de elasticidade que decide
              se você aplica hoje ou não. É o mapeamento de danos que determina qual técnica
              protege o fio em vez de destruí-lo.
            </p>
            <p>
              Não é outra receita. É o raciocínio clínico que faz você parar de depender de
              fórmulas e começar a tomar decisões técnicas com segurança.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 md:py-32 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
              Acesso completo ao protocolo
            </h2>
            <p className="text-ink-dim text-lg leading-relaxed">
              Uma consulta com especialista capilar custa R$&nbsp;150–300 por sessão. Um
              curso técnico presencial vai de R$&nbsp;500 a R$&nbsp;2.000 — sem acesso
              vitalício. Aqui você tem o protocolo completo, revisável a qualquer hora, por
              uma fração desse valor.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="relative bg-bg-card border-2 border-accent rounded-2xl p-8 md:p-10 terminal-glow"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-bg text-xs font-bold uppercase tracking-wider">
              Acesso Completo
            </div>

            <div className="text-center mb-8">
              <div className="text-ink-dim text-sm mb-2">Investimento único</div>
              <div className="font-display text-6xl font-bold text-accent mb-1">
                R$&nbsp;127
              </div>
              <div className="text-ink-dimmer text-sm">
                ou 12x de R$&nbsp;12,91 no cartão
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "5 módulos completos com conteúdo técnico aprofundado",
                "Módulo bônus: Teste de Mecha e Gestão de Expectativas",
                "Acesso vitalício — revise quando e quantas vezes quiser",
                "100% online — assiste no seu ritmo, no seu dispositivo",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-dim">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-4 rounded-full bg-accent text-bg font-bold text-lg hover:bg-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg touch-manipulation"
            >
              Sim, quero dominar o alisamento
            </a>

            <p className="text-center text-ink-dimmer text-sm mt-4">
              Pagamento seguro · Garantia 7 dias · Acesso imediato
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Garantia ── */}
      <section className="py-20 md:py-24 bg-bg-soft border-t border-white/5">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <motion.div {...fadeUp}>
            <Shield className="w-16 h-16 text-accent mx-auto mb-6" aria-hidden="true" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
              Garantia Sem Hesitar — 7 dias.
            </h2>
            <p className="text-ink-dim text-lg leading-relaxed">
              Acessa o conteúdo, assiste os primeiros módulos. Se até o sétimo dia depois da
              compra achar que não é o que esperava, envia um e-mail e devolvemos 100%{" "}
              do seu investimento.{" "}
              <strong className="text-ink">Sem formulário. Sem ligação. Sem perguntas.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-2xl mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-balance"
          >
            Perguntas frequentes
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-bg-card border border-white/10 rounded-xl overflow-hidden hover:border-accent/40 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full cursor-pointer px-6 py-5 flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-ink">{faq.q}</span>
                  <span
                    className={`text-accent text-2xl shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-ink-dim leading-relaxed">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 md:py-32 bg-bg-soft border-t border-white/5">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-5xl font-bold mb-6 text-balance"
          >
            O protocolo que transforma atendimento em especialidade.{" "}
            <span className="text-accent">Você entra?</span>
          </motion.h2>

          <motion.p {...fadeUp} className="text-ink-dim text-lg leading-relaxed mb-10">
            Cada cliente que entra no seu salão é uma oportunidade de entregar um resultado
            que ela vai contar para as amigas. Com o protocolo certo, isso deixa de ser sorte
            e vira consistência.
          </motion.p>

          <motion.div {...fadeUp}>
            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-accent text-bg font-bold text-lg hover:bg-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg touch-manipulation"
            >
              Sim, quero dominar o alisamento
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <p className="text-ink-dimmer text-sm mt-4">
              Pagamento seguro · Garantia 7 dias · Acesso vitalício
            </p>
          </motion.div>

          <motion.p
            {...fadeUp}
            className="mt-12 text-ink-dim text-base italic border-t border-white/5 pt-8"
          >
            <strong className="text-ink not-italic">P.S.</strong> —&nbsp;A diferença entre a
            cabeleireira que cobra R$&nbsp;80 e a especialista que cobra R$&nbsp;250 não é a
            prancha. É o protocolo. Você acaba de encontrar o seu.
          </motion.p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/logo.png"
            alt="Liso Absoluto"
            width={100}
            height={30}
            className="h-8 w-auto object-contain opacity-70"
          />
          <p className="text-ink-dimmer text-sm text-center">
            © {mounted ? new Date().getFullYear() : "2026"} Liso Absoluto · Todos os direitos reservados
          </p>
          <a
            href="mailto:contato@lisoabsoluto.com"
            className="text-ink-dimmer text-sm hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            contato@lisoabsoluto.com
          </a>
        </div>
      </footer>

    </>
  );
}
