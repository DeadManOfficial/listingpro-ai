import { useState } from 'react'
import './index.css'

// Icons
const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const LoadingSpinner = () => (
  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
)

// Social Links Component
const SocialLinks = () => (
  <div className="flex items-center gap-4">
    <a href="https://github.com/DeadManOfficial" target="_blank" rel="noopener noreferrer"
       className="text-gray-400 hover:text-orange-400 transition-colors" title="GitHub">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
    <a href="https://youtube.com/@DeadManAI" target="_blank" rel="noopener noreferrer"
       className="text-gray-400 hover:text-orange-400 transition-colors" title="YouTube">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>
    <a href="https://twitter.com/DeadManAI" target="_blank" rel="noopener noreferrer"
       className="text-gray-400 hover:text-orange-400 transition-colors" title="Twitter/X">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
  </div>
)

function App() {
  const [productInfo, setProductInfo] = useState('')
  const [platform, setPlatform] = useState('ebay')
  const [optimizedListing, setOptimizedListing] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState({})

  const platforms = [
    { id: 'ebay', name: 'eBay', color: 'from-blue-500 to-blue-600' },
    { id: 'poshmark', name: 'Poshmark', color: 'from-pink-500 to-rose-600' },
    { id: 'mercari', name: 'Mercari', color: 'from-red-500 to-red-600' },
    { id: 'depop', name: 'Depop', color: 'from-orange-500 to-amber-600' },
    { id: 'facebook', name: 'FB Marketplace', color: 'from-blue-600 to-indigo-600' },
  ]

  const optimizeListing = async () => {
    if (!productInfo.trim()) return

    setLoading(true)

    // Simulate AI processing (in production, this would call your AI API)
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Generate optimized listing based on input
    const words = productInfo.toLowerCase()
    const isFashion = words.includes('shirt') || words.includes('dress') || words.includes('shoes') || words.includes('jacket') || words.includes('pants')
    const isElectronics = words.includes('phone') || words.includes('laptop') || words.includes('camera') || words.includes('headphones')
    const isVintage = words.includes('vintage') || words.includes('retro') || words.includes('antique')

    let category = 'General'
    if (isFashion) category = 'Fashion'
    if (isElectronics) category = 'Electronics'
    if (isVintage) category = 'Vintage & Collectibles'

    const platformNames = {
      ebay: 'eBay',
      poshmark: 'Poshmark',
      mercari: 'Mercari',
      depop: 'Depop',
      facebook: 'Facebook Marketplace'
    }

    setOptimizedListing({
      title: `${isVintage ? '🔥 VINTAGE ' : '✨ '}${productInfo.slice(0, 60).toUpperCase()} - ${isFashion ? 'FAST SHIP' : 'GREAT CONDITION'}`,
      description: `📦 ${productInfo}\n\n✅ Condition: Excellent\n✅ Fast Shipping\n✅ Smoke-free home\n✅ Check out my other listings!\n\n🏷️ Tags: ${category.toLowerCase()}, ${platform}, reseller, ${isVintage ? 'vintage, retro, ' : ''}thrift finds\n\n💫 Thank you for shopping with us!`,
      keywords: [
        category.toLowerCase(),
        platform,
        'free shipping',
        isVintage ? 'vintage' : 'new',
        isFashion ? 'fashion' : isElectronics ? 'tech' : 'home',
        'deals',
        'sale',
        platformNames[platform].toLowerCase()
      ],
      tips: [
        `Optimal title length for ${platformNames[platform]}: 60-80 characters`,
        'Use all caps for key selling points',
        'Include condition and shipping info early',
        `Best posting time for ${platformNames[platform]}: 7-9 PM EST`,
        'Cross-list to maximize exposure'
      ]
    })

    setLoading(false)
  }

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopied({ ...copied, [field]: true })
    setTimeout(() => setCopied({ ...copied, [field]: false }), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-gray-800/50 backdrop-blur-sm sticky top-0 z-50 bg-[#0a0a0a]/80">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center glow">
              <SparklesIcon />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">ListingPro AI</h1>
              <p className="text-xs text-gray-500">Reseller Optimizer</p>
            </div>
          </div>
          <SocialLinks />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-6">
            <SparklesIcon />
            <span>AI-Powered Listing Optimization</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Turn Products Into <span className="gradient-text">Sales</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Optimize your reseller listings with AI. Generate compelling titles, descriptions, and keywords that convert browsers into buyers.
          </p>
        </div>
      </section>

      {/* Main Tool */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            {/* Platform Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">Select Platform</label>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      platform === p.id
                        ? `bg-gradient-to-r ${p.color} text-white shadow-lg`
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Describe Your Product
              </label>
              <textarea
                value={productInfo}
                onChange={(e) => setProductInfo(e.target.value)}
                placeholder="e.g., Vintage Nike Air Jordan 1 sneakers, size 10, red and black colorway, excellent condition, original box included..."
                className="textarea-field h-32"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={optimizeListing}
              disabled={loading || !productInfo.trim()}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  <span>Optimizing...</span>
                </>
              ) : (
                <>
                  <SparklesIcon />
                  <span>Optimize Listing</span>
                </>
              )}
            </button>
          </div>

          {/* Results */}
          {optimizedListing && (
            <div className="mt-8 space-y-6 animate-fade-in">
              {/* Optimized Title */}
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">Optimized Title</h3>
                  <button
                    onClick={() => copyToClipboard(optimizedListing.title, 'title')}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {copied.title ? <CheckIcon /> : <CopyIcon />}
                    {copied.title ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <p className="text-orange-400 font-medium bg-gray-900/50 rounded-lg p-4">
                  {optimizedListing.title}
                </p>
              </div>

              {/* Optimized Description */}
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">Optimized Description</h3>
                  <button
                    onClick={() => copyToClipboard(optimizedListing.description, 'description')}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {copied.description ? <CheckIcon /> : <CopyIcon />}
                    {copied.description ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="text-gray-300 bg-gray-900/50 rounded-lg p-4 whitespace-pre-wrap font-sans text-sm">
                  {optimizedListing.description}
                </pre>
              </div>

              {/* Keywords */}
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-3">Suggested Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {optimizedListing.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm cursor-pointer hover:bg-orange-500/20 transition-colors"
                      onClick={() => copyToClipboard(keyword, `keyword-${i}`)}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pro Tips */}
              <div className="card border-orange-500/30">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-orange-400">💡</span> Pro Tips
                </h3>
                <ul className="space-y-2">
                  {optimizedListing.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-orange-400 mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Why Resellers Love Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🚀', title: 'Boost Sales', desc: 'AI-optimized listings convert 3x better than manual ones' },
              { icon: '⏱️', title: 'Save Time', desc: 'Generate perfect listings in seconds, not hours' },
              { icon: '🎯', title: 'Multi-Platform', desc: 'Optimized for eBay, Poshmark, Mercari, Depop & more' },
            ].map((feature, i) => (
              <div key={i} className="card text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <SparklesIcon />
            </div>
            <span className="text-gray-400 text-sm">© 2026 ListingPro AI by DeadMan</span>
          </div>
          <SocialLinks />
        </div>
      </footer>
    </div>
  )
}

export default App
