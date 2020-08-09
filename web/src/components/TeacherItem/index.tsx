import React from 'react';

//imagens e icones
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/52044729?s=460&u=1eb357742512b47e816b8d73c314fde893cc9c33&v=4" alt="Horlando Leão" />
                <div>
                    <strong>Horlando Leão</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Estusiata de Experimentos de Químicos.
                <br /><br />
                Adora descobrir novos métodos de experimentação. Adora descobrir novos métodos de experimentação.Adora descobrir novos métodos de experimentação. Adora descobrir novos métodos de experimentação.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$: 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>

        </article>
    );
}

export default TeacherItem;
