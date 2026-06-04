/**
 * Assobiacão Web — Terms i18n
 * Aplica traduções PT-BR / EN / ES / FR na página de Termos de Uso.
 * Reage ao evento customizado 'assobiacao-lang' disparado por i18n.js quando
 * o usuário troca de idioma via seletor do nav.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'assobiacao_lang';

  // Mesma lógica de detecção do i18n.js — garante consistência mesmo sem localStorage
  function detectLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && TT[saved]) return saved;
    var nav = (navigator.language || 'pt-BR');
    if (TT[nav]) return nav;
    var prefix = nav.split('-')[0];
    var found = Object.keys(TT).find(function (k) { return k.startsWith(prefix); });
    return found || 'pt-BR';
  }

  // ── Traduções ────────────────────────────────────────────────────────────────

  var TT = {

    /* ── PT-BR ─────────────────────────────────────────────────────────────── */
    'pt-BR': {
      pageTitle: 'Termos de Uso — Assobiacão',
      label:   'Legal',
      title:   'Termos de Uso<br />e Condições',
      updated: 'Última atualização: 4 de junho de 2026',
      intro:   'Bem-vindo ao Assobiacão. Ao usar nosso aplicativo, você concorda com os termos descritos a seguir. Leia com atenção — eles regem sua relação com o app, os torneios e a comunidade.',

      s1num: 'Seção 1', s1title: 'Aceitação dos Termos',
      s1body: '<p>O aplicativo Assobiacão é desenvolvido e operado por <strong>Bookfy Tecnologia LTDA</strong>, pessoa jurídica de direito privado inscrita no CNPJ sob o nº <strong>65.129.453/0001-68</strong> (doravante "Assobiacão" ou "Empresa").</p><p>Ao baixar, instalar ou utilizar o aplicativo Assobiacão (doravante "App" ou "Serviço"), você declara ter lido, compreendido e concordado com estes Termos de Uso e com nossa Política de Privacidade.</p><p>Se você não concorda com qualquer parte destes termos, não utilize o App. O uso continuado do Serviço após alterações nos Termos constituirá aceitação das modificações.</p>',

      s2num: 'Seção 2', s2title: 'Descrição do Serviço',
      s2body: '<p>O Assobiacão é uma plataforma de torneios de assobio que permite aos usuários:</p><ul><li>Gravar e enviar vídeos de assobio para participar de torneios temáticos;</li><li>Receber pontuação automática gerada por inteligência artificial;</li><li>Competir em rankings com outros participantes;</li><li>Ganhar prêmios em dinheiro nos torneios premiados;</li><li>Interagir com a comunidade por meio de curtidas.</li></ul><p>O Assobiacão se reserva o direito de modificar, suspender ou encerrar qualquer funcionalidade do Serviço a qualquer momento, com aviso prévio razoável quando possível.</p>',

      s3num: 'Seção 3', s3title: 'Elegibilidade e Cadastro',
      s3body: '<p>Para usar o Assobiacão você deve:</p><ul><li>Ter <strong>no mínimo 16 anos de idade</strong>;</li><li>Fornecer informações de cadastro verdadeiras e atualizadas;</li><li>Manter a confidencialidade de suas credenciais de acesso;</li><li>Ser responsável por todas as atividades realizadas com sua conta.</li></ul><p>Usuários entre 16 e 17 anos declaram ter autorização de pais ou responsáveis legais para utilizar o aplicativo e para participar de torneios, incluindo o recebimento de prêmios. Menores de 16 anos não devem utilizar este aplicativo.</p><p>Cada conta é <strong>estritamente pessoal e intransferível</strong>. Somente o titular da conta pode utilizá-la. Você concorda em notificar imediatamente o Assobiacão sobre qualquer uso não autorizado de sua conta pelo e-mail <strong>contato@assobiacao.app</strong>.</p><p>Dados de pagamento (CPF para pagamentos via PIX ou e-mail PayPal para pagamentos internacionais) são coletados <strong>apenas no momento do resgate do prêmio</strong>, e não durante o cadastro.</p>',

      s4num: 'Seção 4', s4title: 'Conteúdo do Usuário',
      s4body: '<p>Somente o titular da conta pode enviar gravações. <strong>É proibida a publicação de conteúdo gravado por terceiros em qualquer hipótese.</strong> Ao enviar uma gravação, você declara ser o único autor do conteúdo apresentado.</p><p>Ao enviar gravações de assobio ou qualquer outro conteúdo pelo App, você:</p><ul><li>Declara ser o único titular dos direitos sobre o conteúdo enviado;</li><li>Concede ao Assobiacão uma licença não exclusiva, gratuita, mundial e sublicenciável para usar, reproduzir, distribuir e exibir o conteúdo dentro da plataforma;</li><li>Garante que o conteúdo não viola direitos de terceiros, leis vigentes ou as regras de conduta do App.</li></ul><p>O Assobiacão pode remover qualquer conteúdo que viole estes Termos sem aviso prévio.</p>',

      s5num: 'Seção 5', s5title: 'Regras de Conduta',
      s5body: '<p>É <strong>proibido</strong> usar o Assobiacão para:</p><ul><li>Enviar conteúdo ofensivo, discriminatório, difamatório ou que incite violência;</li><li>Publicar gravações feitas por terceiros — <strong>em hipótese alguma</strong>;</li><li>Compartilhar credenciais de acesso ou permitir que outra pessoa utilize sua conta;</li><li>Realizar fraudes ou manipulação de resultados em torneios;</li><li>Criar múltiplas contas para obter vantagens indevidas;</li><li>Utilizar bots, scripts ou qualquer meio automatizado para interagir com o App;</li><li>Assediar, intimidar ou ameaçar outros usuários.</li></ul><p>O descumprimento dessas regras pode resultar em suspensão ou exclusão permanente da conta, sem direito a reembolso ou compensação por prêmios pendentes.</p>',

      s6num: 'Seção 6', s6title: 'Torneios e Prêmios',
      s6body: '<p><strong>Funcionamento dos torneios</strong></p><ul><li>Cada torneio tem tema, prazo de inscrição e critérios próprios, exibidos dentro do App;</li><li>A pontuação final (<strong>finalScore</strong>) é atribuída automaticamente por inteligência artificial com base em critérios técnicos: melodia, ritmo, afinação e clareza;</li><li>Apenas envios oficiais são considerados para o ranking final — gravações em modo treino não contam;</li><li>Em caso de empate de pontuação, vence o participante que enviou sua gravação mais cedo (critério de desempate: data e hora de envio).</li></ul><p><strong>Premiação — 1º, 2º e 3º lugares</strong></p><ul><li>Os valores dos prêmios para cada colocação são exibidos na página do torneio dentro do App antes da inscrição;</li><li>Ao final do torneio, os três primeiros colocados são notificados pelo App e têm <strong>15 dias corridos</strong> a partir do encerramento para reivindicar o prêmio;</li><li>Prêmios não reivindicados dentro desse prazo expiram automaticamente e não poderão ser solicitados posteriormente.</li></ul><p><strong>Pagamento de prêmios</strong></p><p>Ao resgatar um prêmio, o usuário escolhe o método de recebimento:</p><ul><li><strong>PIX (Brasil):</strong> pagamento via CPF do titular como chave PIX. O CPF é informado no momento do resgate e validado pelo sistema. Uma vez cadastrado, só poderá ser alterado via suporte (<a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a>);</li><li><strong>PayPal (internacional):</strong> pagamento enviado para o e-mail PayPal informado pelo usuário no momento do resgate.</li></ul><p>O pagamento é realizado pela equipe Assobiacão em até <strong>10 dias úteis</strong> após a aprovação do saque. Decisões da IA sobre pontuação são finais, salvo comprovado erro técnico. Reclamações devem ser enviadas para <strong>contato@assobiacao.app</strong> em até 48 horas após a divulgação dos resultados. O Assobiacão pode cancelar ou adiar torneios por questões técnicas ou operacionais, notificando os participantes com antecedência. Em caso de cancelamento, qualquer prêmio já aprovado será pago normalmente.</p>',

      s7num: 'Seção 7', s7title: 'Privacidade e LGPD',
      s7body: '<p>O Assobiacão respeita sua privacidade e está em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD). Seus dados pessoais são coletados e tratados para:</p><ul><li>Criar e gerenciar sua conta;</li><li>Processar sua participação em torneios;</li><li>Efetuar o pagamento de prêmios — coletamos o <strong>CPF</strong> (para pagamentos via PIX no Brasil) ou o <strong>e-mail PayPal</strong> (para pagamentos internacionais) somente no momento do resgate do prêmio, nunca durante o cadastro;</li><li>Melhorar o funcionamento do App e da IA de pontuação;</li><li>Enviar comunicações sobre torneios e funcionalidades (com possibilidade de cancelamento a qualquer momento).</li></ul><p>Você pode exercer seus direitos como titular de dados (acesso, correção, exclusão, portabilidade) entrando em contato pelo e-mail <strong>contato@assobiacao.app</strong>. Não compartilhamos seus dados pessoais com terceiros para fins comerciais sem seu consentimento.</p>',

      s8num: 'Seção 8', s8title: 'Propriedade Intelectual',
      s8body: '<p>Todo o conteúdo do App — incluindo logotipos, identidade visual, mascote, software, textos e interface — é de propriedade exclusiva do Assobiacão e protegido pelas leis de propriedade intelectual brasileiras.</p><p>É proibida a reprodução, cópia, modificação ou distribuição de qualquer elemento do App sem autorização prévia e por escrito do Assobiacão.</p>',

      s9num: 'Seção 9', s9title: 'Limitação de Responsabilidade',
      s9body: '<p>O Assobiacão não se responsabiliza por:</p><ul><li>Falhas temporárias de conectividade ou interrupções no Serviço;</li><li>Perda de dados causada por falhas de dispositivo ou rede do usuário;</li><li>Conteúdo enviado por outros usuários da plataforma;</li><li>Danos indiretos, incidentais ou consequenciais decorrentes do uso do App.</li></ul><p>O Serviço é fornecido "como está", sem garantias expressas ou implícitas de disponibilidade contínua ou ausência de erros.</p>',

      s10num: 'Seção 10', s10title: 'Modificações dos Termos',
      s10body: '<p>O Assobiacão pode atualizar estes Termos a qualquer momento. Notificaremos os usuários sobre mudanças relevantes por e-mail ou notificação dentro do App com pelo menos 10 dias de antecedência.</p><p>O uso continuado do App após a data de vigência das novas condições implica na aceitação das alterações.</p>',

      s11num: 'Seção 11', s11title: 'Lei Aplicável e Foro',
      s11body: '<p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo — SP para dirimir eventuais controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.</p>',

      contactTitle: 'Dúvidas ou solicitações?',
      contactBody: '<p>Entre em contato com a equipe Assobiacão:<br /><a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a><br /><br />Respondemos em até 2 dias úteis.<br /><br /><strong>Bookfy Tecnologia LTDA</strong><br />CNPJ: 65.129.453/0001-68<br />contato@assobiacao.app</p>',
    },

    /* ── EN ─────────────────────────────────────────────────────────────────── */
    en: {
      pageTitle: 'Terms of Use — Assobiacão',
      label:   'Legal',
      title:   'Terms of Use<br />and Conditions',
      updated: 'Last updated: June 4, 2026',
      intro:   'Welcome to Assobiacão. By using our app, you agree to the terms described below. Please read carefully — they govern your relationship with the app, tournaments and community.',

      s1num: 'Section 1', s1title: 'Acceptance of Terms',
      s1body: '<p>The Assobiacão app is developed and operated by <strong>Bookfy Tecnologia LTDA</strong>, a private company registered under CNPJ No. <strong>65.129.453/0001-68</strong> (hereinafter "Assobiacão" or "Company").</p><p>By downloading, installing or using the Assobiacão app (hereinafter "App" or "Service"), you declare that you have read, understood and agreed to these Terms of Use and our Privacy Policy.</p><p>If you disagree with any part of these terms, do not use the App. Continued use of the Service after changes to the Terms will constitute acceptance of the modifications.</p>',

      s2num: 'Section 2', s2title: 'Service Description',
      s2body: '<p>Assobiacão is a whistling tournament platform that allows users to:</p><ul><li>Record and submit whistling videos to participate in themed tournaments;</li><li>Receive automatic scoring generated by artificial intelligence;</li><li>Compete in rankings with other participants;</li><li>Win cash prizes in prize tournaments;</li><li>Interact with the community through likes.</li></ul><p>Assobiacão reserves the right to modify, suspend or terminate any feature of the Service at any time, with reasonable prior notice when possible.</p>',

      s3num: 'Section 3', s3title: 'Eligibility and Registration',
      s3body: '<p>To use Assobiacão you must:</p><ul><li>Be <strong>at least 16 years old</strong>;</li><li>Provide true and up-to-date registration information;</li><li>Maintain the confidentiality of your access credentials;</li><li>Be responsible for all activities carried out with your account.</li></ul><p>Users between 16 and 17 years old declare they have authorization from parents or legal guardians to use the app and participate in tournaments, including the receipt of prizes. Users under 16 must not use this app.</p><p>Each account is <strong>strictly personal and non-transferable</strong>. Only the account holder may use it. You agree to immediately notify Assobiacão of any unauthorized use of your account at <strong>contato@assobiacao.app</strong>.</p><p>Payment information (CPF for PIX payments or PayPal email for international payments) is collected <strong>only at the time of prize redemption</strong>, not during registration.</p>',

      s4num: 'Section 4', s4title: 'User Content',
      s4body: '<p>Only the account holder may submit recordings. <strong>Publishing content recorded by third parties is prohibited under any circumstances.</strong> By submitting a recording, you declare that you are the sole author of the content presented.</p><p>By submitting whistling recordings or any other content through the App, you:</p><ul><li>Declare that you are the sole owner of the rights to the submitted content;</li><li>Grant Assobiacão a non-exclusive, royalty-free, worldwide and sublicensable license to use, reproduce, distribute and display the content within the platform;</li><li>Guarantee that the content does not violate third-party rights, applicable laws or the App\'s conduct rules.</li></ul><p>Assobiacão may remove any content that violates these Terms without prior notice.</p>',

      s5num: 'Section 5', s5title: 'Code of Conduct',
      s5body: '<p>It is <strong>prohibited</strong> to use Assobiacão to:</p><ul><li>Submit offensive, discriminatory, defamatory content or content that incites violence;</li><li>Publish recordings made by third parties — <strong>under any circumstances</strong>;</li><li>Share access credentials or allow another person to use your account;</li><li>Commit fraud or manipulation of tournament results;</li><li>Create multiple accounts to gain unfair advantages;</li><li>Use bots, scripts or any automated means to interact with the App;</li><li>Harass, intimidate or threaten other users.</li></ul><p>Failure to comply with these rules may result in suspension or permanent deletion of the account, with no right to refunds or compensation for pending prizes.</p>',

      s6num: 'Section 6', s6title: 'Tournaments and Prizes',
      s6body: '<p><strong>How tournaments work</strong></p><ul><li>Each tournament has its own theme, registration deadline and criteria, displayed within the App;</li><li>The final score (<strong>finalScore</strong>) is automatically assigned by artificial intelligence based on technical criteria: melody, rhythm, pitch and clarity;</li><li>Only official submissions are considered for the final ranking — recordings in training mode do not count;</li><li>In the event of a tie, the participant who submitted their recording earliest wins (tiebreaker: date and time of submission).</li></ul><p><strong>Prizes — 1st, 2nd and 3rd place</strong></p><ul><li>Prize amounts for each placement are displayed on the tournament page within the App before registration;</li><li>At the end of the tournament, the top three finishers are notified by the App and have <strong>15 calendar days</strong> from the closing to claim the prize;</li><li>Unclaimed prizes within that period expire automatically and cannot be requested later.</li></ul><p><strong>Prize payment</strong></p><p>When claiming a prize, the user selects their preferred payment method:</p><ul><li><strong>PIX (Brazil):</strong> payment sent to the account holder\'s CPF as the PIX key. The CPF is provided at the time of redemption and validated by the system. Once registered, it can only be changed via support (<a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a>);</li><li><strong>PayPal (international):</strong> payment sent to the PayPal email provided by the user at redemption time.</li></ul><p>Payment is made by the Assobiacão team within <strong>10 business days</strong> after the withdrawal is approved. AI decisions on scoring are final, except in the case of proven technical error. Complaints must be sent to <strong>contato@assobiacao.app</strong> within 48 hours of results being published. Assobiacão may cancel or postpone tournaments for technical or operational reasons, notifying participants in advance. In the event of cancellation, any prizes already approved will be paid normally.</p>',

      s7num: 'Section 7', s7title: 'Privacy',
      s7body: '<p>Assobiacão respects your privacy and complies with the Brazilian General Data Protection Law (Lei nº 13.709/2018 — LGPD). Your personal data is collected and processed to:</p><ul><li>Create and manage your account;</li><li>Process your tournament participation;</li><li>Make prize payments — we collect the user\'s <strong>CPF</strong> (for PIX payments in Brazil) or <strong>PayPal email</strong> (for international payments) only at the time of prize redemption, never during registration;</li><li>Improve the App and AI scoring;</li><li>Send communications about tournaments and features (with the option to unsubscribe at any time).</li></ul><p>You can exercise your rights as a data subject (access, correction, deletion, portability) by contacting us at <strong>contato@assobiacao.app</strong>. We do not share your personal data with third parties for commercial purposes without your consent.</p>',

      s8num: 'Section 8', s8title: 'Intellectual Property',
      s8body: '<p>All App content — including logos, visual identity, mascot, software, texts and interface — is the exclusive property of Assobiacão and protected by Brazilian intellectual property laws.</p><p>Reproduction, copying, modification or distribution of any App element without prior written authorization from Assobiacão is prohibited.</p>',

      s9num: 'Section 9', s9title: 'Limitation of Liability',
      s9body: '<p>Assobiacão is not responsible for:</p><ul><li>Temporary connectivity failures or Service interruptions;</li><li>Data loss caused by user device or network failures;</li><li>Content submitted by other platform users;</li><li>Indirect, incidental or consequential damages resulting from use of the App.</li></ul><p>The Service is provided "as is", without express or implied guarantees of continuous availability or freedom from errors.</p>',

      s10num: 'Section 10', s10title: 'Modifications to Terms',
      s10body: '<p>Assobiacão may update these Terms at any time. We will notify users of relevant changes by email or in-app notification with at least 10 days\' notice.</p><p>Continued use of the App after the new conditions\' effective date implies acceptance of the changes.</p>',

      s11num: 'Section 11', s11title: 'Applicable Law and Venue',
      s11body: '<p>These Terms are governed by the laws of the Federative Republic of Brazil. The courts of the District of São Paulo — SP are elected to resolve any disputes, with waiver of any other jurisdiction, however privileged.</p>',

      contactTitle: 'Questions or requests?',
      contactBody: '<p>Contact the Assobiacão team:<br /><a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a><br /><br />We respond within 2 business days.<br /><br /><strong>Bookfy Tecnologia LTDA</strong><br />CNPJ: 65.129.453/0001-68<br />contato@assobiacao.app</p>',
    },

    /* ── ES ─────────────────────────────────────────────────────────────────── */
    es: {
      pageTitle: 'Términos de Uso — Assobiacão',
      label:   'Legal',
      title:   'Términos de Uso<br />y Condiciones',
      updated: 'Última actualización: 4 de junio de 2026',
      intro:   'Bienvenido a Assobiacão. Al usar nuestra aplicación, aceptas los términos que se describen a continuación. Léelos con atención — rigen tu relación con la app, los torneos y la comunidad.',

      s1num: 'Sección 1', s1title: 'Aceptación de los Términos',
      s1body: '<p>La aplicación Assobiacão es desarrollada y operada por <strong>Bookfy Tecnologia LTDA</strong>, persona jurídica de derecho privado inscrita en el CNPJ bajo el nº <strong>65.129.453/0001-68</strong> (en adelante "Assobiacão" o "Empresa").</p><p>Al descargar, instalar o utilizar la aplicación Assobiacão (en adelante "App" o "Servicio"), declaras haber leído, comprendido y aceptado estos Términos de Uso y nuestra Política de Privacidad.</p><p>Si no estás de acuerdo con alguna parte de estos términos, no utilices la App. El uso continuado del Servicio tras modificaciones en los Términos constituirá aceptación de los cambios.</p>',

      s2num: 'Sección 2', s2title: 'Descripción del Servicio',
      s2body: '<p>Assobiacão es una plataforma de torneos de silbido que permite a los usuarios:</p><ul><li>Grabar y enviar videos de silbido para participar en torneos temáticos;</li><li>Recibir puntuación automática generada por inteligencia artificial;</li><li>Competir en rankings con otros participantes;</li><li>Ganar premios en efectivo en torneos premiados;</li><li>Interactuar con la comunidad mediante «me gusta».</li></ul><p>Assobiacão se reserva el derecho de modificar, suspender o cancelar cualquier funcionalidad del Servicio en cualquier momento, con aviso previo razonable cuando sea posible.</p>',

      s3num: 'Sección 3', s3title: 'Elegibilidad y Registro',
      s3body: '<p>Para usar Assobiacão debes:</p><ul><li>Tener <strong>al menos 16 años de edad</strong>;</li><li>Proporcionar información de registro verdadera y actualizada;</li><li>Mantener la confidencialidad de tus credenciales de acceso;</li><li>Ser responsable de todas las actividades realizadas con tu cuenta.</li></ul><p>Los usuarios de 16 a 17 años declaran tener autorización de padres o tutores legales para usar la app y participar en torneos, incluido el cobro de premios. Los menores de 16 años no deben utilizar esta aplicación.</p><p>Cada cuenta es <strong>estrictamente personal e intransferible</strong>. Solo el titular de la cuenta puede usarla. Aceptas notificar inmediatamente a Assobiacão sobre cualquier uso no autorizado de tu cuenta en <strong>contato@assobiacao.app</strong>.</p><p>Los datos de pago (CPF para pagos vía PIX o correo PayPal para pagos internacionales) se recopilan <strong>únicamente en el momento de reclamar el premio</strong>, nunca durante el registro.</p>',

      s4num: 'Sección 4', s4title: 'Contenido del Usuario',
      s4body: '<p>Solo el titular de la cuenta puede enviar grabaciones. <strong>Está prohibido publicar contenido grabado por terceros bajo ninguna circunstancia.</strong> Al enviar una grabación, declaras ser el único autor del contenido presentado.</p><p>Al enviar grabaciones de silbido u otro contenido a través de la App, tú:</p><ul><li>Declaras ser el único titular de los derechos sobre el contenido enviado;</li><li>Concedes a Assobiacão una licencia no exclusiva, gratuita, mundial y sublicenciable para usar, reproducir, distribuir y mostrar el contenido dentro de la plataforma;</li><li>Garantizas que el contenido no viola derechos de terceros, leyes vigentes ni las normas de conducta de la App.</li></ul><p>Assobiacão puede eliminar cualquier contenido que infrinja estos Términos sin previo aviso.</p>',

      s5num: 'Sección 5', s5title: 'Normas de Conducta',
      s5body: '<p>Está <strong>prohibido</strong> usar Assobiacão para:</p><ul><li>Enviar contenido ofensivo, discriminatorio, difamatorio o que incite a la violencia;</li><li>Publicar grabaciones hechas por terceros — <strong>bajo ninguna circunstancia</strong>;</li><li>Compartir credenciales de acceso o permitir que otra persona use tu cuenta;</li><li>Cometer fraudes o manipulación de resultados en torneos;</li><li>Crear múltiples cuentas para obtener ventajas indebidas;</li><li>Usar bots, scripts o cualquier medio automatizado para interactuar con la App;</li><li>Acosar, intimidar o amenazar a otros usuarios.</li></ul><p>El incumplimiento de estas normas puede resultar en la suspensión o eliminación permanente de la cuenta, sin derecho a reembolso ni compensación por premios pendientes.</p>',

      s6num: 'Sección 6', s6title: 'Torneos y Premios',
      s6body: '<p><strong>Funcionamiento de los torneos</strong></p><ul><li>Cada torneo tiene tema, plazo de inscripción y criterios propios, mostrados dentro de la App;</li><li>La puntuación final (<strong>finalScore</strong>) es asignada automáticamente por inteligencia artificial según criterios técnicos: melodía, ritmo, afinación y claridad;</li><li>Solo los envíos oficiales se consideran para el ranking final — las grabaciones en modo entrenamiento no cuentan;</li><li>En caso de empate, gana el participante que envió su grabación antes (criterio de desempate: fecha y hora de envío).</li></ul><p><strong>Premios — 1.°, 2.° y 3.° lugar</strong></p><ul><li>Los valores de los premios para cada clasificación se muestran en la página del torneo dentro de la App antes de la inscripción;</li><li>Al final del torneo, los tres primeros clasificados son notificados por la App y tienen <strong>15 días naturales</strong> a partir del cierre para reclamar el premio;</li><li>Los premios no reclamados en ese plazo expiran automáticamente y no podrán solicitarse con posterioridad.</li></ul><p><strong>Pago de premios</strong></p><p>Al reclamar un premio, el usuario elige su método de cobro:</p><ul><li><strong>PIX (Brasil):</strong> pago enviado al CPF del titular como clave PIX. El CPF se informa en el momento del rescate y es validado por el sistema. Una vez registrado, solo puede modificarse vía soporte (<a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a>);</li><li><strong>PayPal (internacional):</strong> pago enviado al correo PayPal informado por el usuario en el momento del rescate.</li></ul><p>El pago es realizado por el equipo Assobiacão en hasta <strong>10 días hábiles</strong> tras la aprobación del retiro. Las decisiones de la IA sobre la puntuación son definitivas, salvo error técnico comprobado. Las reclamaciones deben enviarse a <strong>contato@assobiacao.app</strong> en un plazo de 48 horas tras la publicación de los resultados. Assobiacão puede cancelar o aplazar torneos por razones técnicas u operativas, notificando a los participantes con antelación. En caso de cancelación, los premios ya aprobados se pagarán normalmente.</p>',

      s7num: 'Sección 7', s7title: 'Privacidad',
      s7body: '<p>Assobiacão respeta tu privacidad y cumple con la Ley General de Protección de Datos de Brasil (Lei nº 13.709/2018 — LGPD). Tus datos personales son recopilados y tratados para:</p><ul><li>Crear y gestionar tu cuenta;</li><li>Procesar tu participación en torneos;</li><li>Realizar el pago de premios — recopilamos el <strong>CPF</strong> (para pagos vía PIX en Brasil) o el <strong>correo PayPal</strong> (para pagos internacionales) únicamente en el momento del rescate del premio, nunca durante el registro;</li><li>Mejorar el funcionamiento de la App y de la IA de puntuación;</li><li>Enviar comunicaciones sobre torneos y funcionalidades (con posibilidad de cancelación en cualquier momento).</li></ul><p>Puedes ejercer tus derechos como titular de datos (acceso, corrección, eliminación, portabilidad) contactando a <strong>contato@assobiacao.app</strong>. No compartimos tus datos personales con terceros con fines comerciales sin tu consentimiento.</p>',

      s8num: 'Sección 8', s8title: 'Propiedad Intelectual',
      s8body: '<p>Todo el contenido de la App — incluyendo logotipos, identidad visual, mascota, software, textos e interfaz — es propiedad exclusiva de Assobiacão y está protegido por las leyes brasileñas de propiedad intelectual.</p><p>Queda prohibida la reproducción, copia, modificación o distribución de cualquier elemento de la App sin autorización previa y por escrito de Assobiacão.</p>',

      s9num: 'Sección 9', s9title: 'Limitación de Responsabilidad',
      s9body: '<p>Assobiacão no se responsabiliza por:</p><ul><li>Fallos temporales de conectividad o interrupciones del Servicio;</li><li>Pérdida de datos causada por fallos del dispositivo o la red del usuario;</li><li>Contenido enviado por otros usuarios de la plataforma;</li><li>Daños indirectos, incidentales o consecuentes derivados del uso de la App.</li></ul><p>El Servicio se proporciona «tal cual», sin garantías expresas o implícitas de disponibilidad continua ni de ausencia de errores.</p>',

      s10num: 'Sección 10', s10title: 'Modificaciones de los Términos',
      s10body: '<p>Assobiacão puede actualizar estos Términos en cualquier momento. Notificaremos a los usuarios sobre cambios relevantes por correo electrónico o notificación dentro de la App con al menos 10 días de antelación.</p><p>El uso continuado de la App tras la fecha de vigencia de las nuevas condiciones implica la aceptación de los cambios.</p>',

      s11num: 'Sección 11', s11title: 'Ley Aplicable y Jurisdicción',
      s11body: '<p>Estos Términos se rigen por las leyes de la República Federativa del Brasil. Se elige el fuero de la Ciudad de São Paulo — SP para resolver cualquier controversia, con renuncia a cualquier otro, por más privilegiado que sea.</p>',

      contactTitle: '¿Dudas o solicitudes?',
      contactBody: '<p>Contacta al equipo Assobiacão:<br /><a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a><br /><br />Respondemos en un plazo de 2 días hábiles.<br /><br /><strong>Bookfy Tecnologia LTDA</strong><br />CNPJ: 65.129.453/0001-68<br />contato@assobiacao.app</p>',
    },

    /* ── FR ─────────────────────────────────────────────────────────────────── */
    fr: {
      pageTitle: 'Conditions d\'utilisation — Assobiacão',
      label:   'Mentions légales',
      title:   'Conditions d\'utilisation<br />et de service',
      updated: 'Dernière mise à jour : 4 juin 2026',
      intro:   'Bienvenue sur Assobiacão. En utilisant notre application, vous acceptez les conditions décrites ci-dessous. Lisez-les attentivement — elles régissent votre relation avec l\'app, les tournois et la communauté.',

      s1num: 'Article 1', s1title: 'Acceptation des Conditions',
      s1body: '<p>L\'application Assobiacão est développée et exploitée par <strong>Bookfy Tecnologia LTDA</strong>, personne morale de droit privé immatriculée sous le CNPJ nº <strong>65.129.453/0001-68</strong> (ci-après « Assobiacão » ou « Société »).</p><p>En téléchargeant, installant ou utilisant l\'application Assobiacão (ci-après « App » ou « Service »), vous déclarez avoir lu, compris et accepté les présentes Conditions d\'utilisation ainsi que notre Politique de confidentialité.</p><p>Si vous n\'acceptez pas une partie quelconque de ces conditions, n\'utilisez pas l\'App. L\'utilisation continue du Service après des modifications des Conditions constituera une acceptation des changements.</p>',

      s2num: 'Article 2', s2title: 'Description du Service',
      s2body: '<p>Assobiacão est une plateforme de tournois de sifflement qui permet aux utilisateurs de :</p><ul><li>Enregistrer et soumettre des vidéos de sifflement pour participer à des tournois thématiques ;</li><li>Recevoir une notation automatique générée par intelligence artificielle ;</li><li>Concourir dans des classements avec d\'autres participants ;</li><li>Remporter des prix en argent lors de tournois dotés ;</li><li>Interagir avec la communauté via des « j\'aime ».</li></ul><p>Assobiacão se réserve le droit de modifier, suspendre ou mettre fin à toute fonctionnalité du Service à tout moment, avec un préavis raisonnable si possible.</p>',

      s3num: 'Article 3', s3title: 'Éligibilité et Inscription',
      s3body: '<p>Pour utiliser Assobiacão, vous devez :</p><ul><li>Avoir <strong>au moins 16 ans</strong> ;</li><li>Fournir des informations d\'inscription véridiques et à jour ;</li><li>Préserver la confidentialité de vos identifiants d\'accès ;</li><li>Être responsable de toutes les activités effectuées avec votre compte.</li></ul><p>Les utilisateurs âgés de 16 à 17 ans déclarent avoir l\'autorisation d\'un parent ou d\'un tuteur légal pour utiliser l\'app et participer aux tournois, y compris pour encaisser des prix. Les moins de 16 ans ne doivent pas utiliser cette application.</p><p>Chaque compte est <strong>strictement personnel et non cessible</strong>. Seul le titulaire du compte peut l\'utiliser. Vous acceptez de notifier immédiatement Assobiacão de toute utilisation non autorisée de votre compte à <strong>contato@assobiacao.app</strong>.</p><p>Les données de paiement (CPF pour les paiements PIX ou e-mail PayPal pour les paiements internationaux) sont collectées <strong>uniquement au moment du rachat du prix</strong>, jamais lors de l\'inscription.</p>',

      s4num: 'Article 4', s4title: 'Contenu Utilisateur',
      s4body: '<p>Seul le titulaire du compte peut soumettre des enregistrements. <strong>La publication de contenu enregistré par des tiers est interdite en toutes circonstances.</strong> En soumettant un enregistrement, vous déclarez être le seul auteur du contenu présenté.</p><p>En soumettant des enregistrements de sifflement ou tout autre contenu via l\'App, vous :</p><ul><li>Déclarez être l\'unique titulaire des droits sur le contenu soumis ;</li><li>Accordez à Assobiacão une licence non exclusive, gratuite, mondiale et sous-licenciable pour utiliser, reproduire, distribuer et afficher le contenu au sein de la plateforme ;</li><li>Garantissez que le contenu ne viole pas les droits de tiers, les lois en vigueur ou les règles de conduite de l\'App.</li></ul><p>Assobiacão peut supprimer tout contenu violant ces Conditions sans préavis.</p>',

      s5num: 'Article 5', s5title: 'Règles de Conduite',
      s5body: '<p>Il est <strong>interdit</strong> d\'utiliser Assobiacão pour :</p><ul><li>Soumettre du contenu offensant, discriminatoire, diffamatoire ou incitant à la violence ;</li><li>Publier des enregistrements réalisés par des tiers — <strong>en aucune circonstance</strong> ;</li><li>Partager des identifiants d\'accès ou permettre à une autre personne d\'utiliser votre compte ;</li><li>Commettre des fraudes ou manipuler les résultats des tournois ;</li><li>Créer plusieurs comptes pour obtenir des avantages injustifiés ;</li><li>Utiliser des bots, des scripts ou tout moyen automatisé pour interagir avec l\'App ;</li><li>Harceler, intimider ou menacer d\'autres utilisateurs.</li></ul><p>Le non-respect de ces règles peut entraîner la suspension ou la suppression définitive du compte, sans droit à un remboursement ni à une compensation pour les prix en attente.</p>',

      s6num: 'Article 6', s6title: 'Tournois et Prix',
      s6body: '<p><strong>Fonctionnement des tournois</strong></p><ul><li>Chaque tournoi a son propre thème, sa date limite d\'inscription et ses critères, affichés dans l\'App ;</li><li>Le score final (<strong>finalScore</strong>) est attribué automatiquement par intelligence artificielle selon des critères techniques : mélodie, rythme, justesse et clarté ;</li><li>Seules les soumissions officielles sont prises en compte pour le classement final — les enregistrements en mode entraînement ne comptent pas ;</li><li>En cas d\'égalité, le participant ayant soumis son enregistrement le plus tôt remporte le départage (critère : date et heure de soumission).</li></ul><p><strong>Prix — 1er, 2e et 3e place</strong></p><ul><li>Les montants des prix pour chaque classement sont affichés sur la page du tournoi dans l\'App avant l\'inscription ;</li><li>À la fin du tournoi, les trois premiers sont notifiés par l\'App et disposent de <strong>15 jours calendaires</strong> à compter de la clôture pour réclamer leur prix ;</li><li>Les prix non réclamés dans ce délai expirent automatiquement et ne pourront pas être demandés ultérieurement.</li></ul><p><strong>Versement des prix</strong></p><p>Lors du rachat d\'un prix, l\'utilisateur choisit son mode de paiement :</p><ul><li><strong>PIX (Brésil) :</strong> paiement envoyé au CPF du titulaire comme clé PIX. Le CPF est fourni au moment du rachat et validé par le système. Une fois enregistré, il ne peut être modifié que via le support (<a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a>) ;</li><li><strong>PayPal (international) :</strong> paiement envoyé à l\'adresse e-mail PayPal fournie par l\'utilisateur au moment du rachat.</li></ul><p>Le paiement est effectué par l\'équipe Assobiacão dans un délai de <strong>10 jours ouvrables</strong> après l\'approbation du retrait. Les décisions de l\'IA sur la notation sont définitives, sauf erreur technique avérée. Les réclamations doivent être envoyées à <strong>contato@assobiacao.app</strong> dans les 48 heures suivant la publication des résultats. Assobiacão peut annuler ou reporter des tournois pour des raisons techniques ou opérationnelles, en notifiant les participants à l\'avance. En cas d\'annulation, tout prix déjà approuvé sera versé normalement.</p>',

      s7num: 'Article 7', s7title: 'Confidentialité',
      s7body: '<p>Assobiacão respecte votre vie privée et se conforme à la loi brésilienne sur la protection des données personnelles (Lei nº 13.709/2018 — LGPD). Vos données personnelles sont collectées et traitées pour :</p><ul><li>Créer et gérer votre compte ;</li><li>Traiter votre participation aux tournois ;</li><li>Effectuer le versement des prix — nous collectons le <strong>CPF</strong> (pour les paiements PIX au Brésil) ou l\'<strong>adresse e-mail PayPal</strong> (pour les paiements internationaux) uniquement au moment du rachat du prix, jamais lors de l\'inscription ;</li><li>Améliorer l\'App et l\'IA de notation ;</li><li>Envoyer des communications sur les tournois et les fonctionnalités (avec possibilité de désinscription à tout moment).</li></ul><p>Vous pouvez exercer vos droits en tant que personne concernée (accès, rectification, suppression, portabilité) en nous contactant à <strong>contato@assobiacao.app</strong>. Nous ne partageons pas vos données personnelles avec des tiers à des fins commerciales sans votre consentement.</p>',

      s8num: 'Article 8', s8title: 'Propriété Intellectuelle',
      s8body: '<p>Tout le contenu de l\'App — incluant les logos, l\'identité visuelle, la mascotte, le logiciel, les textes et l\'interface — est la propriété exclusive d\'Assobiacão et protégé par les lois brésiliennes sur la propriété intellectuelle.</p><p>La reproduction, copie, modification ou distribution de tout élément de l\'App sans autorisation préalable et écrite d\'Assobiacão est interdite.</p>',

      s9num: 'Article 9', s9title: 'Limitation de Responsabilité',
      s9body: '<p>Assobiacão n\'est pas responsable :</p><ul><li>Des pannes temporaires de connectivité ou des interruptions du Service ;</li><li>De la perte de données causée par des pannes d\'appareil ou de réseau de l\'utilisateur ;</li><li>Du contenu soumis par d\'autres utilisateurs de la plateforme ;</li><li>Des dommages indirects, accessoires ou consécutifs résultant de l\'utilisation de l\'App.</li></ul><p>Le Service est fourni « tel quel », sans garanties expresses ou implicites de disponibilité continue ni d\'absence d\'erreurs.</p>',

      s10num: 'Article 10', s10title: 'Modifications des Conditions',
      s10body: '<p>Assobiacão peut mettre à jour les présentes Conditions à tout moment. Nous informerons les utilisateurs des modifications importantes par e-mail ou notification dans l\'App avec un préavis d\'au moins 10 jours.</p><p>L\'utilisation continue de l\'App après la date d\'entrée en vigueur des nouvelles conditions implique l\'acceptation des modifications.</p>',

      s11num: 'Article 11', s11title: 'Loi Applicable et Juridiction',
      s11body: '<p>Les présentes Conditions sont régies par les lois de la République fédérative du Brésil. Le tribunal de la ville de São Paulo — SP est élu pour résoudre tout litige, avec renonciation à tout autre, aussi privilégié soit-il.</p>',

      contactTitle: 'Questions ou demandes ?',
      contactBody: '<p>Contactez l\'équipe Assobiacão :<br /><a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a><br /><br />Nous répondons dans un délai de 2 jours ouvrables.<br /><br /><strong>Bookfy Tecnologia LTDA</strong><br />CNPJ : 65.129.453/0001-68<br />contato@assobiacao.app</p>',
    },
  };

  // ── Apply ────────────────────────────────────────────────────────────────────

  function applyTerms(lang) {
    var t = TT[lang] || TT['pt-BR'];

    // data-terms → textContent
    document.querySelectorAll('[data-terms]').forEach(function (el) {
      var key = el.getAttribute('data-terms');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // data-terms-html → innerHTML
    document.querySelectorAll('[data-terms-html]').forEach(function (el) {
      var key = el.getAttribute('data-terms-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Page <title>
    if (t.pageTitle) document.title = t.pageTitle;
  }

  // ── Init ────────────────────────────────────────────────────────────────────

  function init() {
    // i18n.js salva o idioma no localStorage antes de nós rodarmos —
    // lemos diretamente, sem depender de eventos ou timing.
    var lang = localStorage.getItem(STORAGE_KEY) || detectLang();
    applyTerms(lang);

    // Reage a mudanças manuais via seletor de idioma
    window.addEventListener('assobiacao-lang', function (e) {
      applyTerms(e.detail && e.detail.lang ? e.detail.lang : 'pt-BR');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
