import {
  Check,
  TrendingUp,
  Zap,
  Award,
  MousePointer,
  Globe,
  Megaphone,
  Facebook,
  Instagram,
} from "lucide-react"

const Pricing = () => {
  return (
    <div className="mb-12 min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Animated background elements */}
      

      {/* Header text */}
      <div className="max-w-2xl text-center mb-8 relative z-10 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Está preparado?
          </span>{" "}
          Comece agora e faça suas primeiras vendas com{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            tráfego pago!
          </span>
        </h2>
       
      </div>

      {/* Pricing card */}
      <div className="w-full max-w-md relative px-4">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 rounded-2xl blur opacity-75"></div>

        <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl shadow-2xl overflow-hidden border border-purple-500/30">
          {/* Header */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-900/80 to-purple-900/80 border-b border-purple-500/30">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  TRÁFEGO <span className="text-blue-400">ACADEMY</span>
                </h3>
                <p className="text-xs text-blue-300">Especialistas em Tráfego Pago</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-400" />
                Serviços de Tráfego Pago
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="ml-3 text-sm sm:text-base text-gray-200">
                    <span className="font-medium">Campanhas no Google Ads</span> otimizadas para conversão
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="ml-3 text-sm sm:text-base text-gray-200">
                    <span className="font-medium">Anúncios no Facebook e Instagram</span> de alta performance
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="ml-3 text-sm sm:text-base text-gray-200">
                    <span className="font-medium">Remarketing Estratégico</span> para aumentar conversões
                  </span>
                </li>
                {/* <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="ml-3 text-sm sm:text-base text-gray-200">
                    <span className="font-medium">Análise de Métricas</span> e otimização de ROAS
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="ml-3 text-sm sm:text-base text-gray-200">
                    <span className="font-medium">Segmentação Avançada</span> de público-alvo
                  </span>
                </li> */}
              </ul>
            </div>

            {/* Platforms */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-3 sm:p-4 rounded-lg border border-blue-500/20">
              <h4 className="text-xs sm:text-sm font-semibold text-blue-300 mb-2 flex items-center">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-blue-400" />
                PLATAFORMAS INCLUÍDAS
              </h4>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center bg-gray-800/60 px-2 py-1 rounded-md text-xs">
                  <div className="mr-1 text-red-400">
                    <Megaphone className="h-3 w-3" />
                  </div>
                  <span className="text-gray-300">Google Ads</span>
                </div>
                <div className="flex items-center bg-gray-800/60 px-2 py-1 rounded-md text-xs">
                  <div className="mr-1 text-blue-400">
                    <Facebook className="h-3 w-3" />
                  </div>
                  <span className="text-gray-300">Facebook Ads</span>
                </div>
                <div className="flex items-center bg-gray-800/60 px-2 py-1 rounded-md text-xs">
                  <div className="mr-1 text-pink-400">
                    <Instagram className="h-3 w-3" />
                  </div>
                  <span className="text-gray-300">Instagram Ads</span>
                </div>
                {/* <div className="flex items-center bg-gray-800/60 px-2 py-1 rounded-md text-xs">
                  <div className="mr-1 text-cyan-400">
                    <MousePointer className="h-3 w-3" />
                  </div>
                  <span className="text-gray-300">TikTok Ads</span>
                </div> */}
              </div>
            </div>

            {/* Bonus section */}
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-3 sm:p-4 rounded-lg border border-purple-500/20">
              <h4 className="text-xs sm:text-sm font-semibold text-purple-300 mb-2 flex items-center">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-yellow-400" />
                BÔNUS EXCLUSIVOS
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-xs sm:text-sm">
                  <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-400 mr-2"></div>
                  <span className="text-gray-300">Planilha de Cálculo de ROAS e ROI</span>
                </li>
                <li className="flex items-center text-xs sm:text-sm">
                  <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-400 mr-2"></div>
                  <span className="text-gray-300">50 Modelos de Anúncios de Alta Conversão</span>
                </li>
                <li className="flex items-center text-xs sm:text-sm">
                  <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-400 mr-2"></div>
                  <span className="text-gray-300">Guia de Segmentação Avançada</span>
                </li>
              </ul>
            </div>

            {/* Results */}
            {/* <div className="flex flex-wrap justify-between gap-2 bg-gradient-to-r from-green-900/20 to-blue-900/20 p-3 sm:p-4 rounded-lg border border-green-500/20">
              <div className="flex flex-col items-center">
                <PieChart className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mb-1" />
                <p className="text-lg sm:text-xl font-bold text-white">300%</p>
                <p className="text-xs text-gray-400">ROAS Médio</p>
              </div>
              <div className="flex flex-col items-center">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mb-1" />
                <p className="text-lg sm:text-xl font-bold text-white">-40%</p>
                <p className="text-xs text-gray-400">Custo por Lead</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mb-1" />
                <p className="text-lg sm:text-xl font-bold text-white">+1000</p>
                <p className="text-xs text-gray-400">Alunos</p>
              </div>
            </div> */}

            {/* Price */}
            <div className="pt-3 sm:pt-4 border-t border-gray-700">
              <div className="flex flex-col items-center">
                <p className="text-gray-400 text-xs sm:text-sm mb-1">Investimento único</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  <span className="text-xs sm:text-sm align-top">R$</span>297
                </h3>
                <p className="text-xs text-gray-400 mb-2">ou 12x de R$29,70</p>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 sm:mt-8 relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-md blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
        <a href="https://chat.whatsapp.com/KCWDPNu8txt9yYRxXELtED" className="relative cursor-pointer px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-md text-base sm:text-lg shadow-lg transform hover:scale-105 transition-all duration-200 uppercase">
          Saiba mais e comece agora!
        </a>
      </div>

     
    </div>
  )
}

export default Pricing
