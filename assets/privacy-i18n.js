/**
 * Assobiacão Web — Privacy Policy i18n
 * Aplica traduções PT-BR / EN / ES / FR na página de Política de Privacidade.
 * Reage ao evento customizado 'assobiacao-lang' disparado por i18n.js quando
 * o usuário troca de idioma via seletor do nav.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'assobiacao_lang';

  // ── Traduções ────────────────────────────────────────────────────────────────

  var TP = {

    /* ── PT-BR ─────────────────────────────────────────────────────────────── */
    'pt-BR': {
      pageTitle: 'Política de Privacidade — Assobiacão',
      label:   'Legal',
      title:   'Política de<br />Privacidade',
      updated: 'Última atualização: 30 de maio de 2025',
      intro:   'O Assobiacão respeita a sua privacidade e está comprometido com a proteção dos seus dados pessoais. Esta Política descreve quais dados coletamos, como os utilizamos e os seus direitos como titular, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e demais regulamentações aplicáveis.',

      s1num: 'Seção 1', s1title: 'Controlador dos Dados',
      s1body: '<p>O controlador dos seus dados pessoais é a <strong>Bookfy Tecnologia LTDA</strong>, pessoa jurídica de direito privado inscrita no CNPJ sob o nº <strong>65.129.453/0001-68</strong>, responsável pelo aplicativo Assobiacão.</p><p>Contato do encarregado de proteção de dados (DPO): <a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a></p>',

      s2num: 'Seção 2', s2title: 'Dados Que Coletamos',
      s2body: '<p>Coletamos os seguintes dados pessoais:</p><ul><li><strong>Dados de cadastro:</strong> nome, endereço de e-mail e foto de perfil fornecidos ao criar sua conta;</li><li><strong>CPF:</strong> coletado voluntariamente pelo usuário para fins de pagamento de prêmios via PIX;</li><li><strong>Conteúdo gerado pelo usuário:</strong> vídeos de assobio gravados e enviados pelo aplicativo para participação em torneios;</li><li><strong>Dados de uso:</strong> pontuações obtidas, torneios participados, nível e XP acumulado, sequência de envios (streak) e total de vídeos enviados;</li><li><strong>Dados do dispositivo:</strong> identificador de dispositivo e sistema operacional, coletados automaticamente para garantir o funcionamento do app;</li><li><strong>Dados de análise anônima:</strong> eventos de uso agregados para melhoria do produto (sem identificação pessoal).</li></ul>',

      s3num: 'Seção 3', s3title: 'Finalidade do Tratamento',
      s3body: '<p>Seus dados são utilizados exclusivamente para:</p><ul><li>Criar e gerenciar sua conta no aplicativo;</li><li>Processar sua participação em torneios e calcular pontuações via inteligência artificial;</li><li>Efetuar o pagamento de prêmios em dinheiro via PIX, utilizando o CPF cadastrado como chave de verificação;</li><li>Enviar notificações sobre torneios ativos, resultados e prêmios a receber (pode ser desativado nas configurações do dispositivo);</li><li>Melhorar continuamente o algoritmo de pontuação e a experiência do usuário;</li><li>Cumprir obrigações legais e regulatórias.</li></ul><p><strong>Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros para fins de marketing.</strong></p>',

      s4num: 'Seção 4', s4title: 'Base Legal para o Tratamento',
      s4body: '<ul><li><strong>Execução de contrato</strong> — para operar sua conta, processar torneios e realizar pagamentos (art. 7º, V da LGPD);</li><li><strong>Legítimo interesse</strong> — para análise de uso e melhoria do produto (art. 7º, IX da LGPD);</li><li><strong>Consentimento</strong> — para envio de comunicações de marketing, quando aplicável (art. 7º, I da LGPD);</li><li><strong>Cumprimento de obrigação legal</strong> — para atender exigências fiscais e regulatórias relacionadas ao pagamento de prêmios (art. 7º, II da LGPD).</li></ul>',

      s5num: 'Seção 5', s5title: 'Compartilhamento de Dados',
      s5body: '<p>Seus dados podem ser compartilhados apenas nas seguintes situações:</p><ul><li><strong>Provedores de infraestrutura:</strong> utilizamos o Firebase (Google LLC) para autenticação, armazenamento de dados e hospedagem de vídeos. Os dados são processados nos servidores do Google em conformidade com suas políticas de privacidade;</li><li><strong>Gestão de assinaturas:</strong> utilizamos o RevenueCat Inc. para processar compras dentro do aplicativo. O RevenueCat recebe identificadores de transação e dados de assinatura, mas não seus dados pessoais completos;</li><li><strong>Exigência legal:</strong> podemos divulgar dados quando exigido por lei, ordem judicial ou autoridade governamental competente.</li></ul><p>Nenhum dado pessoal é transferido para países sem nível adequado de proteção sem as salvaguardas previstas na LGPD.</p>',

      s6num: 'Seção 6', s6title: 'Retenção dos Dados',
      s6body: '<ul><li><strong>Conta ativa:</strong> mantemos seus dados enquanto sua conta estiver ativa;</li><li><strong>Vídeos de torneios:</strong> os vídeos enviados podem ser mantidos por até 2 anos para fins de auditoria dos resultados;</li><li><strong>CPF:</strong> mantido enquanto a conta estiver ativa ou pelo prazo necessário para cumprimento de obrigações legais relacionadas ao pagamento de prêmios;</li><li><strong>Exclusão de conta:</strong> mediante solicitação, seus dados pessoais serão excluídos em até 30 dias, exceto os dados que devemos manter por obrigação legal.</li></ul>',

      s7num: 'Seção 7', s7title: 'Seus Direitos (LGPD)',
      s7body: '<p>Como titular dos dados, você tem direito a:</p><ul><li><strong>Acesso:</strong> saber quais dados pessoais mantemos sobre você;</li><li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados;</li><li><strong>Anonimização ou exclusão:</strong> solicitar a exclusão dos seus dados pessoais, respeitados os prazos legais;</li><li><strong>Portabilidade:</strong> receber seus dados em formato estruturado e legível por máquina;</li><li><strong>Revogação do consentimento:</strong> retirar seu consentimento a qualquer momento para tratamentos baseados nessa base legal;</li><li><strong>Oposição:</strong> opor-se a tratamentos realizados com base no legítimo interesse;</li><li><strong>Informação:</strong> ser informado sobre as entidades com as quais compartilhamos seus dados.</li></ul><p>Para exercer qualquer desses direitos, entre em contato pelo e-mail <a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a>. Respondemos em até 15 dias úteis.</p>',

      s8num: 'Seção 8', s8title: 'Segurança',
      s8body: '<p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda acidental ou destruição, incluindo:</p><ul><li>Comunicação criptografada via HTTPS/TLS em todas as transmissões;</li><li>Autenticação segura gerenciada pelo Firebase Authentication;</li><li>Controle de acesso restrito aos dados por função no banco de dados (Firestore Security Rules);</li><li>Monitoramento de acesso e auditoria de operações críticas.</li></ul><p>Em caso de incidente de segurança que possa afetar seus dados, notificaremos você e a Autoridade Nacional de Proteção de Dados (ANPD) conforme exigido pela LGPD.</p>',

      s9num: 'Seção 9', s9title: 'Cookies e Rastreamento',
      s9body: '<p>O aplicativo móvel <strong>não utiliza cookies</strong>. O site <a href="https://assobiacao.app">assobiacao.app</a> utiliza cookies de análise de desempenho (Microsoft Clarity) para entender como os visitantes interagem com o site. Esses dados são anonimizados e não vinculados à sua conta no aplicativo.</p>',

      s10num: 'Seção 10', s10title: 'Privacidade de Menores',
      s10body: '<p>O Assobiacão é destinado a usuários com <strong>16 anos ou mais</strong>. Não coletamos intencionalmente dados de crianças menores de 16 anos. Se você acredita que uma criança forneceu dados pessoais ao aplicativo, entre em contato conosco para que possamos tomar as medidas cabíveis.</p>',

      s11num: 'Seção 11', s11title: 'Alterações nesta Política',
      s11body: '<p>Podemos atualizar esta Política de Privacidade periodicamente. Quando houver alterações relevantes, notificaremos você por e-mail ou por notificação dentro do aplicativo com pelo menos 10 dias de antecedência.</p><p>A versão mais recente estará sempre disponível em <a href="https://assobiacao.app/privacidade">assobiacao.app/privacidade</a>.</p>',

      contactTitle: 'Dúvidas ou solicitações sobre privacidade?',
      contactBody: '<p>Entre em contato com nosso encarregado de proteção de dados:<br /><a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a><br /><br />Respondemos em até 15 dias úteis.<br /><br /><strong>Bookfy Tecnologia LTDA</strong><br />CNPJ: 65.129.453/0001-68<br />contato@assobiacao.app</p>',
    },

    /* ── EN ─────────────────────────────────────────────────────────────────── */
    en: {
      pageTitle: 'Privacy Policy — Assobiacão',
      label:   'Legal',
      title:   'Privacy<br />Policy',
      updated: 'Last updated: May 30, 2025',
      intro:   'Assobiacão respects your privacy and is committed to protecting your personal data. This Policy describes what data we collect, how we use it and your rights as a data subject, in compliance with the Brazilian General Data Protection Law (LGPD — Law No. 13,709/2018) and other applicable regulations.',

      s1num: 'Section 1', s1title: 'Data Controller',
      s1body: '<p>The controller of your personal data is <strong>Bookfy Tecnologia LTDA</strong>, a private company registered under CNPJ No. <strong>65.129.453/0001-68</strong>, responsible for the Assobiacão app.</p><p>Data Protection Officer (DPO) contact: <a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a></p>',

      s2num: 'Section 2', s2title: 'Data We Collect',
      s2body: '<p>We collect the following personal data:</p><ul><li><strong>Registration data:</strong> name, email address and profile picture provided when creating your account;</li><li><strong>CPF (Brazilian tax ID):</strong> voluntarily provided by the user for prize payments via PIX;</li><li><strong>User-generated content:</strong> whistling videos recorded and submitted through the app for tournament participation;</li><li><strong>Usage data:</strong> scores achieved, tournaments entered, level and XP accumulated, submission streak and total videos submitted;</li><li><strong>Device data:</strong> device identifier and operating system, automatically collected to ensure the app functions correctly;</li><li><strong>Anonymous analytics:</strong> aggregated usage events for product improvement (no personal identification).</li></ul>',

      s3num: 'Section 3', s3title: 'Purpose of Processing',
      s3body: '<p>Your data is used exclusively for:</p><ul><li>Creating and managing your account in the app;</li><li>Processing your tournament participation and calculating scores via artificial intelligence;</li><li>Making cash prize payments via PIX, using the registered CPF as the verification key;</li><li>Sending notifications about active tournaments, results and prizes to be claimed (can be disabled in device settings);</li><li>Continuously improving the scoring algorithm and user experience;</li><li>Complying with legal and regulatory obligations.</li></ul><p><strong>We do not sell, rent or trade your personal data with third parties for marketing purposes.</strong></p>',

      s4num: 'Section 4', s4title: 'Legal Basis for Processing',
      s4body: '<ul><li><strong>Contract performance</strong> — to operate your account, process tournaments and make payments (LGPD art. 7, V);</li><li><strong>Legitimate interest</strong> — for usage analysis and product improvement (LGPD art. 7, IX);</li><li><strong>Consent</strong> — for sending marketing communications, where applicable (LGPD art. 7, I);</li><li><strong>Legal obligation</strong> — to comply with tax and regulatory requirements related to prize payments (LGPD art. 7, II).</li></ul>',

      s5num: 'Section 5', s5title: 'Data Sharing',
      s5body: '<p>Your data may only be shared in the following situations:</p><ul><li><strong>Infrastructure providers:</strong> we use Firebase (Google LLC) for authentication, data storage and video hosting. Data is processed on Google\'s servers in accordance with their privacy policies;</li><li><strong>Subscription management:</strong> we use RevenueCat Inc. to process in-app purchases. RevenueCat receives transaction identifiers and subscription data, but not your full personal data;</li><li><strong>Legal requirement:</strong> we may disclose data when required by law, court order or competent government authority.</li></ul><p>No personal data is transferred to countries without an adequate level of protection without the safeguards required by applicable law.</p>',

      s6num: 'Section 6', s6title: 'Data Retention',
      s6body: '<ul><li><strong>Active account:</strong> we retain your data while your account is active;</li><li><strong>Tournament videos:</strong> submitted videos may be retained for up to 2 years for result auditing purposes;</li><li><strong>CPF:</strong> retained while the account is active or for the period required to comply with legal obligations related to prize payments;</li><li><strong>Account deletion:</strong> upon request, your personal data will be deleted within 30 days, except data we must retain due to legal obligations.</li></ul>',

      s7num: 'Section 7', s7title: 'Your Rights',
      s7body: '<p>As a data subject, you have the right to:</p><ul><li><strong>Access:</strong> know what personal data we hold about you;</li><li><strong>Correction:</strong> request correction of incomplete, inaccurate or outdated data;</li><li><strong>Erasure:</strong> request deletion of your personal data, subject to legal retention periods;</li><li><strong>Portability:</strong> receive your data in a structured, machine-readable format;</li><li><strong>Withdrawal of consent:</strong> withdraw your consent at any time for processing based on that legal basis;</li><li><strong>Objection:</strong> object to processing carried out on the basis of legitimate interest;</li><li><strong>Information:</strong> be informed about the entities with whom we share your data.</li></ul><p>To exercise any of these rights, contact us at <a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a>. We respond within 15 business days.</p>',

      s8num: 'Section 8', s8title: 'Security',
      s8body: '<p>We implement appropriate technical and organizational measures to protect your data against unauthorized access, accidental loss or destruction, including:</p><ul><li>Encrypted communication via HTTPS/TLS on all transmissions;</li><li>Secure authentication managed by Firebase Authentication;</li><li>Role-based data access control in the database (Firestore Security Rules);</li><li>Access monitoring and auditing of critical operations.</li></ul><p>In the event of a security incident that may affect your data, we will notify you and the competent data protection authority as required by applicable law.</p>',

      s9num: 'Section 9', s9title: 'Cookies and Tracking',
      s9body: '<p>The mobile app <strong>does not use cookies</strong>. The <a href="https://assobiacao.app">assobiacao.app</a> website uses performance analytics cookies (Microsoft Clarity) to understand how visitors interact with the site. This data is anonymized and not linked to your app account.</p>',

      s10num: 'Section 10', s10title: 'Children\'s Privacy',
      s10body: '<p>Assobiacão is intended for users <strong>16 years of age or older</strong>. We do not intentionally collect data from children under 16. If you believe a child has provided personal data to the app, please contact us so we can take appropriate action.</p>',

      s11num: 'Section 11', s11title: 'Changes to This Policy',
      s11body: '<p>We may update this Privacy Policy periodically. When there are significant changes, we will notify you by email or in-app notification with at least 10 days\' notice.</p><p>The most recent version will always be available at <a href="https://assobiacao.app/privacidade">assobiacao.app/privacidade</a>.</p>',

      contactTitle: 'Privacy questions or requests?',
      contactBody: '<p>Contact our Data Protection Officer:<br /><a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a><br /><br />We respond within 15 business days.<br /><br /><strong>Bookfy Tecnologia LTDA</strong><br />CNPJ: 65.129.453/0001-68<br />contato@assobiacao.app</p>',
    },

    /* ── ES ─────────────────────────────────────────────────────────────────── */
    es: {
      pageTitle: 'Política de Privacidad — Assobiacão',
      label:   'Legal',
      title:   'Política de<br />Privacidad',
      updated: 'Última actualización: 30 de mayo de 2025',
      intro:   'Assobiacão respeta tu privacidad y está comprometido con la protección de tus datos personales. Esta Política describe qué datos recopilamos, cómo los utilizamos y tus derechos como titular, de conformidad con la Ley General de Protección de Datos de Brasil (LGPD — Ley nº 13.709/2018) y demás normativas aplicables.',

      s1num: 'Sección 1', s1title: 'Responsable del Tratamiento',
      s1body: '<p>El responsable del tratamiento de tus datos personales es <strong>Bookfy Tecnologia LTDA</strong>, persona jurídica de derecho privado inscrita en el CNPJ bajo el nº <strong>65.129.453/0001-68</strong>, responsable de la aplicación Assobiacão.</p><p>Contacto del Delegado de Protección de Datos (DPO): <a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a></p>',

      s2num: 'Sección 2', s2title: 'Datos que Recopilamos',
      s2body: '<p>Recopilamos los siguientes datos personales:</p><ul><li><strong>Datos de registro:</strong> nombre, dirección de correo electrónico y foto de perfil proporcionados al crear tu cuenta;</li><li><strong>CPF (número de identificación fiscal brasileño):</strong> proporcionado voluntariamente por el usuario para el pago de premios vía PIX;</li><li><strong>Contenido generado por el usuario:</strong> videos de silbido grabados y enviados a través de la app para participar en torneos;</li><li><strong>Datos de uso:</strong> puntuaciones obtenidas, torneos en los que has participado, nivel y XP acumulado, racha de envíos y total de videos enviados;</li><li><strong>Datos del dispositivo:</strong> identificador del dispositivo y sistema operativo, recopilados automáticamente para garantizar el funcionamiento de la app;</li><li><strong>Analítica anónima:</strong> eventos de uso agregados para la mejora del producto (sin identificación personal).</li></ul>',

      s3num: 'Sección 3', s3title: 'Finalidad del Tratamiento',
      s3body: '<p>Tus datos se utilizan exclusivamente para:</p><ul><li>Crear y gestionar tu cuenta en la aplicación;</li><li>Procesar tu participación en torneos y calcular puntuaciones mediante inteligencia artificial;</li><li>Realizar el pago de premios en efectivo vía PIX, usando el CPF registrado como clave de verificación;</li><li>Enviarte notificaciones sobre torneos activos, resultados y premios pendientes (puedes desactivarlas en la configuración del dispositivo);</li><li>Mejorar continuamente el algoritmo de puntuación y la experiencia del usuario;</li><li>Cumplir con las obligaciones legales y normativas.</li></ul><p><strong>No vendemos, alquilamos ni comercializamos tus datos personales con terceros con fines de marketing.</strong></p>',

      s4num: 'Sección 4', s4title: 'Base Legal del Tratamiento',
      s4body: '<ul><li><strong>Ejecución de contrato</strong> — para operar tu cuenta, procesar torneos y realizar pagos (LGPD art. 7, V);</li><li><strong>Interés legítimo</strong> — para el análisis de uso y la mejora del producto (LGPD art. 7, IX);</li><li><strong>Consentimiento</strong> — para el envío de comunicaciones de marketing, cuando corresponda (LGPD art. 7, I);</li><li><strong>Obligación legal</strong> — para cumplir con los requisitos fiscales y normativos relacionados con el pago de premios (LGPD art. 7, II).</li></ul>',

      s5num: 'Sección 5', s5title: 'Transferencia de Datos',
      s5body: '<p>Tus datos solo pueden compartirse en las siguientes situaciones:</p><ul><li><strong>Proveedores de infraestructura:</strong> utilizamos Firebase (Google LLC) para autenticación, almacenamiento de datos y alojamiento de videos. Los datos se procesan en los servidores de Google de acuerdo con sus políticas de privacidad;</li><li><strong>Gestión de suscripciones:</strong> utilizamos RevenueCat Inc. para procesar las compras dentro de la app. RevenueCat recibe identificadores de transacciones y datos de suscripción, pero no tus datos personales completos;</li><li><strong>Requerimiento legal:</strong> podemos divulgar datos cuando así lo exija la ley, una orden judicial o una autoridad gubernamental competente.</li></ul><p>Ningún dato personal se transfiere a países sin un nivel adecuado de protección sin las salvaguardas requeridas por la normativa aplicable.</p>',

      s6num: 'Sección 6', s6title: 'Conservación de Datos',
      s6body: '<ul><li><strong>Cuenta activa:</strong> conservamos tus datos mientras tu cuenta esté activa;</li><li><strong>Videos de torneos:</strong> los videos enviados pueden conservarse hasta 2 años para fines de auditoría de resultados;</li><li><strong>CPF:</strong> conservado mientras la cuenta esté activa o durante el período necesario para cumplir con las obligaciones legales relacionadas con el pago de premios;</li><li><strong>Eliminación de cuenta:</strong> a petición tuya, tus datos personales serán eliminados en un plazo de 30 días, excepto los que debamos conservar por obligación legal.</li></ul>',

      s7num: 'Sección 7', s7title: 'Tus Derechos',
      s7body: '<p>Como titular de los datos, tienes derecho a:</p><ul><li><strong>Acceso:</strong> saber qué datos personales tenemos sobre ti;</li><li><strong>Rectificación:</strong> solicitar la corrección de datos incompletos, inexactos o desactualizados;</li><li><strong>Supresión:</strong> solicitar la eliminación de tus datos personales, respetando los plazos de conservación legales;</li><li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y legible por máquina;</li><li><strong>Revocación del consentimiento:</strong> retirar tu consentimiento en cualquier momento para tratamientos basados en esa base legal;</li><li><strong>Oposición:</strong> oponerte a tratamientos realizados en base al interés legítimo;</li><li><strong>Información:</strong> ser informado sobre las entidades con las que compartimos tus datos.</li></ul><p>Para ejercer cualquiera de estos derechos, contáctanos en <a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a>. Respondemos en un plazo de 15 días hábiles.</p>',

      s8num: 'Sección 8', s8title: 'Seguridad',
      s8body: '<p>Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a accesos no autorizados, pérdidas accidentales o destrucción, incluyendo:</p><ul><li>Comunicación cifrada mediante HTTPS/TLS en todas las transmisiones;</li><li>Autenticación segura gestionada por Firebase Authentication;</li><li>Control de acceso por roles a los datos en la base de datos (Firestore Security Rules);</li><li>Monitoreo de accesos y auditoría de operaciones críticas.</li></ul><p>En caso de incidente de seguridad que pueda afectar a tus datos, te notificaremos a ti y a la autoridad competente de protección de datos conforme a la normativa aplicable.</p>',

      s9num: 'Sección 9', s9title: 'Cookies y Rastreo',
      s9body: '<p>La aplicación móvil <strong>no utiliza cookies</strong>. El sitio web <a href="https://assobiacao.app">assobiacao.app</a> utiliza cookies de análisis de rendimiento (Microsoft Clarity) para entender cómo los visitantes interactúan con el sitio. Estos datos son anonimizados y no están vinculados a tu cuenta en la aplicación.</p>',

      s10num: 'Sección 10', s10title: 'Privacidad de Menores',
      s10body: '<p>Assobiacão está dirigido a usuarios con <strong>16 años o más</strong>. No recopilamos intencionalmente datos de menores de 16 años. Si crees que un menor ha proporcionado datos personales a la aplicación, contáctanos para que podamos tomar las medidas oportunas.</p>',

      s11num: 'Sección 11', s11title: 'Cambios en esta Política',
      s11body: '<p>Podemos actualizar esta Política de Privacidad periódicamente. Cuando haya cambios significativos, te notificaremos por correo electrónico o mediante notificación en la app con al menos 10 días de antelación.</p><p>La versión más reciente estará siempre disponible en <a href="https://assobiacao.app/privacidade">assobiacao.app/privacidade</a>.</p>',

      contactTitle: '¿Preguntas o solicitudes sobre privacidad?',
      contactBody: '<p>Contacta a nuestro Delegado de Protección de Datos:<br /><a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a><br /><br />Respondemos en un plazo de 15 días hábiles.<br /><br /><strong>Bookfy Tecnologia LTDA</strong><br />CNPJ: 65.129.453/0001-68<br />contato@assobiacao.app</p>',
    },

    /* ── FR ─────────────────────────────────────────────────────────────────── */
    fr: {
      pageTitle: 'Politique de Confidentialité — Assobiacão',
      label:   'Mentions légales',
      title:   'Politique de<br />Confidentialité',
      updated: 'Dernière mise à jour : 30 mai 2025',
      intro:   'Assobiacão respecte votre vie privée et s\'engage à protéger vos données personnelles. Cette Politique décrit les données que nous collectons, la façon dont nous les utilisons et vos droits en tant que personne concernée, conformément à la loi brésilienne sur la protection des données personnelles (LGPD — Loi nº 13.709/2018) et autres réglementations applicables.',

      s1num: 'Article 1', s1title: 'Responsable du Traitement',
      s1body: '<p>Le responsable du traitement de vos données personnelles est <strong>Bookfy Tecnologia LTDA</strong>, personne morale de droit privé immatriculée sous le CNPJ nº <strong>65.129.453/0001-68</strong>, responsable de l\'application Assobiacão.</p><p>Contact du Délégué à la Protection des Données (DPO) : <a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a></p>',

      s2num: 'Article 2', s2title: 'Données que Nous Collectons',
      s2body: '<p>Nous collectons les données personnelles suivantes :</p><ul><li><strong>Données d\'inscription :</strong> nom, adresse e-mail et photo de profil fournis lors de la création de votre compte ;</li><li><strong>CPF (numéro d\'identification fiscale brésilien) :</strong> fourni volontairement par l\'utilisateur pour le versement des prix via PIX ;</li><li><strong>Contenu généré par l\'utilisateur :</strong> vidéos de sifflement enregistrées et soumises via l\'app pour participer aux tournois ;</li><li><strong>Données d\'utilisation :</strong> scores obtenus, tournois auxquels vous avez participé, niveau et XP accumulés, série de soumissions et total de vidéos soumises ;</li><li><strong>Données de l\'appareil :</strong> identifiant de l\'appareil et système d\'exploitation, collectés automatiquement pour garantir le bon fonctionnement de l\'app ;</li><li><strong>Données analytiques anonymes :</strong> événements d\'utilisation agrégés pour l\'amélioration du produit (sans identification personnelle).</li></ul>',

      s3num: 'Article 3', s3title: 'Finalité du Traitement',
      s3body: '<p>Vos données sont utilisées exclusivement pour :</p><ul><li>Créer et gérer votre compte dans l\'application ;</li><li>Traiter votre participation aux tournois et calculer les scores via intelligence artificielle ;</li><li>Effectuer le versement des prix en argent via PIX, en utilisant le CPF enregistré comme clé de vérification ;</li><li>Vous envoyer des notifications sur les tournois actifs, les résultats et les prix à réclamer (désactivable dans les paramètres de l\'appareil) ;</li><li>Améliorer en continu l\'algorithme de notation et l\'expérience utilisateur ;</li><li>Respecter les obligations légales et réglementaires.</li></ul><p><strong>Nous ne vendons, ne louons ni ne commercialisons vos données personnelles avec des tiers à des fins marketing.</strong></p>',

      s4num: 'Article 4', s4title: 'Base Légale du Traitement',
      s4body: '<ul><li><strong>Exécution du contrat</strong> — pour opérer votre compte, traiter les tournois et effectuer les paiements (LGPD art. 7, V) ;</li><li><strong>Intérêt légitime</strong> — pour l\'analyse d\'utilisation et l\'amélioration du produit (LGPD art. 7, IX) ;</li><li><strong>Consentement</strong> — pour l\'envoi de communications marketing, le cas échéant (LGPD art. 7, I) ;</li><li><strong>Obligation légale</strong> — pour respecter les exigences fiscales et réglementaires liées au versement des prix (LGPD art. 7, II).</li></ul>',

      s5num: 'Article 5', s5title: 'Partage des Données',
      s5body: '<p>Vos données ne peuvent être partagées que dans les situations suivantes :</p><ul><li><strong>Fournisseurs d\'infrastructure :</strong> nous utilisons Firebase (Google LLC) pour l\'authentification, le stockage des données et l\'hébergement des vidéos. Les données sont traitées sur les serveurs de Google conformément à leurs politiques de confidentialité ;</li><li><strong>Gestion des abonnements :</strong> nous utilisons RevenueCat Inc. pour traiter les achats intégrés à l\'app. RevenueCat reçoit des identifiants de transactions et des données d\'abonnement, mais pas vos données personnelles complètes ;</li><li><strong>Exigence légale :</strong> nous pouvons divulguer des données lorsque la loi, une décision de justice ou une autorité gouvernementale compétente l\'exige.</li></ul><p>Aucune donnée personnelle n\'est transférée vers des pays sans niveau de protection adéquat sans les garanties requises par la réglementation applicable.</p>',

      s6num: 'Article 6', s6title: 'Conservation des Données',
      s6body: '<ul><li><strong>Compte actif :</strong> nous conservons vos données tant que votre compte est actif ;</li><li><strong>Vidéos de tournois :</strong> les vidéos soumises peuvent être conservées jusqu\'à 2 ans à des fins d\'audit des résultats ;</li><li><strong>CPF :</strong> conservé tant que le compte est actif ou pendant la durée nécessaire au respect des obligations légales liées au versement des prix ;</li><li><strong>Suppression du compte :</strong> sur demande, vos données personnelles seront supprimées dans un délai de 30 jours, à l\'exception des données que nous devons conserver en vertu d\'obligations légales.</li></ul>',

      s7num: 'Article 7', s7title: 'Vos Droits',
      s7body: '<p>En tant que personne concernée, vous avez le droit de :</p><ul><li><strong>Accès :</strong> savoir quelles données personnelles nous détenons vous concernant ;</li><li><strong>Rectification :</strong> demander la correction de données incomplètes, inexactes ou obsolètes ;</li><li><strong>Effacement :</strong> demander la suppression de vos données personnelles, sous réserve des délais de conservation légaux ;</li><li><strong>Portabilité :</strong> recevoir vos données dans un format structuré et lisible par machine ;</li><li><strong>Retrait du consentement :</strong> retirer votre consentement à tout moment pour les traitements fondés sur cette base légale ;</li><li><strong>Opposition :</strong> vous opposer aux traitements fondés sur l\'intérêt légitime ;</li><li><strong>Information :</strong> être informé des entités avec lesquelles nous partageons vos données.</li></ul><p>Pour exercer l\'un de ces droits, contactez-nous à <a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a>. Nous répondons dans un délai de 15 jours ouvrables.</p>',

      s8num: 'Article 8', s8title: 'Sécurité',
      s8body: '<p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute perte accidentelle ou destruction, notamment :</p><ul><li>Communication chiffrée via HTTPS/TLS sur toutes les transmissions ;</li><li>Authentification sécurisée gérée par Firebase Authentication ;</li><li>Contrôle d\'accès basé sur les rôles dans la base de données (Firestore Security Rules) ;</li><li>Surveillance des accès et audit des opérations critiques.</li></ul><p>En cas d\'incident de sécurité susceptible d\'affecter vos données, nous vous en informerons ainsi que l\'autorité compétente de protection des données, conformément à la réglementation applicable.</p>',

      s9num: 'Article 9', s9title: 'Cookies et Traceurs',
      s9body: '<p>L\'application mobile <strong>n\'utilise pas de cookies</strong>. Le site <a href="https://assobiacao.app">assobiacao.app</a> utilise des cookies d\'analyse de performance (Microsoft Clarity) pour comprendre comment les visiteurs interagissent avec le site. Ces données sont anonymisées et non liées à votre compte dans l\'application.</p>',

      s10num: 'Article 10', s10title: 'Protection des Mineurs',
      s10body: '<p>Assobiacão est destiné aux utilisateurs âgés de <strong>16 ans ou plus</strong>. Nous ne collectons pas intentionnellement de données provenant d\'enfants de moins de 16 ans. Si vous pensez qu\'un enfant a fourni des données personnelles à l\'application, veuillez nous contacter afin que nous puissions prendre les mesures appropriées.</p>',

      s11num: 'Article 11', s11title: 'Modifications de cette Politique',
      s11body: '<p>Nous pouvons mettre à jour cette Politique de confidentialité périodiquement. En cas de modifications significatives, nous vous en informerons par e-mail ou par notification dans l\'application avec un préavis d\'au moins 10 jours.</p><p>La version la plus récente sera toujours disponible sur <a href="https://assobiacao.app/privacidade">assobiacao.app/privacidade</a>.</p>',

      contactTitle: 'Questions ou demandes concernant la confidentialité ?',
      contactBody: '<p>Contactez notre Délégué à la Protection des Données :<br /><a href="mailto:contato@assobiacao.app">contato@assobiacao.app</a><br /><br />Nous répondons dans un délai de 15 jours ouvrables.<br /><br /><strong>Bookfy Tecnologia LTDA</strong><br />CNPJ : 65.129.453/0001-68<br />contato@assobiacao.app</p>',
    },
  };

  // ── Apply ────────────────────────────────────────────────────────────────────

  function applyPrivacy(lang) {
    var t = TP[lang] || TP['pt-BR'];

    // data-privacy → textContent
    document.querySelectorAll('[data-privacy]').forEach(function (el) {
      var key = el.getAttribute('data-privacy');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // data-privacy-html → innerHTML
    document.querySelectorAll('[data-privacy-html]').forEach(function (el) {
      var key = el.getAttribute('data-privacy-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Page <title>
    if (t.pageTitle) document.title = t.pageTitle;
  }

  // ── Init ────────────────────────────────────────────────────────────────────

  function init() {
    var lang = localStorage.getItem(STORAGE_KEY) || 'pt-BR';
    applyPrivacy(lang);

    // React to language changes fired by i18n.js switcher
    window.addEventListener('assobiacao-lang', function (e) {
      applyPrivacy(e.detail && e.detail.lang ? e.detail.lang : 'pt-BR');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
