const QUESTIONS_PER_ROUND = 6;
const STORAGE_PREFIX = 'daril-quiz-best-';

const CATEGORIES = {
    mix: { label: 'PARCOURS COMPLET', title: 'Un peu de tout' },
    culture: { label: 'CULTURE GÉNÉRALE', title: 'Culture générale' },
    science: { label: 'SCIENCES', title: 'Sciences' },
    digital: { label: 'NUMÉRIQUE', title: 'Numérique' }
};

const QUESTION_BANK = {
    culture: [
        {
            question: 'Quel est le plus grand océan de la planète ?',
            answers: ['L’océan Atlantique', 'L’océan Indien', 'L’océan Pacifique', 'L’océan Arctique'],
            correct: 2,
            explanation: 'Le Pacifique est le plus vaste océan terrestre. Il s’étend entre l’Asie, l’Océanie et les Amériques.'
        },
        {
            question: 'Quelle est la capitale du Canada ?',
            answers: ['Toronto', 'Ottawa', 'Montréal', 'Vancouver'],
            correct: 1,
            explanation: 'Ottawa est la capitale fédérale du Canada. Toronto est sa ville la plus peuplée.'
        },
        {
            question: 'Quelle monnaie utilise le Japon ?',
            answers: ['Le won', 'Le yuan', 'Le yen', 'Le baht'],
            correct: 2,
            explanation: 'La monnaie japonaise est le yen, dont le code international est JPY.'
        },
        {
            question: 'Que mesure une année-lumière ?',
            answers: ['Une durée', 'Une distance', 'Une vitesse', 'Une luminosité'],
            correct: 1,
            explanation: 'Une année-lumière est la distance parcourue par la lumière en une année, soit environ 9 460 milliards de kilomètres.'
        },
        {
            question: 'Quel pays est entièrement enclavé dans l’Afrique du Sud ?',
            answers: ['Le Lesotho', 'Le Botswana', 'Le Zimbabwe', 'La Namibie'],
            correct: 0,
            explanation: 'Le Lesotho est un État indépendant entièrement entouré par l’Afrique du Sud.'
        },
        {
            question: 'Quel instrument permet de mesurer la pression atmosphérique ?',
            answers: ['Un hygromètre', 'Un baromètre', 'Un anémomètre', 'Un thermomètre'],
            correct: 1,
            explanation: 'Le baromètre mesure la pression atmosphérique. Les météorologues l’utilisent notamment pour suivre son évolution.'
        },
        {
            question: 'Quel est le plus grand pays d’Amérique du Sud par sa superficie ?',
            answers: ['L’Argentine', 'Le Pérou', 'Le Brésil', 'La Colombie'],
            correct: 2,
            explanation: 'Le Brésil couvre près de la moitié du territoire sud-américain et partage une frontière avec presque tous ses voisins.'
        },
        {
            question: 'Dans quel pays se trouve la ville de Kyoto ?',
            answers: ['La Chine', 'Le Japon', 'La Corée du Sud', 'La Thaïlande'],
            correct: 1,
            explanation: 'Kyoto, ancienne capitale impériale du Japon, est connue pour ses temples et son patrimoine historique.'
        },
        {
            question: 'Quel peintre a réalisé « La Nuit étoilée » ?',
            answers: ['Claude Monet', 'Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí'],
            correct: 2,
            explanation: 'Vincent van Gogh a peint « La Nuit étoilée » en 1889, alors qu’il séjournait à Saint-Rémy-de-Provence.'
        },
        {
            question: 'Quel océan borde la côte du Bénin ?',
            answers: ['L’océan Indien', 'L’océan Pacifique', 'L’océan Arctique', 'L’océan Atlantique'],
            correct: 3,
            explanation: 'Le littoral béninois donne sur le golfe de Guinée, une partie de l’océan Atlantique.'
        },
        {
            question: 'Quelle organisation a été fondée en 1945 pour favoriser la coopération entre les pays ?',
            answers: ['L’Union africaine', 'L’Organisation des Nations unies', 'L’Union européenne', 'L’Organisation mondiale du commerce'],
            correct: 1,
            explanation: 'L’Organisation des Nations unies a été fondée en 1945 pour encourager la paix et la coopération internationale.'
        },
        {
            question: 'Quelle est la capitale du Rwanda ?',
            answers: ['Kigali', 'Kampala', 'Bujumbura', 'Dodoma'],
            correct: 0,
            explanation: 'Kigali est la capitale et la ville la plus peuplée du Rwanda.'
        }
    ],
    science: [
        {
            question: 'Quelle formule chimique correspond à l’eau ?',
            answers: ['CO₂', 'H₂O', 'O₂', 'NaCl'],
            correct: 1,
            explanation: 'Une molécule d’eau est composée de deux atomes d’hydrogène et d’un atome d’oxygène : H₂O.'
        },
        {
            question: 'Quel organe propulse le sang dans le corps humain ?',
            answers: ['Le foie', 'Le poumon', 'Le cœur', 'Le rein'],
            correct: 2,
            explanation: 'Le cœur est un muscle qui pompe le sang et le fait circuler dans les vaisseaux sanguins.'
        },
        {
            question: 'Quel est le symbole chimique de l’oxygène ?',
            answers: ['Ox', 'O', 'Og', 'O₂'],
            correct: 1,
            explanation: 'Le symbole de l’élément oxygène est O. O₂ désigne une molécule composée de deux atomes d’oxygène.'
        },
        {
            question: 'Dans quel milieu le son ne peut-il pas se propager ?',
            answers: ['L’eau', 'L’acier', 'L’air', 'Le vide'],
            correct: 3,
            explanation: 'Le son a besoin d’un milieu matériel pour se propager. Dans le vide, il n’y a pas de particules à faire vibrer.'
        },
        {
            question: 'Quelle planète est la plus proche du Soleil ?',
            answers: ['Vénus', 'La Terre', 'Mercure', 'Mars'],
            correct: 2,
            explanation: 'Mercure est la première planète du système solaire en partant du Soleil.'
        },
        {
            question: 'Quelle unité mesure une force ?',
            answers: ['Le joule', 'Le watt', 'Le newton', 'Le pascal'],
            correct: 2,
            explanation: 'Le newton, nommé d’après Isaac Newton, est l’unité de force du Système international.'
        },
        {
            question: 'Quel gaz les plantes absorbent-elles principalement pendant la photosynthèse ?',
            answers: ['Le dioxyde de carbone', 'L’oxygène', 'L’hélium', 'L’hydrogène'],
            correct: 0,
            explanation: 'Les plantes utilisent le dioxyde de carbone, l’eau et l’énergie lumineuse pour produire des sucres et libérer de l’oxygène.'
        },
        {
            question: 'À quelle température l’eau bout-elle au niveau de la mer ?',
            answers: ['0 °C', '50 °C', '100 °C', '150 °C'],
            correct: 2,
            explanation: 'À la pression atmosphérique normale, l’eau bout à 100 °C. Cette température varie avec la pression.'
        },
        {
            question: 'Quel gaz constitue la plus grande part de l’atmosphère terrestre ?',
            answers: ['L’oxygène', 'Le dioxyde de carbone', 'L’azote', 'L’hydrogène'],
            correct: 2,
            explanation: 'L’azote représente environ 78 % de l’air sec, devant l’oxygène qui en représente environ 21 %.'
        },
        {
            question: 'Quelle grandeur électrique se mesure en ampères ?',
            answers: ['La tension', 'La résistance', 'La puissance', 'L’intensité du courant'],
            correct: 3,
            explanation: 'L’ampère est l’unité de mesure de l’intensité du courant électrique.'
        },
        {
            question: 'Quelle partie d’une plante absorbe principalement l’eau du sol ?',
            answers: ['Les fleurs', 'Les racines', 'Les fruits', 'Les pétales'],
            correct: 1,
            explanation: 'Les racines absorbent l’eau et les sels minéraux du sol, puis les transmettent au reste de la plante.'
        },
        {
            question: 'Quelle force nous maintient à la surface de la Terre ?',
            answers: ['La gravitation', 'Le magnétisme', 'La friction', 'La poussée d’Archimède'],
            correct: 0,
            explanation: 'La gravitation attire les objets qui possèdent une masse les uns vers les autres, notamment vers la Terre.'
        }
    ],
    digital: [
        {
            question: 'Quel langage décrit principalement la structure d’une page web ?',
            answers: ['HTML', 'CSS', 'SQL', 'Bash'],
            correct: 0,
            explanation: 'HTML organise le contenu d’une page avec des éléments comme les titres, les liens et les formulaires.'
        },
        {
            question: 'À quoi sert principalement CSS ?',
            answers: ['À gérer une base de données', 'À mettre en forme une page web', 'À envoyer des e-mails', 'À compiler le système'],
            correct: 1,
            explanation: 'CSS contrôle la présentation : couleurs, typographie, espacements et mise en page, entre autres.'
        },
        {
            question: 'Quel outil permet de suivre les versions d’un projet de code ?',
            answers: ['Figma', 'Git', 'Docker', 'PostgreSQL'],
            correct: 1,
            explanation: 'Git enregistre l’historique des modifications et facilite le travail sur différentes branches.'
        },
        {
            question: 'Que signifie généralement une réponse HTTP 404 ?',
            answers: ['Accès autorisé', 'Serveur indisponible', 'Ressource introuvable', 'Requête réussie'],
            correct: 2,
            explanation: 'Le statut HTTP 404 indique que le serveur ne trouve pas la ressource demandée.'
        },
        {
            question: 'Quel langage est conçu pour interroger des bases de données relationnelles ?',
            answers: ['SQL', 'SVG', 'XML', 'Markdown'],
            correct: 0,
            explanation: 'SQL permet notamment de rechercher, ajouter et modifier des données dans une base relationnelle.'
        },
        {
            question: 'Combien de symboles le système binaire utilise-t-il ?',
            answers: ['Deux : 0 et 1', 'Huit : 0 à 7', 'Dix : 0 à 9', 'Seize : 0 à F'],
            correct: 0,
            explanation: 'Le système binaire est en base 2 et utilise seulement les chiffres 0 et 1.'
        },
        {
            question: 'Quel protocole sécurise généralement les échanges entre un navigateur et un site web ?',
            answers: ['FTP', 'HTTPS', 'SMTP', 'Telnet'],
            correct: 1,
            explanation: 'HTTPS protège les échanges avec TLS. C’est la version sécurisée du protocole HTTP.'
        },
        {
            question: 'Que signifie le sigle API en développement logiciel ?',
            answers: ['Application Programming Interface', 'Automated Program Installation', 'Advanced Page Index', 'Applied Process Internet'],
            correct: 0,
            explanation: 'Une API, ou interface de programmation, définit comment des logiciels peuvent échanger des données ou des services.'
        },
        {
            question: 'Quel symbole commence un sélecteur de classe en CSS ?',
            answers: ['#', '.', '@', '&'],
            correct: 1,
            explanation: 'En CSS, un point précède le nom d’une classe, par exemple `.carte`.'
        },
        {
            question: 'Quelle extension désigne habituellement un fichier JavaScript ?',
            answers: ['.css', '.json', '.js', '.html'],
            correct: 2,
            explanation: 'Les fichiers JavaScript portent couramment l’extension `.js`.'
        },
        {
            question: 'À quoi sert principalement une clé primaire dans une base de données ?',
            answers: ['À chiffrer toute la base', 'À identifier chaque ligne de façon unique', 'À accélérer la connexion Internet', 'À sauvegarder le serveur'],
            correct: 1,
            explanation: 'Une clé primaire fournit un identifiant unique pour chaque enregistrement d’une table.'
        },
        {
            question: 'Quel code HTTP indique généralement qu’une requête a réussi ?',
            answers: ['200', '301', '404', '500'],
            correct: 0,
            explanation: 'Le code HTTP 200 signifie que la requête a été traitée avec succès.'
        }
    ]
};

