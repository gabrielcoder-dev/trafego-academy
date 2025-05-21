import { TrendingUp } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6 flex flex-col items-center">
          <img src="./logo-2.png" alt="" />
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs mb-6">
          Copyright © 2025 Trafego Academy
          <br />
          Todos os direitos reservados
        </div>

        {/* Disclaimer */}
        <div className="text-gray-600 text-xs max-w-2xl mx-auto leading-relaxed">
          Este site não é afiliado ao Facebook nem a qualquer outra plataforma. A responsabilidade pelo conteúdo e pelas
          informações é nossa assim que você sai do Facebook. Fazemos todos os esforços para indicar claramente e
          mostrar todas as provas do produto e usamos resultados reais. Para sua segurança não compartilhamos suas
          informações com terceiros e não fazemos spam de baixa qualidade. Nossa equipe está disponível para responder
          qualquer pergunta, basta entrar em contato pelo e-mail e responderemos o mais rápido possível.
        </div>
      </div>
    </footer>
  )
}

export default Footer
