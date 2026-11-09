import { useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Code2, Eye, FileText, Globe2, Moon, Search, Sun, Zap } from 'lucide-react'

const sampleUrl = 'https://www.dunelm.com/product/3-tier-heated-airer-1000197361?defaultSkuId=30752154'

const findings = [
  { label: 'Product name', value: '3 Tier Heated Airer', status: 'Found', tone: 'good' },
  { label: 'Price', value: '£ — not verified in demo', status: 'Needs check', tone: 'warn' },
  { label: 'Product description', value: 'Not yet inspected', status: 'Demo data', tone: 'muted' },
  { label: 'Technical specifications', value: 'Not yet inspected', status: 'Demo data', tone: 'muted' },
  { label: 'Availability', value: 'Not yet inspected', status: 'Demo data', tone: 'muted' },
]

function App() {
  const [dark, setDark] = useState(false)
  const [url, setUrl] = useState(sampleUrl)
  const [activeTab, setActiveTab] = useState('Overview')
  const [submitted, setSubmitted] = useState(false)

  const runDemo = () => {
    setSubmitted(true)
    window.setTimeout(() => setSubmitted(false), 2600)
  }

  return (
    <main className={dark ? 'app dark' : 'app'}>
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark">L</span><span>llm<span className="brand-light">renderer</span><i>.</i></span></a>
        <nav className="nav-links"><a href="#how">How it works</a><a href="#about">About</a></nav>
        <div className="top-actions">
          <span className="status-chip"><span className="status-dot" /> Prototype</span>
          <button className="icon-button" aria-label="Toggle colour theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="github-link" href="https://github.com/christie-tucker/LLM-Renderer" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <section className="hero">
        <div className="eyebrow"><span className="eyebrow-line" /> THE WEB, THROUGH AN AI LENS</div>
        <h1>What does AI<br /><span>actually see?</span></h1>
        <p className="hero-copy">Explore the information a webpage makes accessible to automated readers — and spot the gaps that could make your content harder to understand.</p>
        <div className="url-box">
          <Globe2 size={18} className="url-icon" />
          <input aria-label="Website URL" value={url} onChange={e => setUrl(e.target.value)} onKeyDown={e => e.key === 'Enter' && runDemo()} />
          <button onClick={runDemo}><Search size={16} /> Inspect URL <span>↗</span></button>
        </div>
        <div className="input-note"><span className="sparkle">✳</span> One URL at a time <span className="note-divider">·</span> No crawling, no guesswork</div>
        {submitted && <div className="demo-notice">This is a visual prototype — live URL analysis is the next build step.</div>}
      </section>

      <section className="workspace">
        <div className="section-heading">
          <div><div className="eyebrow small">THE INSPECTION WORKSPACE</div><h2>One page. Two perspectives.</h2></div>
          <div className="sample-label"><span className="sample-dot" /> SAMPLE PREVIEW</div>
        </div>
        <div className="view-grid">
          <article className="view-card human-card">
            <div className="card-head"><div className="card-title"><span className="view-icon human-icon"><Eye size={16}/></span><div><h3>Human view</h3><p>What a visitor experiences</p></div></div><span className="view-tag">VISUAL</span></div>
            <div className="mock-browser">
              <div className="browser-bar"><div className="traffic"><i/><i/><i/></div><div className="browser-address">dunelm.com / product</div><ChevronDown size={13}/></div>
              <div className="mock-site">
                <div className="mock-site-head"><b>dunelm<span>.</span></b><div>Home　 Living　 Bedroom　 Garden</div><span>⌕　♡　♧</span></div>
                <div className="crumb">Home　›　Laundry & utility　›　Airers</div>
                <div className="product-layout">
                  <div className="product-art">
                    <div className="airer"><div className="airer-top"/><div className="airer-side left"/><div className="airer-side right"/><div className="airer-leg l1"/><div className="airer-leg l2"/><div className="airer-leg l3"/><div className="airer-leg l4"/><div className="airer-rail r1"/><div className="airer-rail r2"/><div className="airer-rail r3"/></div>
                    <span className="art-caption">PRODUCT IMAGE PREVIEW</span>
                  </div>
                  <div className="product-copy"><span className="mock-kicker">DUNELM</span><h4>3 Tier Heated<br/>Airer</h4><div className="stars">★★★★★ <small>(reviews)</small></div><div className="mock-price">£ —</div><p className="mock-description">A practical heated airer designed to help dry laundry indoors.</p><button className="mock-cta">Add to basket</button><small className="mock-foot">Illustrative page preview</small></div>
                </div>
              </div>
            </div>
            <div className="card-foot"><span><Eye size={13}/> Visual layout and rendered content</span><span className="foot-muted">Illustrative</span></div>
          </article>

          <article className="view-card agent-card">
            <div className="card-head"><div className="card-title"><span className="view-icon agent-icon"><Code2 size={16}/></span><div><h3>Agent view</h3><p>What this prototype has extracted</p></div></div><span className="view-tag purple-tag">STRUCTURED</span></div>
            <div className="agent-panel">
              <div className="agent-toolbar"><span><span className="terminal-dot"/> page_extract.json</span><span>JSON</span></div>
              <div className="code-content">
                <div className="code-line"><span className="ln">01</span><span className="bracket">{'{'}</span></div>
                <div className="code-line indent"><span className="ln">02</span><span className="key">"page_title"</span><span className="punct">: </span><span className="string">"3 Tier Heated Airer"</span><span className="punct">,</span></div>
                <div className="code-line indent"><span className="ln">03</span><span className="key">"url"</span><span className="punct">: </span><span className="string">"dunelm.com/…"</span><span className="punct">,</span></div>
                <div className="code-line indent"><span className="ln">04</span><span className="key">"content_type"</span><span className="punct">: </span><span className="string">"product page"</span><span className="punct">,</span></div>
                <div className="code-line indent"><span className="ln">05</span><span className="key">"signals"</span><span className="punct">: {'{'}</span></div>
                <div className="code-line indent2"><span className="ln">06</span><span className="key">"product_name"</span><span className="punct">: </span><span className="bool">true</span><span className="punct">,</span></div>
                <div className="code-line indent2"><span className="ln">07</span><span className="key">"price"</span><span className="punct">: </span><span className="bool false">null</span><span className="punct">,</span></div>
                <div className="code-line indent2"><span className="ln">08</span><span className="key">"schema_markup"</span><span className="punct">: </span><span className="bool false">not checked</span></div>
                <div className="code-line indent"><span className="ln">09</span><span className="punct">{'}'}</span></div>
                <div className="code-line"><span className="ln">10</span><span className="bracket">{'}'}</span></div>
              </div>
              <div className="agent-disclaimer"><Zap size={13}/> Sample structure only — no live page has been fetched.</div>
            </div>
            <div className="card-foot"><span><Code2 size={13}/> Extracted fields and machine-readable signals</span><span className="foot-muted">Illustrative</span></div>
          </article>
        </div>
      </section>

      <section className="diagnostics" id="how">
        <div className="diagnostic-top"><div><div className="eyebrow small">SIGNALS & DISCOVERABILITY</div><h2>Make the invisible visible.</h2><p>Understand which details are present, missing, or need a closer look.</p></div><div className="diagnostic-count"><strong>—</strong><span>LIVE CHECKS<br/>NOT CONNECTED</span></div></div>
        <div className="tabs">{['Overview', 'Content', 'Structure', 'Links & media'].map(tab => <button key={tab} className={activeTab === tab ? 'tab active' : 'tab'} onClick={() => setActiveTab(tab)}>{tab}</button>)}</div>
        <div className="findings">
          {findings.map((item, i) => <div className="finding" key={item.label}><div className="finding-index">0{i+1}</div><div className="finding-main"><strong>{item.label}</strong><span>{item.value}</span></div><span className={'finding-status ' + item.tone}>{item.status}</span><ChevronDown size={15} className="finding-chevron"/></div>)}
        </div>
        <div className="disclaimer"><span className="info-mark">i</span><span><strong>Transparency first.</strong> This prototype shows the intended experience, not verified findings about the example URL. The live analyser will distinguish initial HTML, JavaScript-rendered content and information it cannot detect.</span></div>
      </section>

      <footer id="about"><div className="footer-brand">llm<span>renderer</span><i>.</i></div><p>A clearer view of how web content is exposed to AI systems.</p><div className="footer-right">A project by Christie Tucker <span>© 2026</span></div></footer>
    </main>
  )
}

export default App