const LETTERS = ['A', 'B', 'C', 'D'];
const screens = {
    welcome: document.getElementById('welcome-screen'),
    question: document.getElementById('question-screen'),
    result: document.getElementById('result-screen')
};

const elements = {
    categoryCards: Array.from(document.querySelectorAll('.category-card')),
    startButton: document.getElementById('start-button'),
    bestScore: document.getElementById('best-score'),
    quitButton: document.getElementById('quit-button'),
    questionCategory: document.getElementById('question-category'),
    questionCounter: document.getElementById('question-counter'),
    scoreCounter: document.getElementById('score-counter'),
    progressTrack: document.getElementById('progress-track'),
    progressFill: document.getElementById('progress-fill'),
    questionOverline: document.getElementById('question-overline'),
    questionTitle: document.getElementById('question-title'),
    answerList: document.getElementById('answer-list'),
    answerFeedback: document.getElementById('answer-feedback'),
    feedbackSymbol: document.getElementById('feedback-symbol'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackExplanation: document.getElementById('feedback-explanation'),
    nextButton: document.getElementById('next-button'),
    resultTitle: document.getElementById('result-title'),
    resultMessage: document.getElementById('result-message'),
    scoreRing: document.getElementById('score-ring'),
    resultScore: document.getElementById('result-score'),
    resultAccuracy: document.getElementById('result-accuracy'),
    resultStreak: document.getElementById('result-streak'),
    resultBest: document.getElementById('result-best'),
    replayButton: document.getElementById('replay-button'),
    changeCategoryButton: document.getElementById('change-category-button'),
    newRecordNote: document.getElementById('new-record-note'),
    announcer: document.getElementById('announcer')
};

const state = {
    category: 'mix',
    questions: [],
    questionIndex: 0,
    score: 0,
    currentStreak: 0,
    bestStreak: 0,
    answered: false,
    newRecord: false
};

function shuffle(items) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled;
}

