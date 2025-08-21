// Configuração do Google Sign-In para VeloAcademy
// IMPORTANTE: Para desenvolvimento, você pode usar este Client ID de teste
// Para produção, substitua pelo seu Client ID real do Google Cloud Console

const GOOGLE_SIGNIN_CONFIG = {
    // Client ID para desenvolvimento (funciona com localhost)
    // Para obter seu próprio: https://console.cloud.google.com/apis/credentials
    CLIENT_ID: '123456789-abcdefghijklmnop.apps.googleusercontent.com',
    
    // Domínios autorizados para login
    AUTHORIZED_DOMAINS: [
        'velotax.com.br',
        'velotax.com',
        'gmail.com', // Temporário para testes
        'outlook.com' // Temporário para testes
    ],
    
    // Configurações do botão de login
    BUTTON_CONFIG: {
        type: 'standard',
        theme: 'outline',
        size: 'large',
        text: 'signin_with',
        shape: 'rectangular',
        logo_alignment: 'center'
    }
};

// Função para configurar o Google Sign-In
function configureGoogleSignIn() {
    const gIdOnload = document.getElementById('g_id_onload');
    if (gIdOnload) {
        gIdOnload.setAttribute('data-client_id', GOOGLE_SIGNIN_CONFIG.CLIENT_ID);
        gIdOnload.setAttribute('data-callback', 'handleCredentialResponse');
        gIdOnload.setAttribute('data-auto_prompt', 'false');
        gIdOnload.setAttribute('data-context', 'signin');
    }
    
    const gIdSignin = document.querySelector('.g_id_signin');
    if (gIdSignin) {
        Object.entries(GOOGLE_SIGNIN_CONFIG.BUTTON_CONFIG).forEach(([key, value]) => {
            gIdSignin.setAttribute(`data-${key}`, value);
        });
    }
}

// Verificar se o domínio do email é autorizado
function isAuthorizedDomain(email) {
    if (!email) return false;
    
    const domain = email.split('@')[1]?.toLowerCase();
    return GOOGLE_SIGNIN_CONFIG.AUTHORIZED_DOMAINS.some(authorized => 
        domain === authorized || domain.endsWith('.' + authorized)
    );
}

// Função para modo de desenvolvimento (sem validação de domínio)
function isDevelopmentMode() {
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1' ||
           window.location.hostname.includes('localhost');
}

// Exportar configurações
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GOOGLE_SIGNIN_CONFIG, configureGoogleSignIn, isAuthorizedDomain, isDevelopmentMode };
}
