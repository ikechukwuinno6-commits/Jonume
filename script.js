// --- 1. Light and Dark Theme Variable Switcher ---
const themeSwitchBtn = document.getElementById('themeSwitchBtn');
const htmlDocumentElement = document.documentElement;

themeSwitchBtn.addEventListener('click', () => {
    const activeTheme = htmlDocumentElement.getAttribute('data-theme');
    const targetTheme = activeTheme === 'dark' ? 'light' : 'dark';
    htmlDocumentElement.setAttribute('data-theme', targetTheme);
});

// --- 2. Mobile Navbar Responsive Toggle Drawer Control ---
const drawerToggleBtn = document.getElementById('drawerToggleBtn');
const navDrawerLinks = document.getElementById('navDrawer');

drawerToggleBtn.addEventListener('click', () => {
    navDrawerLinks.classList.toggle('drawer-active');
});

// Auto-retract drawer window layer upon tapping specific index action nodes
document.querySelectorAll('.nav-action-link').forEach(linkItem => {
    linkItem.addEventListener('click', () => {
        navDrawerLinks.classList.remove('drawer-active');
    });
});

// --- 3. App Concept 1: Photo-Vision Structural Tailor Engine ---
function initializeTailorCalculation() {
    const diagnosticOutputNode = document.getElementById('tailorMetricConsole');
    diagnosticOutputNode.innerText = "Connecting pixel scan array... reading canvas dimension offsets...";
    
    setTimeout(() => {
        diagnosticOutputNode.innerText = "Isolating visual height perspective variables... Done.";
    }, 1200);
    
    setTimeout(() => {
        const computedSimulatedHeight = (Math.random() * (1.92 - 1.58) + 1.58).toFixed(2);
        diagnosticOutputNode.innerText = `Calibrated Complete: Height matrix estimated at ${computedSimulatedHeight}m`;
    }, 2600);
}

// --- 4. App Concept 2: CineRoom Live Chatroom Message Broadcast Engine ---
function sendCoWatchChatMessage() {
    const chatInput = document.getElementById('streamMessageInput');
    const liveStreamChatPanel = document.getElementById('liveStreamChatPanel');
    
    if (chatInput.value.trim() !== "") {
        const userLineElement = document.createElement('div');
        userLineElement.classList.add('chat-msg-row');
        userLineElement.innerHTML = `<strong>You:</strong> ${sanitizeInputText(chatInput.value)}`;
        
        liveStreamChatPanel.appendChild(userLineElement);
        const processingMessage = chatInput.value.toLowerCase();
        chatInput.value = "";
        liveStreamChatPanel.scrollTop = liveStreamChatPanel.scrollHeight;
        
        // Automated response loop callback simulation
        setTimeout(() => {
            const systemLineElement = document.createElement('div');
            systemLineElement.classList.add('chat-msg-row', 'system');
            
            if (processingMessage.includes('stream') || processingMessage.includes('video')) {
                systemLineElement.innerHTML = `<span><strong>[CineServer]:</strong> Buffering status nominal. Frame synchronized.</span>`;
            } else {
                systemLineElement.innerHTML = `<span><strong>[CineServer]:</strong> Message index packet broadcasted successfully.</span>`;
            }
            
            liveStreamChatPanel.appendChild(systemLineElement);
            liveStreamChatPanel.scrollTop = liveStreamChatPanel.scrollHeight;
        }, 1200);
    }
}

function sanitizeInputText(rawText) {
    return rawText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// --- 5. App Concept 3: Decentralized Memorial Dictionary Interface ---
const staticFallenHeroesRegistry = [
    "Achilles of Greece",
    "Leonidas of Sparta",
    "Joan of Arc",
    "General Li Mu",
    "The Unknown Soldier"
];

function filterFallenHeroesIndex() {
    const query = document.getElementById('heroSearchFilterInput').value.toLowerCase();
    const outputMatchesList = document.getElementById('heroOutputMatchesList');
    outputMatchesList.innerHTML = "";
    
    if (query.trim() === "") return;
    
    const targetMatches = staticFallenHeroesRegistry.filter(heroName => 
        heroName.toLowerCase().includes(query)
    );
    
    targetMatches.forEach(matchedHero => {
        const entryListItem = document.createElement('li');
        entryListItem.innerText = `✦ ${matchedHero} (Index Verified)`;
        outputMatchesList.appendChild(entryListItem);
    });
    
    if (targetMatches.length === 0) {
        const entryListItem = document.createElement('li');
        entryListItem.innerText = "No structural entry matches located in database archive.";
        outputMatchesList.appendChild(entryListItem);
    }
}

// --- 6. Main Component Section: Live Creative Asset File Upload Logic ---
const artAssetFileInput = document.getElementById('artAssetFileInput');
const galleryMatrixDisplay = document.getElementById('galleryMatrixDisplay');

artAssetFileInput.addEventListener('change', function() {
    const selectionFile = this.files[0];
    if (selectionFile) {
        const fileStreamReader = new FileReader();
        
        fileStreamReader.onload = function(loadEvent) {
            const emptyGridFallback = document.getElementById('emptyGridFallback');
            if (emptyGridFallback) {
                emptyGridFallback.remove();
            }
            
            // Generate layout framework for user photo upload
            const frameContainer = document.createElement('div');
            frameContainer.classList.add('uploaded-art-frame');
            
            const rawImgElement = document.createElement('img');
            rawImgElement.src = loadEvent.target.result;
            rawImgElement.alt = "Dynamic Contributed Artwork Node Element";
            
            frameContainer.appendChild(rawImgElement);
            galleryMatrixDisplay.insertBefore(frameContainer, galleryMatrixDisplay.firstChild);
        };
        
        fileStreamReader.readAsDataURL(selectionFile);
    }
});