function getBestScore(category) {
    try {
        const score = Number(window.localStorage.getItem(`${STORAGE_PREFIX}${category}`));
        return Number.isFinite(score) && score >= 0 ? score : 0;
    } catch {
        return 0;
    }
}

function saveBestScore(category, score) {
    try {
        window.localStorage.setItem(`${STORAGE_PREFIX}${category}`, String(score));
        return true;
    } catch {
        return false;
    }
}

function updateBestScoreLabel() {
    const bestScore = getBestScore(state.category);
    elements.bestScore.textContent = bestScore
        ? `Meilleur score : ${bestScore} / ${QUESTIONS_PER_ROUND}`
        : 'Aucun record pour ce parcours';
}

function setScreen(screenName, focusTarget) {
    Object.entries(screens).forEach(([name, screen]) => {
        screen.hidden = name !== screenName;
    });

    if (focusTarget) {
        window.requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
    }
}

function selectCategory(category) {
    if (!CATEGORIES[category]) {
        return;
    }

    state.category = category;
    elements.categoryCards.forEach((card) => {
        const isSelected = card.dataset.category === category;
        card.classList.toggle('is-selected', isSelected);
        card.setAttribute('aria-pressed', String(isSelected));
    });
    updateBestScoreLabel();
}

function buildRound(category) {
    if (category !== 'mix') {
        return shuffle(QUESTION_BANK[category]).slice(0, QUESTIONS_PER_ROUND);
    }

    return shuffle(Object.keys(QUESTION_BANK).flatMap((key) => (
        shuffle(QUESTION_BANK[key])
            .slice(0, 2)
            .map((question) => ({ ...question, category: key }))
    )));
}

