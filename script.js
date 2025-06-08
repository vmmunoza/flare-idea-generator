/**
 * Flare Idea Generator (FIG)
 * A frontend application to help blockchain developers discover innovative dApp ideas for Flare Network
 */

// Embedded JSON data with 100+ predefined blockchain project ideas
const projectIdeas = [
    {
        "title": "NFT Marketplace with Dynamic Pricing",
        "description": "Create an NFT marketplace that uses FTSO price feeds to dynamically price NFTs in USD equivalent.",
        "features": ["FTSO"],
        "link": "https://docs.flare.network/ftso"
    },
    {
        "title": "Gasless Twitter Reputation Verifier",
        "description": "A dApp that uses FDC to attest if a user owns a verified Twitter account without requiring gas.",
        "features": ["FDC", "Attestation"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Web2 Leaderboard Integrity Tracker",
        "description": "Verify public gaming leaderboards using FDC to attest scores from Web2 APIs.",
        "features": ["FDC"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Stablecoin Vault with Asset Monitoring",
        "description": "A smart contract that lets users deposit stablecoins with conditions based on real-time FTSO prices.",
        "features": ["FTSO", "Smart Contracts"],
        "link": "https://docs.flare.network/ftso"
    },
    {
        "title": "Decentralized Subscription Tracker",
        "description": "Use FDC to verify Web2 payment receipts (e.g., Spotify, Netflix) and unlock access to Web3 tokens.",
        "features": ["FDC"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Cross-Chain Lending Dashboard",
        "description": "Display live collateral-to-loan ratios using FTSO across different chains for user assets.",
        "features": ["FTSO", "Cross-chain"],
        "link": "https://docs.flare.network/ftso"
    },
    {
        "title": "Decentralized GitHub Contributions Tracker",
        "description": "Use FDC to attest contribution stats from GitHub and tokenize developer reputation.",
        "features": ["FDC", "Attestation"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "DAO Spending Monitor",
        "description": "Automatically release funds to DAO proposals if FDC attests external KPIs (e.g., Twitter follower growth).",
        "features": ["FDC", "Smart Contracts"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Carbon Credit Verifier",
        "description": "Validate carbon offset purchases using FDC to fetch certificates from authorized Web2 APIs.",
        "features": ["FDC"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "NFT Rarity Oracle",
        "description": "Integrate FTSO to fetch rarity indexes from external APIs and use them to auto-score NFTs.",
        "features": ["FTSO", "IPFS"],
        "link": "https://docs.flare.network/ftso"
    },
    {
        "title": "Decentralized Insurance Payout System",
        "description": "Trigger insurance payouts based on FDC attestations from weather or logistics APIs.",
        "features": ["FDC"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Attested Online Learning Certificate",
        "description": "Verify course completion via FDC from platforms like Coursera and mint NFTs as certificates.",
        "features": ["FDC", "NFT"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Social Proof-of-Engagement App",
        "description": "Use FDC to confirm user engagement across platforms (likes, comments) for token rewards.",
        "features": ["FDC", "Web2 Integration"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Cross-Border P2P Payment Validator",
        "description": "Use FAssets for stablecoin transfer and FTSO for exchange rate validation in real time.",
        "features": ["FAssets", "FTSO"],
        "link": "https://docs.flare.network/fassets"
    },
    {
        "title": "Proof-of-News Source",
        "description": "Fetch and attest the original source of news articles using FDC for media transparency.",
        "features": ["FDC"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Tokenized Talent Marketplace",
        "description": "Verify freelance experience with GitHub or Upwork via FDC and issue tokens based on merit.",
        "features": ["FDC", "Token Gating"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "NFT Rental Protocol",
        "description": "Let users rent NFTs and use FAssets to collateralize them during the rental period.",
        "features": ["FAssets", "Smart Contracts"],
        "link": "https://docs.flare.network/fassets"
    },
    {
        "title": "Podcast Indexing & Verification Tool",
        "description": "Attest podcast uploads and metadata from Apple/Spotify APIs using FDC.",
        "features": ["FDC"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Sports Betting Oracle",
        "description": "Use FDC to fetch real-time game scores and FTSO to provide odds for decentralized betting.",
        "features": ["FDC", "FTSO"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "YouTube View Token Gating",
        "description": "Use FDC to attest YouTube view counts to unlock gated token rewards.",
        "features": ["FDC"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Weather Derivatives",
        "description": "Create financial instruments that pay out based on FDC weather data attestations for farming insurance.",
        "features": ["FDC", "DeFi"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Cross-Chain Bridge Monitor",
        "description": "Track and verify bridge transactions using FTSO price feeds and FDC attestations for security.",
        "features": ["FTSO", "FDC", "Cross-chain"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Automated Trading Bot Verifier",
        "description": "Use FDC to attest trading performance from centralized exchanges for reputation scoring.",
        "features": ["FDC", "DeFi"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Identity Verification",
        "description": "Create a system using FDC to verify identity documents and social media accounts for KYC.",
        "features": ["FDC", "Identity"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Real Estate Tokenization Platform",
        "description": "Use FTSO to get real-time property values and FAssets for fractional ownership tokens.",
        "features": ["FTSO", "FAssets"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized Crowdfunding with Milestones",
        "description": "Release funds automatically when FDC attests milestone completion from project management tools.",
        "features": ["FDC", "Smart Contracts"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Supply Chain Transparency Tracker",
        "description": "Use FDC to verify shipment data and product authenticity from logistics APIs.",
        "features": ["FDC"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Music Royalty Distribution",
        "description": "Distribute royalties based on FDC-attested streaming data from Spotify and Apple Music.",
        "features": ["FDC", "NFT"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Dynamic NFT Collections",
        "description": "Create NFTs that change based on FTSO price feeds or FDC external data attestations.",
        "features": ["FTSO", "FDC", "NFT"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized Credit Scoring",
        "description": "Build credit scores using FDC to attest payment history from traditional financial systems.",
        "features": ["FDC", "DeFi"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Gaming Achievement Verifier",
        "description": "Verify gaming achievements from Steam, PlayStation, or Xbox using FDC for token rewards.",
        "features": ["FDC", "Gaming"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Energy Trading",
        "description": "Trade renewable energy credits using FTSO for pricing and FDC for energy production verification.",
        "features": ["FTSO", "FDC"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Automated Compliance Monitor",
        "description": "Monitor regulatory compliance using FDC to attest data from government APIs and databases.",
        "features": ["FDC", "Enterprise"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Academic Credentials",
        "description": "Verify academic degrees and certifications using FDC from university and certification APIs.",
        "features": ["FDC", "Education"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Dynamic Yield Farming Protocol",
        "description": "Adjust farming rewards based on FTSO price data and external market conditions via FDC.",
        "features": ["FTSO", "FDC", "DeFi"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized Patent Tracker",
        "description": "Track patent applications and approvals using FDC to attest data from patent office APIs.",
        "features": ["FDC", "IP"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Insurance Pool",
        "description": "Create insurance pools that pay out based on FDC-attested smart contract exploit data.",
        "features": ["FDC", "DeFi"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Event Ticketing",
        "description": "Create event tickets using NFTs with dynamic pricing based on FTSO demand algorithms.",
        "features": ["FTSO", "NFT"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Reputation-Based Lending",
        "description": "Provide loans based on FDC-attested social media reputation and engagement metrics.",
        "features": ["FDC", "DeFi"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Bug Bounty Platform",
        "description": "Verify bug reports using FDC to attest code vulnerability data from security scanning tools.",
        "features": ["FDC", "Security"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Cross-Platform Gaming Leaderboard",
        "description": "Aggregate gaming scores across platforms using FDC and reward top players with tokens.",
        "features": ["FDC", "Gaming"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Health Data Marketplace",
        "description": "Trade anonymized health data using FDC to verify data authenticity from wearable devices.",
        "features": ["FDC", "Healthcare"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Automated Market Making with Oracles",
        "description": "Build AMM pools that adjust spreads based on FTSO volatility data and market conditions.",
        "features": ["FTSO", "DeFi"],
        "link": "https://docs.flare.network/ftso"
    },
    {
        "title": "Decentralized Job Skills Verification",
        "description": "Verify professional skills using FDC to attest certifications from LinkedIn and professional platforms.",
        "features": ["FDC", "HR"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart City Data Monetization",
        "description": "Monetize city data like traffic patterns using FDC attestations for urban planning tokens.",
        "features": ["FDC", "IoT"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Freelancer Escrow",
        "description": "Hold project payments in escrow and release based on FDC-attested milestone completions.",
        "features": ["FDC", "Smart Contracts"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Dynamic Stablecoin Basket",
        "description": "Create a stablecoin backed by multiple assets with weights adjusted by FTSO price feeds.",
        "features": ["FTSO", "FAssets", "DeFi"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized Research Paper Verification",
        "description": "Verify academic paper citations and peer review status using FDC from academic databases.",
        "features": ["FDC", "Academia"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Prediction Market with External Data",
        "description": "Create prediction markets that resolve using FDC attestations from news APIs and data sources.",
        "features": ["FDC", "DeFi"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Content Moderation",
        "description": "Moderate content across platforms using FDC to attest moderation decisions for consistency.",
        "features": ["FDC", "Social"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Code Quality Scorer",
        "description": "Score smart contracts using FDC to attest code analysis results from security audit tools.",
        "features": ["FDC", "Security"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Inventory Management",
        "description": "Track inventory levels using FDC to attest stock data from ERP systems for supply chain finance.",
        "features": ["FDC", "Supply Chain"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Cross-Exchange Arbitrage Bot",
        "description": "Execute arbitrage opportunities using FTSO price feeds across multiple DEXs and CEXs.",
        "features": ["FTSO", "DeFi"],
        "link": "https://docs.flare.network/ftso"
    },
    {
        "title": "Decentralized Performance Marketing",
        "description": "Pay for marketing performance using FDC to attest conversion data from analytics platforms.",
        "features": ["FDC", "Marketing"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Charity Donation Tracker",
        "description": "Track charity impact using FDC to attest spending and outcome data for transparent donations.",
        "features": ["FDC", "Social Good"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Video Game Item Trading",
        "description": "Trade in-game items across games using FDC to verify item ownership and rarity.",
        "features": ["FDC", "Gaming", "NFT"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Dynamic Liquidity Mining Rewards",
        "description": "Adjust liquidity mining rewards based on FTSO price volatility and pool utilization metrics.",
        "features": ["FTSO", "DeFi"],
        "link": "https://docs.flare.network/ftso"
    },
    {
        "title": "Decentralized Code Repository Monetization",
        "description": "Monetize open source contributions using FDC to attest GitHub activity and code quality.",
        "features": ["FDC", "Development"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Upgrade Governance",
        "description": "Govern contract upgrades using FDC to attest community sentiment from social media platforms.",
        "features": ["FDC", "Governance"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Asset Valuation Service",
        "description": "Provide asset valuations using FTSO price feeds and FDC external appraisal data.",
        "features": ["FTSO", "FDC", "Finance"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Cross-Chain Yield Aggregator",
        "description": "Aggregate yields across chains using FTSO for price data and FAssets for cross-chain positions.",
        "features": ["FTSO", "FAssets", "DeFi"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized Influencer Marketing Platform",
        "description": "Match brands with influencers using FDC to verify follower counts and engagement metrics.",
        "features": ["FDC", "Marketing"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Gas Optimization Tracker",
        "description": "Track gas optimizations using FDC to attest transaction cost improvements over time.",
        "features": ["FDC", "Development"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Domain Reputation System",
        "description": "Score domain reputation using FDC to attest security scans and blacklist status.",
        "features": ["FDC", "Security"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Dynamic NFT Metadata Updates",
        "description": "Update NFT metadata automatically using FTSO price triggers and FDC external event attestations.",
        "features": ["FTSO", "FDC", "NFT"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized API Usage Monetization",
        "description": "Monetize API usage using FDC to attest API call data and automatically distribute payments.",
        "features": ["FDC", "API"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Investment Portfolio Rebalancer",
        "description": "Rebalance portfolios automatically using FTSO price data and risk management algorithms.",
        "features": ["FTSO", "DeFi"],
        "link": "https://docs.flare.network/ftso"
    },
    {
        "title": "Decentralized Email Reputation Scoring",
        "description": "Score email sender reputation using FDC to attest delivery rates and spam reports.",
        "features": ["FDC", "Communication"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Cross-Platform Social Graph",
        "description": "Build unified social graphs using FDC to attest connections across multiple social platforms.",
        "features": ["FDC", "Social"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Quality Assurance Testing",
        "description": "Verify software testing results using FDC to attest test coverage and bug discovery data.",
        "features": ["FDC", "Quality Assurance"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Security Insurance",
        "description": "Provide insurance based on FDC-attested security audit scores and historical exploit data.",
        "features": ["FDC", "Security", "DeFi"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Travel Reputation System",
        "description": "Build traveler reputation using FDC to attest reviews from booking platforms and airlines.",
        "features": ["FDC", "Travel"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Dynamic Token Burn Mechanism",
        "description": "Burn tokens automatically based on FTSO price thresholds and FDC market sentiment data.",
        "features": ["FTSO", "FDC", "Tokenomics"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized Podcast Analytics Platform",
        "description": "Verify podcast download and engagement metrics using FDC from hosting platforms.",
        "features": ["FDC", "Media"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Version Control",
        "description": "Track contract versions using FDC to attest code changes and deployment history.",
        "features": ["FDC", "Development"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Customer Support Reputation",
        "description": "Score customer support quality using FDC to attest satisfaction surveys and response times.",
        "features": ["FDC", "Customer Service"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Cross-Chain DEX Aggregator",
        "description": "Aggregate DEX liquidity across chains using FTSO for pricing and FAssets for bridging.",
        "features": ["FTSO", "FAssets", "DeFi"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized Software License Verification",
        "description": "Verify software license compliance using FDC to attest usage data from monitoring tools.",
        "features": ["FDC", "Compliance"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Interaction Analytics",
        "description": "Analyze contract interactions using FDC to attest user behavior data for optimization insights.",
        "features": ["FDC", "Analytics"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Subscription Box Curation",
        "description": "Curate subscription boxes using FDC to attest customer preferences and feedback data.",
        "features": ["FDC", "E-commerce"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Dynamic Staking Rewards Optimizer",
        "description": "Optimize staking rewards using FTSO to track validator performance and network conditions.",
        "features": ["FTSO", "Staking"],
        "link": "https://docs.flare.network/ftso"
    },
    {
        "title": "Decentralized Code Review Incentives",
        "description": "Incentivize code reviews using FDC to attest review quality and bug discovery metrics.",
        "features": ["FDC", "Development"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Performance Monitor",
        "description": "Monitor contract performance using FDC to attest execution times and gas efficiency data.",
        "features": ["FDC", "Performance"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Market Research Platform",
        "description": "Conduct market research using FDC to attest survey responses and demographic data.",
        "features": ["FDC", "Research"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Cross-Platform Content Syndication",
        "description": "Syndicate content across platforms using FDC to attest publication status and reach metrics.",
        "features": ["FDC", "Content"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Webhook Reliability Tracker",
        "description": "Track webhook reliability using FDC to attest delivery success rates and response times.",
        "features": ["FDC", "Infrastructure"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Upgrade Impact Analyzer",
        "description": "Analyze upgrade impacts using FDC to attest performance changes and user adoption metrics.",
        "features": ["FDC", "Development"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized App Store Analytics",
        "description": "Track app performance using FDC to attest download counts and user ratings from app stores.",
        "features": ["FDC", "Mobile"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Dynamic Fee Adjustment Protocol",
        "description": "Adjust protocol fees based on FTSO price volatility and FDC network usage attestations.",
        "features": ["FTSO", "FDC", "Protocol"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized Database Integrity Checker",
        "description": "Verify database integrity using FDC to attest backup status and consistency checks.",
        "features": ["FDC", "Database"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Adoption Tracker",
        "description": "Track contract adoption using FDC to attest integration status across different platforms.",
        "features": ["FDC", "Analytics"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized Error Monitoring Service",
        "description": "Monitor application errors using FDC to attest error rates and resolution times.",
        "features": ["FDC", "Monitoring"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Cross-Chain Asset Price Discovery",
        "description": "Discover asset prices across chains using FTSO feeds and cross-validate with FDC external sources.",
        "features": ["FTSO", "FDC", "Price Discovery"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized Server Uptime Verification",
        "description": "Verify server uptime using FDC to attest monitoring data from multiple uptime services.",
        "features": ["FDC", "Infrastructure"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Gas Fee Predictor",
        "description": "Predict gas fees using FTSO network congestion data and historical transaction patterns.",
        "features": ["FTSO", "Gas Optimization"],
        "link": "https://docs.flare.network/ftso"
    },
    {
        "title": "Decentralized Browser Extension Analytics",
        "description": "Track extension usage using FDC to attest installation data and user interaction metrics.",
        "features": ["FDC", "Browser Extensions"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Dynamic Cross-Chain Bridge Fees",
        "description": "Adjust bridge fees dynamically using FTSO price data and FDC network congestion attestations.",
        "features": ["FTSO", "FDC", "Cross-chain"],
        "link": "https://docs.flare.network"
    },
    {
        "title": "Decentralized API Rate Limiting",
        "description": "Implement fair rate limiting using FDC to attest API usage patterns and user behavior.",
        "features": ["FDC", "API Management"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Security Score Aggregator",
        "description": "Aggregate security scores using FDC to attest audit results from multiple security firms.",
        "features": ["FDC", "Security"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized CDN Performance Monitor",
        "description": "Monitor CDN performance using FDC to attest load times and availability from global endpoints.",
        "features": ["FDC", "CDN"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Cross-Platform Gaming Tournament Manager",
        "description": "Manage tournaments using FDC to attest match results and player statistics across gaming platforms.",
        "features": ["FDC", "Gaming", "Esports"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Decentralized SSL Certificate Monitor",
        "description": "Monitor SSL certificates using FDC to attest expiration dates and security ratings.",
        "features": ["FDC", "Security"],
        "link": "https://docs.flare.network/attestation"
    },
    {
        "title": "Smart Contract Library Usage Tracker",
        "description": "Track library usage using FDC to attest import statistics and version adoption across projects.",
        "features": ["FDC", "Development"],
        "link": "https://docs.flare.network/attestation"
    }
];

// Application state
let currentIdeaIndex = null;
let currentIdea = null;
let isGenerating = false;

// DOM elements
const generateBtn = document.getElementById('generateBtn');
const ideaContainer = document.getElementById('ideaContainer');
const architecturePlaceholder = document.getElementById('architecturePlaceholder');
const viewArchitectureBtn = document.getElementById('viewArchitectureBtn');
const modal = document.getElementById('architectureModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

/**
 * Initialize app event listeners and setup
 */
function initializeApp() {
    // Add event listener to generate button
    generateBtn.addEventListener('click', handleGenerateIdea);
    
    // Add event listener to architecture button
    if (viewArchitectureBtn) {
        viewArchitectureBtn.addEventListener('click', handleViewArchitecture);
    }
    
    // Add event listeners for modal
    if (closeModal) {
        closeModal.addEventListener('click', closeArchitectureModal);
    }
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeArchitectureModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeArchitectureModal();
        }
    });
    
    // Add keyboard support for accessibility
    document.addEventListener('keydown', handleKeydown);
    
    // Preload any necessary resources
    preloadResources();
    
    console.log('Flare Idea Generator initialized successfully');
}

/**
 * Handle the main "Generate Idea" button click
 */
async function handleGenerateIdea() {
    if (isGenerating) return;
    
    try {
        isGenerating = true;
        updateGenerateButton(true);
        
        // Add a slight delay for better UX
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const randomIdea = getRandomIdea();
        currentIdea = randomIdea;
        displayIdea(randomIdea);
        
        // Show architecture placeholder after first idea generation
        showArchitecturePlaceholder();
        
    } catch (error) {
        console.error('Error generating idea:', error);
        showErrorMessage('Failed to generate idea. Please try again.');
    } finally {
        isGenerating = false;
        updateGenerateButton(false);
    }
}

/**
 * Get a random idea from the predefined list, ensuring no consecutive duplicates
 */
function getRandomIdea() {
    let randomIndex;
    
    // Ensure we don't get the same idea twice in a row
    do {
        randomIndex = Math.floor(Math.random() * projectIdeas.length);
    } while (randomIndex === currentIdeaIndex && projectIdeas.length > 1);
    
    currentIdeaIndex = randomIndex;
    return projectIdeas[randomIndex];
}

/**
 * Display the selected idea in a card format
 */
function displayIdea(idea) {
    const ideaCard = createIdeaCard(idea);
    
    // Replace current content with new idea card
    ideaContainer.innerHTML = '';
    ideaContainer.appendChild(ideaCard);
    
    // Animate card entrance
    requestAnimationFrame(() => {
        ideaCard.style.opacity = '1';
        ideaCard.style.transform = 'translateY(0)';
    });
}

/**
 * Create HTML element for idea card
 */
function createIdeaCard(idea) {
    const card = document.createElement('div');
    card.className = 'idea-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    card.innerHTML = `
        <div class="idea-header">
            <h2 class="idea-title">${escapeHtml(idea.title)}</h2>
            <p class="idea-description">${escapeHtml(idea.description)}</p>
        </div>
        
        <div class="idea-features">
            <span class="features-label">
                <i class="fas fa-cogs"></i>
                Flare Features:
            </span>
            <div class="features-list">
                ${idea.features.map(feature => `
                    <span class="feature-tag">
                        <i class="fas fa-tag"></i>
                        ${escapeHtml(feature)}
                    </span>
                `).join('')}
            </div>
        </div>
        
        <div class="idea-footer">
            <a href="${escapeHtml(idea.link)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="idea-link">
                <i class="fas fa-external-link-alt"></i>
                View Documentation
            </a>
        </div>
    `;
    
    return card;
}

/**
 * Update the generate button state (loading/normal)
 */
function updateGenerateButton(loading) {
    if (loading) {
        generateBtn.disabled = true;
        generateBtn.innerHTML = `
            <div class="loading"></div>
            Generating...
        `;
    } else {
        generateBtn.disabled = false;
        generateBtn.innerHTML = `
            <i class="fas fa-lightbulb"></i>
            Generate Idea
        `;
    }
}

/**
 * Show the architecture placeholder button after first idea generation
 */
function showArchitecturePlaceholder() {
    if (architecturePlaceholder && architecturePlaceholder.style.display === 'none') {
        architecturePlaceholder.style.display = 'flex';
        architecturePlaceholder.style.opacity = '0';
        
        // Animate placeholder appearance
        requestAnimationFrame(() => {
            architecturePlaceholder.style.transition = 'opacity 0.3s ease-out';
            architecturePlaceholder.style.opacity = '1';
        });
    }
}

/**
 * Handle view architecture button click
 */
function handleViewArchitecture() {
    if (!currentIdea) {
        showErrorMessage('Please generate an idea first to view its architecture.');
        return;
    }
    
    console.log('View Architecture clicked for:', currentIdea.title);
    showArchitectureModal(currentIdea);
}

/**
 * Handle keyboard shortcuts for accessibility
 */
function handleKeydown(event) {
    // Generate idea with spacebar when focused on generate button
    if (event.code === 'Space' && document.activeElement === generateBtn) {
        event.preventDefault();
        handleGenerateIdea();
    }
    
    // Generate idea with Enter key anywhere in the document (when not focused on links)
    if (event.code === 'Enter' && 
        !isGenerating && 
        document.activeElement.tagName !== 'A' && 
        document.activeElement.tagName !== 'BUTTON') {
        handleGenerateIdea();
    }
}

/**
 * Show error message to user
 */
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        background: #f44336;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        margin: 20px 0;
        text-align: center;
        animation: slideIn 0.3s ease-out;
    `;
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        ${escapeHtml(message)}
    `;
    
    ideaContainer.appendChild(errorDiv);
    
    // Remove error message after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

/**
 * Show info message to user
 */
function showInfoMessage(message) {
    const infoDiv = document.createElement('div');
    infoDiv.className = 'info-message';
    infoDiv.style.cssText = `
        background: #2196f3;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        margin: 20px 0;
        text-align: center;
        animation: slideIn 0.3s ease-out;
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        max-width: 400px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;
    infoDiv.innerHTML = `
        <i class="fas fa-info-circle"></i>
        ${escapeHtml(message)}
    `;
    
    document.body.appendChild(infoDiv);
    
    // Remove info message after 4 seconds
    setTimeout(() => {
        if (infoDiv.parentNode) {
            infoDiv.remove();
        }
    }, 4000);
}

/**
 * Escape HTML to prevent XSS attacks
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Preload any necessary resources
 */
function preloadResources() {
    // Preload Font Awesome icons if needed
    const iconClasses = [
        'fas fa-lightbulb',
        'fas fa-bolt',
        'fas fa-rocket',
        'fas fa-cogs',
        'fas fa-tag',
        'fas fa-external-link-alt',
        'fas fa-sitemap',
        'fas fa-book',
        'fas fa-globe',
        'fab fa-github'
    ];
    
    // Create hidden elements to preload icons
    iconClasses.forEach(iconClass => {
        const icon = document.createElement('i');
        icon.className = iconClass;
        icon.style.cssText = 'position: absolute; left: -9999px; opacity: 0;';
        document.body.appendChild(icon);
    });
    
    console.log('Resources preloaded successfully');
}

/**
 * Show architecture modal with project details
 */
function showArchitectureModal(idea) {
    modalTitle.textContent = `Architecture: ${idea.title}`;
    modalBody.innerHTML = generateArchitectureContent(idea);
    modal.style.display = 'block';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

/**
 * Close architecture modal
 */
function closeArchitectureModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/**
 * Generate architecture content based on project features
 */
function generateArchitectureContent(idea) {
    const architectureTemplate = getArchitectureTemplate(idea.features);
    
    return `
        <div class="architecture-description">
            <h3>
                <i class="fas fa-info-circle"></i>
                Architecture Overview
            </h3>
            <p>${architectureTemplate.description}</p>
        </div>
        
        <div class="architecture-diagram">
            ${architectureTemplate.diagram}
        </div>
        
        <div class="architecture-steps">
            <h4>
                <i class="fas fa-list-ol"></i>
                Implementation Steps
            </h4>
            <ol class="steps-list">
                ${architectureTemplate.steps.map((step, index) => `
                    <li>
                        <span class="step-number">${index + 1}</span>
                        <span>${step}</span>
                    </li>
                `).join('')}
            </ol>
        </div>
        
        <div class="architecture-tech-stack">
            <h4>
                <i class="fas fa-layer-group"></i>
                Technology Stack
            </h4>
            <div class="tech-grid">
                ${Object.entries(architectureTemplate.techStack).map(([category, technologies]) => `
                    <div class="tech-category">
                        <h5>${category}</h5>
                        <ul class="tech-list">
                            ${technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/**
 * Get architecture template based on project features
 */
function getArchitectureTemplate(features) {
    const hasFlareData = features.includes('FDC') || features.includes('Attestation');
    const hasPriceFeeds = features.includes('FTSO');
    const hasCrossChain = features.includes('FAssets') || features.includes('Cross-chain');
    const isNFT = features.includes('NFT');
    const isDeFi = features.includes('DeFi');
    
    // Generate diagram based on features
    let diagram = generateDiagram(features);
    
    // Generate description
    let description = `This ${isNFT ? 'NFT-based' : isDeFi ? 'DeFi' : 'dApp'} architecture leverages `;
    const flareFeatures = [];
    if (hasFlareData) flareFeatures.push('Flare Data Connector (FDC) for external data attestations');
    if (hasPriceFeeds) flareFeatures.push('Flare Time Series Oracle (FTSO) for real-time price feeds');
    if (hasCrossChain) flareFeatures.push('FAssets for cross-chain asset management');
    description += flareFeatures.join(', ') + ' to create a secure and data-rich application.';
    
    // Generate implementation steps
    const steps = [
        'Set up Flare development environment and connect to testnet',
        ...(hasFlareData ? ['Configure FDC attestation providers and data sources'] : []),
        ...(hasPriceFeeds ? ['Integrate FTSO price feed contracts for real-time data'] : []),
        ...(hasCrossChain ? ['Implement FAssets integration for cross-chain functionality'] : []),
        'Deploy smart contracts with proper access controls and security measures',
        'Build frontend interface with Web3 wallet integration',
        'Implement data validation and error handling mechanisms',
        'Test thoroughly on Flare testnet before mainnet deployment',
        'Deploy to Flare mainnet and monitor performance'
    ];
    
    // Generate tech stack
    const techStack = {
        'Blockchain': ['Flare Network', 'Solidity', 'Web3.js/Ethers.js'],
        'Smart Contracts': [
            ...(hasFlareData ? ['FDC Contracts'] : []),
            ...(hasPriceFeeds ? ['FTSO Contracts'] : []),
            ...(hasCrossChain ? ['FAssets Contracts'] : []),
            'OpenZeppelin'
        ],
        'Frontend': ['React/Vue/Angular', 'TypeScript', 'Tailwind CSS'],
        'Backend': ['Node.js', 'Express', 'MongoDB/PostgreSQL'],
        'Development': ['Hardhat/Truffle', 'IPFS', 'Git'],
        'Testing': ['Mocha/Jest', 'Ganache', 'Flare Testnet']
    };
    
    if (isNFT) {
        techStack['NFT Standards'] = ['ERC-721', 'ERC-1155', 'Metadata Standards'];
    }
    
    if (isDeFi) {
        techStack['DeFi Protocols'] = ['Uniswap V3', 'Compound', 'Aave'];
    }
    
    return {
        description,
        diagram,
        steps,
        techStack
    };
}

/**
 * Generate SVG diagram based on features
 */
function generateDiagram(features) {
    const hasFlareData = features.includes('FDC') || features.includes('Attestation');
    const hasPriceFeeds = features.includes('FTSO');
    const hasCrossChain = features.includes('FAssets') || features.includes('Cross-chain');
    
    return `
        <svg class="diagram-svg" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="flareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#ff5722;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2196f3;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1976d2;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Background -->
            <rect width="800" height="400" fill="#1a1a1a" stroke="#404040" stroke-width="2" rx="12"/>
            
            <!-- Frontend Layer -->
            <rect x="50" y="50" width="150" height="80" fill="url(#dataGradient)" rx="8"/>
            <text x="125" y="85" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">Frontend dApp</text>
            <text x="125" y="105" text-anchor="middle" fill="white" font-family="Arial" font-size="10">React/Vue/Angular</text>
            
            <!-- Smart Contract Layer -->
            <rect x="300" y="50" width="200" height="80" fill="url(#flareGradient)" rx="8"/>
            <text x="400" y="85" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">Smart Contracts</text>
            <text x="400" y="105" text-anchor="middle" fill="white" font-family="Arial" font-size="10">Flare Network</text>
            
            <!-- Flare Data Connector -->
            ${hasFlareData ? `
            <rect x="50" y="200" width="140" height="60" fill="url(#flareGradient)" rx="8"/>
            <text x="120" y="225" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">FDC</text>
            <text x="120" y="245" text-anchor="middle" fill="white" font-family="Arial" font-size="9">Data Attestation</text>
            ` : ''}
            
            <!-- FTSO Price Feeds -->
            ${hasPriceFeeds ? `
            <rect x="220" y="200" width="140" height="60" fill="url(#flareGradient)" rx="8"/>
            <text x="290" y="225" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">FTSO</text>
            <text x="290" y="245" text-anchor="middle" fill="white" font-family="Arial" font-size="9">Price Oracles</text>
            ` : ''}
            
            <!-- FAssets -->
            ${hasCrossChain ? `
            <rect x="390" y="200" width="140" height="60" fill="url(#flareGradient)" rx="8"/>
            <text x="460" y="225" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">FAssets</text>
            <text x="460" y="245" text-anchor="middle" fill="white" font-family="Arial" font-size="9">Cross-Chain</text>
            ` : ''}
            
            <!-- External Data Sources -->
            <rect x="600" y="50" width="150" height="80" fill="#2a2a2a" stroke="#666" stroke-width="2" rx="8"/>
            <text x="675" y="85" text-anchor="middle" fill="#ccc" font-family="Arial" font-size="14" font-weight="bold">External APIs</text>
            <text x="675" y="105" text-anchor="middle" fill="#ccc" font-family="Arial" font-size="10">Web2 Data Sources</text>
            
            <!-- Database -->
            <rect x="600" y="200" width="150" height="60" fill="#2a2a2a" stroke="#666" stroke-width="2" rx="8"/>
            <text x="675" y="225" text-anchor="middle" fill="#ccc" font-family="Arial" font-size="12" font-weight="bold">Database</text>
            <text x="675" y="245" text-anchor="middle" fill="#ccc" font-family="Arial" font-size="9">Off-chain Storage</text>
            
            <!-- Arrows -->
            <!-- Frontend to Smart Contract -->
            <line x1="200" y1="90" x2="300" y2="90" stroke="#ff6b35" stroke-width="3" marker-end="url(#arrowhead)"/>
            
            <!-- Smart Contract to External -->
            <line x1="500" y1="90" x2="600" y2="90" stroke="#ff6b35" stroke-width="3" marker-end="url(#arrowhead)"/>
            
            ${hasFlareData ? `
            <!-- FDC Connection -->
            <line x1="120" y1="200" x2="120" y2="160" stroke="#ff6b35" stroke-width="2"/>
            <line x1="120" y1="160" x2="350" y2="130" stroke="#ff6b35" stroke-width="2" marker-end="url(#arrowhead)"/>
            ` : ''}
            
            ${hasPriceFeeds ? `
            <!-- FTSO Connection -->
            <line x1="290" y1="200" x2="290" y2="160" stroke="#ff6b35" stroke-width="2"/>
            <line x1="290" y1="160" x2="380" y2="130" stroke="#ff6b35" stroke-width="2" marker-end="url(#arrowhead)"/>
            ` : ''}
            
            ${hasCrossChain ? `
            <!-- FAssets Connection -->
            <line x1="460" y1="200" x2="460" y2="160" stroke="#ff6b35" stroke-width="2"/>
            <line x1="460" y1="160" x2="420" y2="130" stroke="#ff6b35" stroke-width="2" marker-end="url(#arrowhead)"/>
            ` : ''}
            
            <!-- Arrow marker definition -->
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ff6b35"/>
                </marker>
            </defs>
            
            <!-- Labels -->
            <text x="250" y="105" text-anchor="middle" fill="#ccc" font-family="Arial" font-size="10">Web3 Calls</text>
            <text x="550" y="105" text-anchor="middle" fill="#ccc" font-family="Arial" font-size="10">Data Fetch</text>
        </svg>
    `;
}

/**
 * Utility function to validate project ideas data
 */
function validateProjectIdeas() {
    return projectIdeas.every(idea => 
        idea.title && 
        idea.description && 
        idea.features && 
        Array.isArray(idea.features) && 
        idea.link
    );
}

// Validate data integrity on load
if (!validateProjectIdeas()) {
    console.error('Project ideas data validation failed');
}

// Export functions for testing (if in a testing environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getRandomIdea,
        createIdeaCard,
        validateProjectIdeas,
        escapeHtml
    };
}
