let fileContent = '';
let processedWords = [];

const fileInput = document.getElementById('textFile');
const optionsSection = document.getElementById('optionsSection');
const rearrangeBtn = document.getElementById('rearrangeBtn');
const resultsSection = document.getElementById('resultsSection');
const wordDisplay = document.getElementById('wordDisplay');
const statsDisplay = document.getElementById('statsDisplay');
const resultsHeader = document.getElementById('resultsHeader');

fileInput.addEventListener('change', handleFileUpload);
rearrangeBtn.addEventListener('click', rearrangeWords);

// Add event listeners for radio buttons
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateRadioStyles);
});

// Initialize radio button styles
updateRadioStyles();

function updateRadioStyles() {
    document.querySelectorAll('.radio-option').forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        if (radio.checked) {
            option.classList.add('checked');
        } else {
            option.classList.remove('checked');
        }
    });
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    console.log('File selected:', file); // Debug log
    
    if (file) {
        if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                fileContent = e.target.result;
                console.log('File content loaded, length:', fileContent.length); // Debug log
                optionsSection.style.display = 'block';
                resultsSection.style.display = 'none';
                rearrangeBtn.disabled = false;
            };
            reader.onerror = function(e) {
                console.error('Error reading file:', e);
                alert('Error reading file. Please try again.');
            };
            reader.readAsText(file);
        } else {
            alert('Please select a valid .txt file');
        }
    }
}

function processText() {
    if (!fileContent) return;

    // Clean and split text into words
    const words = fileContent
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
        .split(/\s+/)
        .filter(word => word.length > 0);

    const displayType = document.querySelector('input[name="displayType"]:checked').value;

    if (displayType === 'allWords') {
        // Return all words alphabetized
        processedWords = words.sort();
    } else {
        // Count frequencies and return unique words with counts
        const wordFreq = {};
        words.forEach(word => {
            wordFreq[word] = (wordFreq[word] || 0) + 1;
        });

        processedWords = Object.entries(wordFreq)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([word, freq]) => ({ word, freq }));
    }
}

function rearrangeWords() {
    if (!fileContent) {
        alert('Please upload a text file first');
        return;
    }

    console.log('Processing text, content length:', fileContent.length); // Debug log
    processText();

    const arrangement = document.querySelector('input[name="arrangement"]:checked').value;
    const displayType = document.querySelector('input[name="displayType"]:checked').value;
    
    console.log('Selected options:', { arrangement, displayType }); // Debug log

    // Clear previous results
    wordDisplay.innerHTML = '';
    wordDisplay.className = `word-display ${arrangement}`;

    if (displayType === 'allWords') {
        // Display all words
        processedWords.forEach(word => {
            const wordElement = document.createElement('span');
            wordElement.className = 'word-item';
            wordElement.textContent = word;
            wordDisplay.appendChild(wordElement);
        });

        resultsHeader.textContent = `All Words (${processedWords.length} total)`;
        statsDisplay.textContent = `Total words in corpus: ${processedWords.length}`;
    } else {
        // Display words with frequency
        processedWords.forEach(({ word, freq }) => {
            const wordElement = document.createElement('span');
            wordElement.className = 'word-item';
            wordElement.innerHTML = `${word}<span class="frequency">(${freq})</span>`;
            wordDisplay.appendChild(wordElement);
        });

        resultsHeader.textContent = `Unique Words with Frequency (${processedWords.length} unique)`;
        const totalWords = processedWords.reduce((sum, { freq }) => sum + freq, 0);
        statsDisplay.textContent = `Unique words: ${processedWords.length} | Total words: ${totalWords}`;
    }

    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}