function startQuiz() {
    state.questions = buildRound(state.category);
    state.questionIndex = 0;
    state.score = 0;
    state.currentStreak = 0;
    state.bestStreak = 0;
    state.answered = false;
    state.newRecord = false;
    renderQuestion();
    setScreen('question', elements.questionTitle);
    elements.announcer.textContent = `Le quiz commence. ${QUESTIONS_PER_ROUND} questions dans le parcours ${CATEGORIES[state.category].title}.`;
}

function renderQuestion() {
    const question = state.questions[state.questionIndex];
    const questionNumber = state.questionIndex + 1;
    const questionCategory = question.category || state.category;
    const categoryDetails = CATEGORIES[questionCategory];

    state.answered = false;
    elements.questionCategory.textContent = categoryDetails.label;
    elements.questionCounter.textContent = `QUESTION ${String(questionNumber).padStart(2, '0')} / ${String(QUESTIONS_PER_ROUND).padStart(2, '0')}`;
    elements.scoreCounter.textContent = `${state.score} bonne${state.score === 1 ? '' : 's'} réponse${state.score === 1 ? '' : 's'}`;
    elements.progressTrack.setAttribute('aria-valuenow', String(state.questionIndex));
    elements.progressFill.style.width = `${(state.questionIndex / QUESTIONS_PER_ROUND) * 100}%`;
    elements.questionOverline.textContent = questionCategory === 'digital' ? 'WEB & INFORMATIQUE' : categoryDetails.label;
    elements.questionTitle.textContent = question.question;
    elements.answerList.replaceChildren();
    elements.answerFeedback.hidden = true;
    elements.answerFeedback.classList.remove('is-correct', 'is-incorrect');
    elements.nextButton.hidden = true;
    elements.nextButton.querySelector('span').textContent = state.questionIndex === QUESTIONS_PER_ROUND - 1
        ? 'Voir mon résultat'
        : 'Question suivante';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        const key = document.createElement('span');
        const label = document.createElement('span');
        const mark = document.createElement('span');

        button.className = 'answer-option';
        button.type = 'button';
        button.dataset.answerIndex = String(index);
        button.setAttribute('aria-pressed', 'false');

        key.className = 'answer-key';
        key.setAttribute('aria-hidden', 'true');
        key.textContent = LETTERS[index];

        label.className = 'answer-label';
        label.textContent = answer;

        mark.className = 'answer-mark';
        mark.setAttribute('aria-hidden', 'true');
        mark.textContent = '✓';

        button.append(key, label, mark);
        elements.answerList.appendChild(button);
    });
}

