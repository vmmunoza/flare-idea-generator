/**
 * Flare Idea Generator (FIG)
 * A frontend application to help blockchain developers discover innovative dApp ideas for Flare Network
 */

// Embedded JSON data with 20 predefined blockchain project ideas
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
    }
];

// Application state
let currentIdeaIndex = null;
let isGenerating = false;

// DOM elements
const generateBtn = document.getElementById('generateBtn');
const ideaContainer = document.getElementById('ideaContainer');
const architecturePlaceholder = document.getElementById('architecturePlaceholder');
const viewArchitectureBtn = document.getElementById('viewArchitectureBtn');

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
    
    // Add event listener to placeholder architecture button (for future implementation)
    if (viewArchitectureBtn) {
        viewArchitectureBtn.addEventListener('click', handleViewArchitecture);
    }
    
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
 * Handle view architecture button click (placeholder for future implementation)
 */
function handleViewArchitecture() {
    // This is a placeholder for future architecture diagram functionality
    console.log('View Architecture clicked - placeholder for future implementation');
    
    // Show user feedback
    showInfoMessage('Architecture diagrams coming soon! This feature will be added in a future update.');
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
