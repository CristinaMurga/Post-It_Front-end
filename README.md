# Sistema di Post-it Virtuali - Front-End

## Descrizione del Progetto
Questo è il front-end di un sistema di post-it virtuali multiutente, sviluppato con Angular. Gli utenti possono registrarsi, effettuare il login, creare, modificare, eliminare e spostare le note sulla lavagna tramite drag & drop. Ogni nota può avere un colore scelto da una lista di colori predefiniti, e tutte le note sono salvate per ogni utente con il loro contenuto, colore e posizione.

## Come Installare ed Eseguire il Progetto
1. **Prerequisiti:**
   - Assicurati di avere installato Node.js
   - Installa l'Angular CLI globalmente sul tuo sistema:
     npm install -g @angular/cli
  

2. **Clona la Repository:**
    git clone https://github.com/CristinaMurga/Post-It_Front-end.git
    cd Post-It_Front-end


3. **Installa le Dipendenze:**

    npm install


4. **Avviare il Progetto:**
    ng serve

5. **Accedere all'Applicazione:**
    Apri il browser e vai a `http://localhost:4200`.

## Come Usare il Progetto
Per il corretto funzionamento del progetto, assicurati di avere il back-end in esecuzione. 
Puoi trovare le istruzioni per il back-end nella Repository https://github.com/CristinaMurga/Post-it_Back-end.git

1. **Registrazione:**
   - Accedi alla pagina di registrazione e crea un nuovo account.

2. **Login:**
   - Utilizza le credenziali create per effettuare il login.

3. **Gestione Note:**
   - Crea una nuova nota utilizzando l'apposito pulsante.
   - Modifica una nota cambiando il suo colore, contenuto o posizione.
   - Elimina una nota utilizzando l'icona di eliminazione.
   - Sposta una nota sulla lavagna tramite drag & drop.