function chooseAnswer(answerIndex) {
    if (state.answered) {
        return;
    }

    const question = state.questions[state.questionIndex];
    const isCorrect = answerIndex === question.correct;
    const answerButtons = Array.from(elements.answerList.querySelectorAll('.answer-option'));

    state.answered = true;
    elements.progressTrack.setAttribute('aria-valuenow', String(state.questionIndex + 1));
    elements.progressFill.style.width = `${((state.questionIndex + 1) / QUESTIONS_PER_ROUND) * 100}%`;

    if (isCorrect) {
        state.score += 1;
        state.currentStreak += 1;
        state.bestStreak = Math.max(state.bestStreak, state.currentStreak);
    } else {
        state.currentStreak = 0;
    }

    answerButtons.forEach((button, index) => {
        button.disabled = true;
        button.setAttribute('aria-pressed', String(index === answerIndex));

        if (index === question.correct) {
            button.classList.add('is-correct');
        } else if (index === answerIndex) {
            button.classList.add('is-incorrect');
            button.querySelector('.answer-mark').textContent = '×';
        }
    });

    elements.answerFeedback.hidden = false;
    elements.answerFeedback.classList.toggle('is-correct', isCorrect);
    elements.answerFeedback.classList.toggle('is-incorrect', !isCorrect);
    elements.feedbackSymbol.textContent = isCorrect ? '✓' : 'i';
    elements.feedbackTitle.textContent = isCorrect
        ? 'Bonne réponse !'
        : `La bonne réponse : ${question.answers[question.correct]}`;
    elements.feedbackExplanation.textContent = question.explanation;
    elements.scoreCounter.textContent = `${state.score} bonne${state.score === 1 ? '' : 's'} réponse${state.score === 1 ? '' : 's'}`;
    elements.nextButton.hidden = false;
    elements.announcer.textContent = `${isCorrect ? 'Bonne réponse.' : `Réponse incorrecte. La bonne réponse était ${question.answers[question.correct]}.`} ${question.explanation}`;
    elements.nextButton.focus({ preventScroll: true });
}

