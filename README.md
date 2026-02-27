<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Yanka Silva - Social Media Specialist 🚀

Este é o projeto oficial da landing page profissional de **Yanka Silva**, especialista em gestão estratégica de redes sociais. O projeto foi migrado para **Astro JS** seguindo os mais altos padrões de performance e SEO.

## ✨ Características do Projeto

-   **Framework:** [Astro 5](https://astro.build/) para performance máxima (Zero-JS por padrão).
-   **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/) com novas capacidades nativas.
-   **UI & Motion:** [React 19](https://react.dev/) e [Motion/framer-motion v12](https://motion.dev/) para interações fluidas.
-   **SEO:** Estrutura otimizada com Tags Meta, OpenGraph e títulos semânticos.
-   **Arquitetura:** Componentes modulares para fácil manutenção e escalabilidade.

## ⚡ Performance

Graças à arquitetura de **Islands** do Astro, apenas as partes interativas da página são "hidratadas" com JavaScript no cliente:
-   **Header:** Efeito de scroll dinâmico.
-   **Hero:** Animação de digitação e motion entrance.
-   **Portfolio:** Filtragem interativa de cases.
-   **Seções de Info:** Animações baseadas em visibilidade (`client:visible`).
-   **Footer & Testemunhos:** Renderização 100% estática (Zero JS enviado ao navegador).

## 🛠️ Como Iniciar Localmente

1.  Clone o repositório.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Para build de produção:
    ```bash
    npm run build
    ```

## 📂 Estrutura de Pastas

-   `src/components/`: Componentes React modulares.
-   `src/layouts/`: Estrutura base de HTML e SEO.
-   `src/pages/`: Rotas do projeto (Index.astro).
-   `src/index.css`: Definições globais de design e Tailwind.

---
Desenvolvido com foco em alta conversão e presença digital premium.
