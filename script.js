// Script para manipulação do formulário e botões de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    // Configuração do número de WhatsApp (substitua pelo seu número)
    const whatsappNumber = "5513981354499"; // Formato: código do país + DDD + número
    const whatsappMessage = "Olá! Gostaria de mais informações sobre crédito consignado.";
    
    // Função para formatar valores monetários
    function formatCurrency(input) {
        // Remove todos os caracteres não numéricos
        let value = input.value.replace(/\D/g, '');
        
        // Converte para número e formata como moeda
        if (value === '') {
            input.value = '';
        } else {
            value = (parseInt(value) / 100).toFixed(2);
            input.value = 'R$ ' + value.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        }
    }
    
    // Função para formatar telefone
    function formatPhone(input) {
        let value = input.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            if (value.length > 2 && value.length <= 6) {
                input.value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
            } else if (value.length > 6) {
                input.value = '(' + value.substring(0, 2) + ') ' + value.substring(2, 7) + '-' + value.substring(7);
            }
        } else {
            input.value = value.substring(0, 11);
            formatPhone(input);
        }
    }
    
    // Aplicar formatação ao campo de valor
    const loanAmountInput = document.getElementById('loan-amount');
    if (loanAmountInput) {
        loanAmountInput.addEventListener('input', function() {
            formatCurrency(this);
        });
    }
    
    // Aplicar formatação ao campo de telefone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhone(this);
        });
    }
    
    // Configurar formulário de simulação
    const loanForm = document.getElementById('loan-form');
    if (loanForm) {
        loanForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const loanType = document.getElementById('loan-type').value;
            const loanAmount = document.getElementById('loan-amount').value;
            
            // Criar mensagem personalizada
            let customMessage = `Olá! Meu nome é ${name}. Gostaria de simular um empréstimo consignado.\n`;
            customMessage += `Tipo: ${document.getElementById('loan-type').options[document.getElementById('loan-type').selectedIndex].text}\n`;
            customMessage += `Valor desejado: ${loanAmount}\n`;
            customMessage += `Meu telefone: ${phone}`;
            
            // Codificar a mensagem para URL
            const encodedMessage = encodeURIComponent(customMessage);
            
            // Redirecionar para WhatsApp
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        });
    }
    
    // Configurar botões de WhatsApp
    const whatsappButton = document.getElementById('whatsapp-button');
    const floatingWhatsappButton = document.getElementById('floating-whatsapp-button');
    const headerWhatsappButton = document.getElementById('header-whatsapp-button');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        });
    }
    
    if (floatingWhatsappButton) {
        floatingWhatsappButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        });
    }
    
    if (headerWhatsappButton) {
        headerWhatsappButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        });
    }
    
    // Animação de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