function finishQuiz() {
    const previousBest = getBestScore(state.category);
    state.newRecord = state.score > previousBest;

    if (state.newRecord) {
        saveBestScore(state.category, state.score);
    }

    const accuracy = Math.round((state.score / QUESTIONS_PER_ROUND) * 100);
    const categoryTitle = CATEGORIES[state.category].title;

    elements.resultTitle.textContent = state.score === QUESTIONS_PER_ROUND
        ? 'Sans faute !'
        : state.score >= 4
            ? 'Très belle partie.'
            : state.score >= 2
                ? 'Belle progression.'
                : 'La prochaine sera meilleure.';
    elements.resultMessage.textContent = `Tu as terminé le parcours « ${categoryTitle} ». Chaque partie est une occasion d’apprendre quelque chose de nouveau.`;
    elements.scoreRing.style.setProperty('--score-angle', `${accuracy * 3.6}deg`);
    elements.scoreRing.setAttribute('aria-label', `${state.score} bonnes réponses sur ${QUESTIONS_PER_ROUND}, soit ${accuracy} pour cent`);
    elements.resultScore.textContent = `${state.score}/${QUESTIONS_PER_ROUND}`;
    elements.resultAccuracy.textContent = `${accuracy} %`;
    elements.resultStreak.textContent = `${state.bestStreak} réponse${state.bestStreak === 1 ? '' : 's'}`;
    elements.resultBest.textContent = `${Math.max(previousBest, state.score)} / ${QUESTIONS_PER_ROUND}`;
    elements.newRecordNote.hidden = !state.newRecord;
    updateBestScoreLabel();
    setScreen('result', elements.resultTitle);
    elements.announcer.textContent = `Partie terminée. ${state.score} bonne${state.score === 1 ? '' : 's'} réponse${state.score === 1 ? '' : 's'} sur ${QUESTIONS_PER_ROUND}. ${accuracy} pour cent de réussite.`;
}

function advance() {
    if (!state.answered) {
        return;
    }

    if (state.questionIndex === QUESTIONS_PER_ROUND - 1) {
        finishQuiz();
        return;
    }

    state.questionIndex += 1;
    renderQuestion();
    elements.questionTitle.focus({ preventScroll: true });
}

elements.categoryCards.forEach((card) => {
    card.addEventListener('click', () => selectCategory(card.dataset.category));
});

elements.startButton.addEventListener('click', startQuiz);
elements.nextButton.addEventListener('click', advance);
elements.replayButton.addEventListener('click', startQuiz);

elements.quitButton.addEventListener('click', () => {
    updateBestScoreLabel();
    setScreen('welcome', document.getElementById('welcome-title'));
    elements.announcer.textContent = 'Partie quittée. Tu peux choisir un autre parcours.';
});

elements.changeCategoryButton.addEventListener('click', () => {
    updateBestScoreLabel();
    setScreen('welcome', document.getElementById('welcome-title'));
});

elements.answerList.addEventListener('click', (event) => {
    const answerButton = event.target.closest('[data-answer-index]');
    if (answerButton && elements.answerList.contains(answerButton)) {
        chooseAnswer(Number(answerButton.dataset.answerIndex));
    }
});

document.addEventListener('keydown', (event) => {
    if (screens.question.hidden || state.answered || !/^[1-4]$/.test(event.key)) {
        return;
    }

    event.preventDefault();
    chooseAnswer(Number(event.key) - 1);
});

selectCategory(state.category);
