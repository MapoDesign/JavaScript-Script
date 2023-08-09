var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

function phi(table) {
    return(table[3]*table[0]-table[2]*table[1])/
        Math.sqrt(
            (table[2]+table[3])*
            (table[0]+table[1])*
            (table[1]+table[3])*
            (table[0]+table[2]));
}

function tableFor(event,journal) {
    let table = [0,0,0,0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i],index=0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

function journalEvents(journal) {
    let events = [];
    for (const entry of journal){
        for (const event of entry.events) {
            if (!events.includes(event)) {
                events.push(event)
            }
        }
    }

    return events;
}

// console.log(phi([76,9,4,1]));

// console.log(tableFor("pizza",JOURNAL));

// console.log(phi(tableFor("bread",JOURNAL)));

// console.log(journalEvents(JOURNAL));

for (const event of journalEvents(JOURNAL)) {
    console.log(event + " : " + phi(tableFor(event,JOURNAL)));
}


// Si è notato che il cambiamento in mannaro aumenta quando Jaques mangia le noccioline e non si lava i denti
// Questa funzione crea un nuovo valore che unisce il mangiare noccioline e non lavarsi i denti
for (const entry of JOURNAL) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));