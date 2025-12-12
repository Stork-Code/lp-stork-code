import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Shield, Layers, Server, ArrowRight, CheckCircle, Database, Cpu, Users, Zap, Terminal, Globe, ChevronRight } from 'lucide-react';

import logoImg from '@assets/stork-logo.png';

const StorkCodeLP = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Logo Component replacement for "Padrão.png"
  const Logo = () => (
    <img src={logoImg} alt="Stork Code" className="h-12 w-auto object-contain" />
  );

  // Componente de Fundo Abstrato (Tech Lines)
  const TechBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-graphite" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="10%" cy="20%" r="2" className="fill-gold animate-pulse" />
        <circle cx="90%" cy="60%" r="2" className="fill-gold animate-pulse delay-700" />
        <circle cx="50%" cy="90%" r="2" className="fill-gold animate-pulse delay-300" />
      </svg>
    </div>
  );

  return (
    <div className="font-sans antialiased text-deepBlue bg-white w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-deepBlue/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Solução', 'Serviços', 'Processo', 'Diferenciais', 'Planos'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-white font-body text-sm hover:text-gold transition-colors"
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollToSection('contato')} className="btn-primary rounded text-sm uppercase tracking-wide">
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-deepBlue border-t border-gray-800 p-6 flex flex-col space-y-4 shadow-xl">
             {['Solução', 'Serviços', 'Processo', 'Diferenciais', 'Planos'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-white font-body text-lg text-left"
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollToSection('contato')} className="btn-primary w-full rounded text-center">Fale com especialista</button>
          </div>
        )}
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center bg-deepBlue pt-20 overflow-hidden">
        <TechBackground />
        {/* Abstract Glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-navy rounded-full blur-[128px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full blur-[100px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-gold text-xs font-bold font-heading uppercase tracking-widest">Tecnologia Premium</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
              Tecnologia que vira <span className="text-gold">patrimônio.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-graphite font-body leading-relaxed max-w-lg">
              Soluções digitais feitas do zero, com qualidade técnica, documentação completa e autonomia real para sua empresa evoluir com segurança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => scrollToSection('contato')} className="btn-primary rounded shadow-lg text-center">
                Fale com um especialista
              </button>
              <button onClick={() => scrollToSection('processo')} className="btn-secondary rounded text-center">
                Conheça como trabalhamos
              </button>
            </div>
          </div>

          {/* Abstract Hero Visual */}
          <div className="relative hidden md:block h-[500px]">
             {/* Creating a CSS-only tech visualization */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 border border-graphite/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 border border-gold/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-8 border border-navy/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  
                  {/* Central Hub */}
                  <div className="absolute inset-0 m-auto w-40 h-40 bg-navy/20 backdrop-blur-md rounded-lg rotate-45 border border-gold/30 flex items-center justify-center shadow-[0_0_30px_rgba(32,76,162,0.5)]">
                    <Code className="text-gold w-16 h-16 -rotate-45" />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-deepBlue p-2 rounded-lg border border-graphite shadow-xl">
                     <Database className="text-graphite w-6 h-6" />
                  </div>
                   <div className="absolute bottom-0 right-0 translate-y-6 bg-deepBlue p-2 rounded-lg border border-gold shadow-xl">
                     <Shield className="text-gold w-6 h-6" />
                  </div>
                   <div className="absolute bottom-0 left-0 translate-y-6 bg-deepBlue p-2 rounded-lg border border-graphite shadow-xl">
                     <Layers className="text-graphite w-6 h-6" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: IDENTIFICAÇÃO COM A DOR (White Theme) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Visual da Dor (Abstract Barrier) */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-200">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                   <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 to-transparent"></div>
                </div>
                {/* Cadeias/Bloqueios Abstratos */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                  <div className="w-1/2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-16 h-16 border-4 border-red-400/30 rounded-full flex items-center justify-center mt-4">
                    <X className="text-red-400/50 w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepBlue leading-tight">
                Você sente que está <span className="text-navy decoration-gold underline decoration-4 underline-offset-4">preso à empresa</span> que desenvolveu o seu sistema?
              </h2>
              
              <div className="space-y-4 font-body text-gray-600 text-lg">
                <p className="flex items-start gap-3">
                  <span className="text-navy mt-1"><ChevronRight size={20}/></span>
                  Talvez cada melhoria custe caro.
                </p>
                <p className="flex items-start gap-3">
                   <span className="text-navy mt-1"><ChevronRight size={20}/></span>
                  Talvez cada ajuste demore.
                </p>
                <p className="flex items-start gap-3">
                   <span className="text-navy mt-1"><ChevronRight size={20}/></span>
                  Talvez a tecnologia pareça sua... mas quem controla o crescimento não é você.
                </p>
                <p className="text-xl font-bold text-deepBlue pt-4 border-l-4 border-gold pl-4">
                  E quando o negócio escala, o sistema não acompanha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: A RESPOSTA (Solution) */}
      <section id="solucao" className="py-24 bg-deepBlue relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-deepBlue to-[#0f2038]"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-5" style={{backgroundImage: 'radial-gradient(#A1BCD3 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <div className="inline-block p-3 rounded-full bg-navy/30 backdrop-blur border border-navy mb-4">
            <CheckCircle className="text-gold w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Nós criamos tecnologia que <span className="text-gold">pertence ao seu negócio.</span>
          </h2>

          <div className="text-graphite font-body text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              Na Stork Code, cada solução é construída como um <strong className="text-white">ativo da sua empresa</strong>.
            </p>
            <p>
              Desenvolvemos sistemas, sites e plataformas com arquitetura sólida, documentação completa e autonomia total, para que você evolua sem depender de ninguém.
            </p>
            <p className="text-2xl text-white font-bold pt-6">
              A tecnologia deixa de ser um obstáculo e passa a ser um <span className="text-gold">patrimônio estratégico.</span>
            </p>
          </div>

          <div className="pt-12">
            {/* Visual de Expansão */}
            <div className="flex justify-center items-end gap-2 md:gap-4 h-32 opacity-80">
               {[40, 60, 45, 80, 55, 90, 70, 100, 85, 120].map((h, i) => (
                 <div 
                    key={i} 
                    className="w-4 md:w-8 bg-gradient-to-t from-navy to-gold rounded-t-sm transition-all duration-1000"
                    style={{ height: scrolled ? `${h}%` : '10%' }}
                 ></div>
               ))}
            </div>
            <p className="text-xs text-graphite mt-4 uppercase tracking-widest">Crescimento Escalável</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVIÇOS */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <span className="text-navy font-bold tracking-wider uppercase text-sm">O que fazemos</span>
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepBlue mt-2">Soluções Sob Medida</h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-gold group">
                <div className="w-14 h-14 bg-deepBlue rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Terminal className="text-gold group-hover:text-deepBlue w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-deepBlue mb-3">Softwares Sob Medida</h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  Soluções exclusivas, feitas para escalar junto com seu negócio. Arquitetura robusta para problemas complexos.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-gold group">
                <div className="w-14 h-14 bg-deepBlue rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Globe className="text-gold group-hover:text-deepBlue w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-deepBlue mb-3">Sites Profissionais</h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  Presença digital rápida, segura e com alta performance. Design pensado para autoridade.
                </p>
              </div>

               {/* Card 3 */}
               <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-gold group">
                <div className="w-14 h-14 bg-deepBlue rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Zap className="text-gold group-hover:text-deepBlue w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-deepBlue mb-3">Landing Pages</h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  Focadas em conversão imediata. Estratégia visual para transformar visitantes em leads.
                </p>
              </div>

               {/* Card 4 */}
               <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-gold group">
                <div className="w-14 h-14 bg-deepBlue rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Server className="text-gold group-hover:text-deepBlue w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-deepBlue mb-3">Infra & Deploy</h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  Servidores nacionais de alta performance, manutenção contínua e deploy automatizado.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 5: PROCESSO */}
      <section id="processo" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepBlue">
               Como entregamos <br/>tecnologia de alto nível
             </h2>
          </div>

          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100"></div>

            <div className="grid md:grid-cols-6 gap-8">
              {[
                { step: "01", title: "Diagnóstico", desc: "Entendimento estratégico" },
                { step: "02", title: "Arquitetura", desc: "Planejamento da solução" },
                { step: "03", title: "Dev", desc: "Desenvolvimento limpo" },
                { step: "04", title: "Testes", desc: "Validação rigorosa" },
                { step: "05", title: "Deploy", desc: "Lançamento profissional" },
                { step: "06", title: "Suporte", desc: "Acompanhamento técnico" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex flex-col items-center justify-center mb-6 relative z-10 group-hover:border-gold group-hover:shadow-lg transition-all duration-300 mx-auto md:mx-0">
                    <span className="text-xs text-gray-400 font-bold">PASSO</span>
                    <span className="text-2xl font-bold text-deepBlue">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-bold text-deepBlue text-center md:text-left">{item.title}</h4>
                  <p className="text-sm text-gray-500 font-body text-center md:text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 bg-deepBlue">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Nossos Valores</h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Qualidade inegociável", text: "Nada de improviso. Cada linha de código é pensada para durar.", icon: CheckCircle },
                { title: "Responsabilidade", text: "Liberdade com disciplina. Compromisso sempre em primeiro lugar.", icon: Shield },
                { title: "Autonomia real", text: "Código + documentação + infraestrutura: tudo entregue para você.", icon: Layers },
                { title: "Propósito técnico", text: "Criamos apenas o que faz sentido para o negócio, sem excessos.", icon: Cpu },
                { title: "Humanidade", text: "Tecnologia feita por pessoas, entendendo pessoas.", icon: Users },
                { title: "Comunidade", text: "Aprender, compartilhar e fortalecer o ecossistema é regra.", icon: Database }
              ].map((val, idx) => (
                <div key={idx} className="bg-navy/20 border border-navy/50 p-8 rounded-lg hover:bg-navy/40 transition-colors">
                   <div className="flex items-center gap-4 mb-4">
                     <val.icon className="text-gold w-6 h-6" />
                     <h3 className="text-xl font-bold font-heading text-white">{val.title}</h3>
                   </div>
                   <p className="text-graphite font-body text-sm leading-relaxed">
                     {val.text}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 7: PLANOS (Optional) */}
      <section id="planos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepBlue">Soluções Contínuas</h2>
             <p className="text-gray-600 mt-4">Para quem busca tranquilidade técnica a longo prazo</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {/* Plano 1 */}
             <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="bg-deepBlue p-6">
                   <h3 className="text-white font-bold text-xl">Hospedagem & Suporte</h3>
                   <div className="mt-2 text-gold text-2xl font-bold">
                     R$ 1.000<span className="text-sm text-gray-400 font-normal">/mês</span>
                   </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm mb-6 flex-1">
                    Hospedagem profissional em Data Center Tier III, servidores escaláveis, backup diário e manutenção técnica contínua.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm text-deepBlue"><CheckCircle size={16} className="text-green-500"/> Suporte Técnico</li>
                    <li className="flex items-center gap-2 text-sm text-deepBlue"><CheckCircle size={16} className="text-green-500"/> Backups Diários</li>
                    <li className="flex items-center gap-2 text-sm text-deepBlue"><CheckCircle size={16} className="text-green-500"/> Ajustes pontuais</li>
                  </ul>
                  <div className="text-xs text-gray-400 mb-4 text-center">Contrato mínimo: 6 meses • Implantação: R$ 1.000</div>
                  <button onClick={() => scrollToSection('contato')} className="w-full py-3 border border-deepBlue text-deepBlue font-bold rounded hover:bg-deepBlue hover:text-white transition-colors uppercase text-sm">Contratar</button>
                </div>
             </div>

             {/* Plano 2 */}
             <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gold flex flex-col relative">
                <div className="bg-deepBlue p-6">
                   <h3 className="text-white font-bold text-xl">Squad Dedicada</h3>
                   <div className="mt-2 text-gold text-2xl font-bold">R$ 5.000<span className="text-sm text-gray-400 font-normal">/mês</span></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm mb-6 flex-1">
                    Equipe gerenciada de Frontend, Backend e DevOps mantendo seu sistema evoluindo constantemente com novas features.
                  </p>
                   <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm text-deepBlue"><CheckCircle size={16} className="text-gold"/> Evolução contínua</li>
                    <li className="flex items-center gap-2 text-sm text-deepBlue"><CheckCircle size={16} className="text-gold"/> Frontend + Backend</li>
                    <li className="flex items-center gap-2 text-sm text-deepBlue"><CheckCircle size={16} className="text-gold"/> Gestão de DevOps</li>
                  </ul>
                  <div className="text-xs text-gray-400 mb-4 text-center">Contrato mínimo: 6 meses</div>
                  <button onClick={() => scrollToSection('contato')} className="w-full py-3 bg-gold text-deepBlue font-bold rounded hover:shadow-lg transition-all uppercase text-sm">Contratar Squad</button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PROVA SOCIAL / FOUNDER */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
             <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto overflow-hidden mb-4 border-2 border-gold">
                {/* Placeholder para foto do fundador */}
                <div className="w-full h-full flex items-center justify-center bg-deepBlue text-white text-3xl font-bold">RS</div>
             </div>
             <p className="text-xl md:text-2xl font-heading text-deepBlue font-bold italic">
               "Tecnologia não deve limitar empresas. Deve impulsioná-las."
             </p>
             <div className="mt-4">
               <p className="font-bold text-deepBlue">Rafael Sedor</p>
               <p className="text-sm text-gray-500 uppercase tracking-wide">Fundador da Stork Code</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA FINAL */}
      <section id="contato" className="py-24 bg-deepBlue relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/20"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-gold/10 rounded-full blur-[80px]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
            Pronto para construir tecnologia que <br/> fortalece o futuro do seu negócio?
          </h2>
          
          <div className="flex flex-col items-center gap-6 pt-6">
            <a href="mailto:contato@storkcode.com.br" className="btn-primary rounded-lg text-lg px-12 py-4 shadow-[0_0_20px_rgba(255,202,36,0.3)]">
              Entre em contato com a Stork Code
            </a>
            
            <a href="https://www.instagram.com/stork_code/" target="_blank" rel="noopener noreferrer" className="text-graphite hover:text-white transition-colors flex items-center gap-2 border-b border-transparent hover:border-white pb-1">
              Siga nas redes sociais <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050c16] py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center">
              <Logo />
           </div>
           
           <div className="text-gray-500 text-sm font-body">
             © {new Date().getFullYear()} Stork Code. Todos os direitos reservados.
           </div>

           <div className="flex gap-6">
             <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Termos</a>
             <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Privacidade</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default StorkCodeLP;
