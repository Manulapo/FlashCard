let flashcards = [
  {
    word: "achievement",
    options: ["raggiungimento", "fallimento", "idea", "sfida"],
    correct: "raggiungimento",
  },
  {
    word: "approach",
    options: ["approccio", "avvicinamento", "partenza", "risultato"],
    correct: "approccio",
  },
  {
    word: "benefit",
    options: ["vantaggio", "perdita", "problema", "sfida"],
    correct: "vantaggio",
  },
  {
    word: "challenge",
    options: ["sfida", "vittoria", "successo", "sconfitta"],
    correct: "sfida",
  },
  {
    word: "commitment",
    options: ["impegno", "rifiuto", "dubbio", "libertà"],
    correct: "impegno",
  },
  {
    word: "concern",
    options: ["preoccupazione", "indifferenza", "gioia", "curiosità"],
    correct: "preoccupazione",
  },
  {
    word: "requirement",
    options: ["requisito", "risultato", "conseguenza", "opportunità"],
    correct: "requisito",
  },
  {
    word: "suitable",
    options: ["adatto", "inutile", "semplice", "normale"],
    correct: "adatto",
  },
  {
    word: "value",
    options: ["valore", "prezzo", "perdita", "beneficio"],
    correct: "valore",
  },
  {
    word: "alternative",
    options: ["alternativa", "proposta", "problema", "scelta"],
    correct: "alternativa",
  },
  {
    word: "community",
    options: ["comunità", "famiglia", "città", "squadra"],
    correct: "comunità",
  },
  {
    word: "opportunity",
    options: ["opportunità", "sfida", "problema", "errore"],
    correct: "opportunità",
  },
  {
    word: "pressure",
    options: ["pressione", "calma", "forza", "scelta"],
    correct: "pressione",
  },
  {
    word: "priority",
    options: ["priorità", "secondo piano", "opzione", "sfida"],
    correct: "priorità",
  },
  {
    word: "strategy",
    options: ["strategia", "metodo", "errore", "progetto"],
    correct: "strategia",
  },
  {
    word: "support",
    options: ["sostegno", "abbandono", "sfida", "contrasto"],
    correct: "sostegno",
  },
  {
    word: "target",
    options: ["obiettivo", "errore", "strada", "speranza"],
    correct: "obiettivo",
  },
  {
    word: "trend",
    options: ["tendenza", "moda", "svolta", "fine"],
    correct: "tendenza",
  },
  {
    word: "vision",
    options: ["visione", "idea", "progetto", "programma"],
    correct: "visione",
  },
  {
    word: "analysis",
    options: ["analisi", "problema", "soluzione", "confusione"],
    correct: "analisi",
  },
  {
    word: "available",
    options: ["disponibile", "nascosto", "occupato", "finito"],
    correct: "disponibile",
  },
  {
    word: "challenge",
    options: ["sfida", "successo", "fallimento", "vantaggio"],
    correct: "sfida",
  },
  {
    word: "decision",
    options: ["decisione", "confusione", "errore", "gioco"],
    correct: "decisione",
  },
  {
    word: "effect",
    options: ["effetto", "causa", "risultato", "programma"],
    correct: "effetto",
  },
  {
    word: "factor",
    options: ["fattore", "errore", "causa", "problema"],
    correct: "fattore",
  },
  {
    word: "feature",
    options: ["caratteristica", "problema", "vantaggio", "soluzione"],
    correct: "caratteristica",
  },
  {
    word: "focus",
    options: ["concentrazione", "confusione", "scelta", "gioco"],
    correct: "concentrazione",
  },
  {
    word: "individual",
    options: ["individuo", "squadra", "comunità", "progetto"],
    correct: "individuo",
  },
  {
    word: "potential",
    options: ["potenziale", "attuale", "limite", "fine"],
    correct: "potenziale",
  },
  {
    word: "significant",
    options: ["significativo", "irrilevante", "banale", "semplice"],
    correct: "significativo",
  },
  {
    word: "specific",
    options: ["specifico", "generale", "confuso", "limitato"],
    correct: "specifico",
  },
  {
    word: "structure",
    options: ["struttura", "progetto", "errore", "sistema"],
    correct: "struttura",
  },
  {
    word: "task",
    options: ["compito", "gioco", "problema", "sfida"],
    correct: "compito",
  },
  {
    word: "technology",
    options: ["tecnologia", "scienza", "sistema", "sviluppo"],
    correct: "tecnologia",
  },
  {
    word: "tradition",
    options: ["tradizione", "moda", "cultura", "tendenza"],
    correct: "tradizione",
  },
  {
    word: "unique",
    options: ["unico", "normale", "raro", "comune"],
    correct: "unico",
  },
  {
    word: "version",
    options: ["versione", "modello", "progetto", "programma"],
    correct: "versione",
  },
  {
    word: "ability",
    options: ["abilità", "errore", "limite", "potenziale"],
    correct: "abilità",
  },
  {
    word: "attitude",
    options: ["atteggiamento", "errore", "gioco", "idea"],
    correct: "atteggiamento",
  },
  {
    word: "available",
    options: ["disponibile", "occupato", "finito", "perso"],
    correct: "disponibile",
  },
  {
    word: "concept",
    options: ["concetto", "errore", "progetto", "soluzione"],
    correct: "concetto",
  },
  {
    word: "context",
    options: ["contesto", "situazione", "problema", "idea"],
    correct: "contesto",
  },
  {
    word: "develop",
    options: ["sviluppare", "distruggere", "fermare", "creare"],
    correct: "sviluppare",
  },
  {
    word: "identify",
    options: ["identificare", "confondere", "nascondere", "trovare"],
    correct: "identificare",
  },
  {
    word: "impact",
    options: ["impatto", "influenza", "conseguenza", "causa"],
    correct: "impatto",
  },
  {
    word: "maintain",
    options: ["mantenere", "distruggere", "ignorare", "creare"],
    correct: "mantenere",
  },
  {
    word: "method",
    options: ["metodo", "progetto", "errore", "situazione"],
    correct: "metodo",
  },
  {
    word: "outcome",
    options: ["risultato", "problema", "causa", "errore"],
    correct: "risultato",
  },
  {
    word: "perception",
    options: ["percezione", "realtà", "idea", "pensiero"],
    correct: "percezione",
  },
  {
    word: "research",
    options: ["ricerca", "studio", "errore", "progetto"],
    correct: "ricerca",
  },
  {
    word: "solution",
    options: ["soluzione", "problema", "errore", "svolta"],
    correct: "soluzione",
  },
  {
    word: "actual",
    options: ["reale", "attuale", "vero", "falso"],
    correct: "reale",
  },
  {
    word: "argument",
    options: ["litigio", "argomento", "dibattito", "idea"],
    correct: "litigio",
  },
  {
    word: "fabric",
    options: ["tessuto", "fabbrica", "costruzione", "storia"],
    correct: "tessuto",
  },
  {
    word: "library",
    options: ["biblioteca", "libreria", "scuola", "archivio"],
    correct: "biblioteca",
  },
  {
    word: "sympathetic",
    options: ["comprensivo", "simpatico", "affettuoso", "egoista"],
    correct: "comprensivo",
  },
  {
    word: "sensible",
    options: ["ragionevole", "sensibile", "intelligente", "emotivo"],
    correct: "ragionevole",
  },
  {
    word: "eventually",
    options: ["alla fine", "eventualmente", "subito", "forse"],
    correct: "alla fine",
  },
  {
    word: "preservative",
    options: ["conservante", "preservativo", "protezione", "cura"],
    correct: "conservante",
  },
  {
    word: "notice",
    options: ["avviso", "notizia", "informazione", "proposta"],
    correct: "avviso",
  },
  {
    word: "sensitive",
    options: ["sensibile", "ragionevole", "intelligente", "facile"],
    correct: "sensibile",
  },
  {
    word: "confident",
    options: ["fiducioso", "confidente", "orgoglioso", "insicuro"],
    correct: "fiducioso",
  },
  {
    word: "lecture",
    options: ["lezione", "lettura", "dibattito", "spettacolo"],
    correct: "lezione",
  },
  {
    word: "engaged",
    options: ["occupato", "fidanzato", "entusiasta", "preparato"],
    correct: "occupato",
  },
  {
    word: "parents",
    options: ["genitori", "parenti", "famiglia", "tutori"],
    correct: "genitori",
  },
  {
    word: "exit",
    options: ["uscita", "successo", "entrata", "inizio"],
    correct: "uscita",
  },
  {
    word: "policy",
    options: ["politica", "polizza", "decisione", "regola"],
    correct: "politica",
  },
  {
    word: "chef",
    options: ["cuoco", "capo", "assistente", "direttore"],
    correct: "cuoco",
  },
  {
    word: "terrific",
    options: ["fantastico", "terrificante", "orrendo", "normale"],
    correct: "fantastico",
  },
  {
    word: "attend",
    options: ["frequentare", "attendere", "aspettare", "abbandonare"],
    correct: "frequentare",
  },
  {
    word: "data",
    options: ["dati", "data", "informazione", "ricerca"],
    correct: "dati",
  },
  {
    word: "contest",
    options: ["gara", "contesto", "disputa", "accordo"],
    correct: "gara",
  },
  {
    word: "delusion",
    options: ["illusione", "delusione", "confusione", "errore"],
    correct: "illusione",
  },
  {
    word: "path",
    options: ["sentiero", "patologia", "scelta", "strada"],
    correct: "sentiero",
  },
  {
    word: "inconsistent",
    options: ["contraddittorio", "inconsistente", "debole", "fragile"],
    correct: "contraddittorio",
  },
  {
    word: "presume",
    options: ["supporre", "presumere", "accusare", "aspettarsi"],
    correct: "supporre",
  },
  {
    word: "pretend",
    options: ["fingere", "pretendere", "chiedere", "provare"],
    correct: "fingere",
  },
  {
    word: "resume",
    options: ["riprendere", "riassunto", "iniziare", "terminare"],
    correct: "riprendere",
  },
  {
    word: "gift",
    options: ["regalo", "dote", "idea", "promessa"],
    correct: "regalo",
  },
  {
    word: "novel",
    options: ["romanzo", "novità", "proposta", "idea"],
    correct: "romanzo",
  },
  {
    word: "luxury",
    options: ["lusso", "lussuria", "ricchezza", "comodità"],
    correct: "lusso",
  },
  {
    word: "gratuity",
    options: ["mancia", "gratuità", "offerta", "regalo"],
    correct: "mancia",
  },
  {
    word: "eventually",
    options: ["alla fine", "eventualmente", "subito", "forse"],
    correct: "alla fine",
  },
  {
    word: "sympathy",
    options: ["comprensione", "simpatia", "odio", "affetto"],
    correct: "comprensione",
  },
  {
    word: "mark",
    options: ["voto", "marchio", "segno", "punizione"],
    correct: "voto",
  },
  {
    word: "current",
    options: ["attuale", "corrente", "veloce", "energia"],
    correct: "attuale",
  },
  {
    word: "rope",
    options: ["corda", "rospo", "fune", "cintura"],
    correct: "corda",
  },
  {
    word: "agenda",
    options: ["ordine del giorno", "agenda", "calendario", "progetto"],
    correct: "ordine del giorno",
  },
  {
    word: "contest",
    options: ["gara", "contestazione", "accordo", "gioco"],
    correct: "gara",
  },
  {
    word: "actual",
    options: ["reale", "attuale", "vero", "falso"],
    correct: "reale",
  },
  {
    word: "fabric",
    options: ["tessuto", "fabbrica", "materiale", "struttura"],
    correct: "tessuto",
  },
  {
    word: "mansion",
    options: ["villa", "mansione", "casa", "lavoro"],
    correct: "villa",
  },
  {
    word: "policy",
    options: ["politica", "polizza", "regola", "programma"],
    correct: "politica",
  },
  {
    word: "delicate",
    options: ["delicato", "delizioso", "fragile", "raffinato"],
    correct: "delicato",
  },
  {
    word: "occasion",
    options: ["occasione", "evento", "possibilità", "risultato"],
    correct: "occasione",
  },
  {
    word: "undertake",
    options: ["intraprendere", "sottovalutare", "finire", "ignorare"],
    correct: "intraprendere",
  },
  {
    word: "alien",
    options: ["straniero", "alieno", "diverso", "originale"],
    correct: "straniero",
  },
  {
    word: "minister",
    options: ["ministro", "sacerdote", "direttore", "professore"],
    correct: "ministro",
  },
  {
    word: "journal",
    options: ["giornale", "diario", "rivista", "libro"],
    correct: "giornale",
  },
  {
    word: "nurse",
    options: ["infermiere", "nutrice", "assistente", "madre"],
    correct: "infermiere",
  },
  {
    word: "consist",
    options: ["consistere", "sussistere", "esistere", "funzionare"],
    correct: "consistere",
  },
  ,
];

