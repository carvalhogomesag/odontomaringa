/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Plus, 
  Minus, 
  X,
  Phone,
  MessageSquare,
  Smile,
  Activity,
  Sparkles,
  Zap,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Specialty {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Data ---
const SPECIALTIES: Specialty[] = [
  { 
    id: 'implante', 
    title: 'Implante Dentário', 
    description: 'Recupere a funcionalidade e estética do seu sorriso com tecnologia de ponta.',
    icon: <Activity className="w-8 h-8" />
  },
  { 
    id: 'ortodontia', 
    title: 'Ortodontia', 
    description: 'Aparelhos modernos e discretos para alinhar seu sorriso com conforto.',
    icon: <Zap className="w-8 h-8" />
  },
  { 
    id: 'endodontia', 
    title: 'Endodontia (Canal)', 
    description: 'Tratamento humanizado e indolor para preservar a saúde dos seus dentes.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  { 
    id: 'clareamento', 
    title: 'Clareamento Dental', 
    description: 'Dentes mais brancos e radiantes com técnicas seguras e eficazes.',
    icon: <Sparkles className="w-8 h-8" />
  },
  { 
    id: 'lentes', 
    title: 'Lentes de Contato', 
    description: 'Transformação estética completa com facetas de porcelana ultra-finas.',
    icon: <Smile className="w-8 h-8" />
  },
  { 
    id: 'protese', 
    title: 'Prótese Dentária', 
    description: 'Soluções fixas ou removíveis para devolver sua autoestima ao sorrir.',
    icon: <Award className="w-8 h-8" />
  },
  { 
    id: 'harmonizacao', 
    title: 'Harmonização Orofacial', 
    description: 'Equilíbrio estético entre o sorriso e as linhas do seu rosto.',
    icon: <Sparkles className="w-8 h-8" />
  },
  { 
    id: 'estetica', 
    title: 'Odontologia Estética', 
    description: 'O que há de mais moderno em restaurações e plástica dental.',
    icon: <Stethoscope className="w-8 h-8" />
  },
];

const TESTIMONIALS = [
  { name: 'Ricardo Silva', text: 'Consegui atendimento muito rápido em Maringá. O especialista indicado foi excelente!', rating: 5 },
  { name: 'Mariana Costa', text: 'O portal facilitou muito minha busca por um ortodontista. Recomendo a todos.', rating: 5 },
  { name: 'João Pereira', text: 'Atendimento premium desde o primeiro contato. Muito satisfeito com o resultado.', rating: 5 },
];

const FAQS = [
  { q: 'Quanto custa a avaliação?', a: 'O valor da avaliação depende do especialista parceiro, mas muitos oferecem condições facilitadas para pacientes vindos do portal.' },
  { q: 'Como escolhem os dentistas?', a: 'Selecionamos apenas profissionais com registro ativo, clínicas bem avaliadas e vasta experiência em suas especialidades.' },
  { q: 'Posso escolher o profissional?', a: 'Sim, após o seu pedido, apresentamos as melhores opções em Maringá para que você tome a decisão final.' },
  { q: 'O atendimento é gratuito?', a: 'O portal de encaminhamento é gratuito para o paciente. Os custos do tratamento são tratados diretamente com a clínica parceira.' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-dental-blue p-2 rounded-lg">
            <Stethoscope className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-dental-blue' : 'text-white'}`}>OdontoMaringá</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#especialidades" className={`font-medium hover:text-dental-blue transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>Especialidades</a>
          <a href="#como-funciona" className={`font-medium hover:text-dental-blue transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>Como Funciona</a>
          <a href="#faq" className={`font-medium hover:text-dental-blue transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>Dúvidas</a>
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="btn-primary py-2 px-6 text-sm">
            Agendar Agora
          </button>
        </div>
      </div>
    </nav>
  );
};

const SpecialtyCard = ({ specialty, onClick }: { specialty: Specialty, onClick: (s: Specialty) => void, key?: any }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group cursor-pointer"
      onClick={() => onClick(specialty)}
    >
      <div className="bg-dental-light text-dental-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-dental-blue group-hover:text-white transition-colors">
        {specialty.icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-slate-800">{specialty.title}</h3>
      <p className="text-slate-500 mb-6 leading-relaxed">{specialty.description}</p>
      <div className="flex items-center text-dental-blue font-semibold gap-2 group-hover:gap-4 transition-all">
        Agendar Avaliação <ChevronRight className="w-5 h-5" />
      </div>
    </motion.div>
  );
};

const Modal = ({ isOpen, onClose, selectedSpecialty }: { isOpen: boolean, onClose: () => void, selectedSpecialty: Specialty | null }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white w-full max-w-xl rounded-[2rem] overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors">
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Solicitar Avaliação</h2>
            <p className="text-slate-500">Preencha os dados abaixo para encontrarmos o melhor especialista em Maringá para você.</p>
          </div>

          <form 
            name="captura-leads-dentistas" 
            method="POST" 
            data-netlify="true" 
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="captura-leads-dentistas" />
            <input type="hidden" name="procedimento" value={selectedSpecialty?.title || 'Geral'} />
            <input type="hidden" name="cidade" value="Maringá" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Nome Completo</label>
                <input required name="nome" type="text" placeholder="Seu nome" className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-dental-blue transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">WhatsApp</label>
                <input required name="whatsapp" type="tel" placeholder="(44) 99999-9999" className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-dental-blue transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Urgência</label>
              <select name="urgencia" className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-dental-blue transition-all">
                <option value="sem-pressa">Sem pressa</option>
                <option value="esta-semana">Esta semana</option>
                <option value="urgente">Urgente</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">O que você precisa?</label>
              <textarea name="mensagem" rows={3} placeholder="Descreva brevemente sua necessidade..." className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-dental-blue transition-all resize-none"></textarea>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input required type="checkbox" name="aceite" id="aceite" className="mt-1 rounded text-dental-blue focus:ring-dental-blue" />
              <label htmlFor="aceite" className="text-sm text-slate-500 leading-snug">
                Aceito ser contatado por um especialista parceiro para agendar minha avaliação.
              </label>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-lg mt-4">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQItem = ({ faq }: { faq: { q: string, a: string }, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-dental-blue transition-colors"
      >
        <span className="text-lg font-bold text-slate-800">{faq.q}</span>
        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  const openModal = (specialty?: Specialty) => {
    setSelectedSpecialty(specialty || null);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-dental-blue/10 selection:text-dental-blue">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/dental-clinic/1920/1080" 
            alt="Consultório Moderno" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium mb-8">
              <MapPin className="w-4 h-4 text-dental-blue" /> Atendimento Premium em Maringá
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Encontre o dentista <span className="text-dental-blue italic">ideal</span> em Maringá
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Conectamos você aos melhores especialistas em implantes, ortodontia, endodontia e estética dental da cidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => openModal()} className="btn-primary text-lg">
                Agendar Avaliação
              </button>
              <button onClick={() => document.getElementById('especialidades')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary !border-white !text-white hover:!bg-white/10 text-lg">
                Encontrar Especialista
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-12 left-0 right-0 z-10 hidden lg:block"
        >
          <div className="max-w-7xl mx-auto px-6 flex gap-12">
            {[
              { label: 'Especialistas', value: '50+' },
              { label: 'Pacientes Felizes', value: '10k+' },
              { label: 'Anos em Maringá', value: '15+' },
            ].map((stat, i) => (
              <div key={i} className="text-white">
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/60 uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Como Funciona</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Três passos simples para transformar o seu sorriso com os melhores profissionais.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Stethoscope />, title: 'Escolha o Procedimento', desc: 'Selecione a especialidade que você precisa entre as diversas opções disponíveis.' },
              { icon: <MapPin />, title: 'Encontre Especialistas', desc: 'Nossa inteligência local seleciona os melhores dentistas em Maringá para o seu caso.' },
              { icon: <Clock />, title: 'Atendimento Rápido', desc: 'Receba o contato da clínica e agende sua avaliação em tempo recorde.' },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-8 text-dental-blue group-hover:bg-dental-blue group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {React.cloneElement(step.icon as React.ReactElement, { className: 'w-10 h-10' })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="especialidades" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nossas Especialidades</h2>
              <p className="text-slate-500 text-lg">Oferecemos uma gama completa de tratamentos odontológicos com especialistas certificados em Maringá.</p>
            </div>
            <button onClick={() => openModal()} className="btn-secondary">
              Ver Todas Especialidades
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALTIES.map((specialty) => (
              <SpecialtyCard key={specialty.id} specialty={specialty} onClick={(s) => openModal(s)} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-dental-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">O que dizem nossos pacientes</h2>
            <div className="flex justify-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-white"
              >
                <p className="text-lg italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-white/60">Paciente Verificado</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/dentist-working/800/1000" 
              alt="Dentista trabalhando" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 text-green-600 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-bold text-slate-800">Qualidade Garantida</span>
              </div>
              <p className="text-sm text-slate-500">Todos os nossos parceiros passam por um rigoroso processo de verificação.</p>
            </motion.div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Por que escolher o nosso portal?</h2>
            <div className="space-y-8">
              {[
                { title: 'Dentistas Verificados', desc: 'Apenas profissionais com excelente histórico e clínicas modernas.' },
                { title: 'Atendimento Rápido', desc: 'Nossa rede em Maringá garante que você não espere semanas por uma consulta.' },
                { title: 'Especialistas por Procedimento', desc: 'Encaminhamos você para quem realmente entende do seu caso.' },
                { title: 'Agendamento Fácil', desc: 'Todo o processo é feito via WhatsApp, de forma simples e direta.' },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-dental-light text-dental-blue rounded-2xl flex items-center justify-center font-bold text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => openModal()} className="btn-primary mt-12">
              Solicitar Avaliação Agora
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-slate-500">Tudo o que você precisa saber sobre o nosso serviço em Maringá.</p>
          </div>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-dental-blue/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Encontre seu dentista em Maringá hoje</h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                Não adie mais o cuidado com o seu sorriso. Solicite uma avaliação com um especialista agora mesmo.
              </p>
              <button onClick={() => openModal()} className="btn-primary text-xl px-12 py-5">
                Solicitar Avaliação <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-dental-blue p-2 rounded-lg">
                  <Stethoscope className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-bold tracking-tight text-dental-blue">OdontoMaringá</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                O maior portal de conexão entre pacientes e especialistas odontológicos de Maringá. Qualidade e confiança em cada sorriso.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-dental-blue hover:shadow-md transition-all">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-dental-blue hover:shadow-md transition-all">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Links Rápidos</h4>
              <ul className="space-y-4">
                <li><a href="#especialidades" className="text-slate-500 hover:text-dental-blue transition-colors">Especialidades</a></li>
                <li><a href="#como-funciona" className="text-slate-500 hover:text-dental-blue transition-colors">Como Funciona</a></li>
                <li><a href="#faq" className="text-slate-500 hover:text-dental-blue transition-colors">Dúvidas</a></li>
                <li><a href="#" className="text-slate-500 hover:text-dental-blue transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">SEO Local</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-dental-blue transition-colors">Implante Dentário Maringá</a></li>
                <li><a href="#" className="text-slate-500 hover:text-dental-blue transition-colors">Ortodontista Maringá</a></li>
                <li><a href="#" className="text-slate-500 hover:text-dental-blue transition-colors">Dentista em Maringá</a></li>
                <li><a href="#" className="text-slate-500 hover:text-dental-blue transition-colors">Clareamento Dental Maringá</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-500">
                  <MapPin className="w-5 h-5 text-dental-blue" /> Maringá, PR - Brasil
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <Phone className="w-5 h-5 text-dental-blue" /> (44) 99999-9999
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <MessageSquare className="w-5 h-5 text-dental-blue" /> Atendimento via WhatsApp
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} OdontoMaringá. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              Desenvolvido para <span className="font-bold text-slate-600">Alta Conversão</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            selectedSpecialty={selectedSpecialty} 
          />
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href="https://wa.me/5544999999999"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageSquare className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