let currentCardIndex = 0;
let errorCount = 0;

const wordElement = document.getElementById("word");
const optionsElement = document.getElementById("options");
const errorsElement = document.getElementById("errors");
const resetButton = document.getElementById("reset");
const addFlashcardForm = document.getElementById("addFlashcardForm");

// Carica la flashcard corrente
function loadFlashcard() {
  const card = flashcards[currentCardIndex];
  wordElement.textContent = card.word;
  optionsElement.innerHTML = "";

  card.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

// Verifica la risposta
function checkAnswer(selectedOption) {
  const card = flashcards[currentCardIndex];
  if (selectedOption === card.correct) {
    nextFlashcard();
    higlightOption(true);
  } else {
    errorCount++;
    nextFlashcard();
    higlightOption(false);
    errorsElement.textContent = errorCount;
  }
}

function higlightOption(isCorrect) {
  const card = flashcards[currentCardIndex];
  const buttons = optionsElement.querySelectorAll("button");
  const flashcard = document.querySelector("#flashcard");
  buttons.forEach((button) => {
    if (button.textContent === card.correct) {
      flashcard.classList.add(isCorrect ? "correct" : "wrong");
      setTimeout(() => {
        flashcard.classList.remove("correct", "wrong");
      }, 1000);
    }
  });
}


// Passa alla flashcard successiva
function nextFlashcard() {
  currentCardIndex++;
  if (currentCardIndex < flashcards.length) {
    loadFlashcard();
  } else {
    wordElement.textContent =
      "Ottimo lavoro! Hai completato tutte le flashcard.";
    optionsElement.innerHTML = "";
  }
}

// Resetta il gioco
function resetApp() {
  currentCardIndex = 0;
  errorCount = 0;
  errorsElement.textContent = errorCount;
  loadFlashcard();
}

// Aggiunge una nuova flashcard dall'input dell'utente
// addFlashcardForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const newWord = document.getElementById("newWord").value;
//   const newCorrectOption = document.getElementById("newCorrectOption").value;
//   const newWrongOption1 = document.getElementById("newWrongOption1").value;
//   const newWrongOption2 = document.getElementById("newWrongOption2").value;
//   const newWrongOption3 = document.getElementById("newWrongOption3").value;

//   // Crea una nuova flashcard
//   const newFlashcard = {
//     word: newWord,
//     options: [
//       newCorrectOption,
//       newWrongOption1,
//       newWrongOption2,
//       newWrongOption3,
//     ],
//     correct: newCorrectOption,
//   };

//   // Aggiunge la nuova flashcard alla lista
//   flashcards.push(newFlashcard);

//   // Resetta il modulo
//   addFlashcardForm.reset();
//   alert("Nuova flashcard aggiunta con successo!");
// });

// Inizializza l'app
resetButton.addEventListener("click", resetApp);
loadFlashcard();
