import { cards_config, TextAreaCard, SubstancePickerCard, OptionSelectorCard, InputModulesCard } from "./modules/cards.js";
import { drugs_directory } from "./modules/local_database.js";
import { SelectedItemBar } from "./modules/input_modules.js";
cards_config.setDefaultContainer(document.body);
cards_config.autoPlace = true;


// let optionSelectorCard = new OptionSelectorCard({
//     id: "strainSelector",
//     label: "Pick a strain",
//     content: {
//         options: ["Super Silver Haze", "Girl Scout Cookies", "Fruity Pebbles", "Vibe Juices", "OG Granny"]
//     }
// });



// let inputTestingCard = new InputModulesCard({
//     id: "bizza",
//     label: "Testing Card"
// });


let newTextCard = new TextAreaCard({
    id: "doseInfo_input",
    label: "Dose Information",
    content: {
        placeholder: "Yo yo this is a placeholder"
    }
});
newTextCard.getType.then(e => {
    console.log(e);
});
// setTimeout(newTextCard.getOutput, 1000);

// NOTE: To get output from newTextCard, simply call
//       newTextCard.getOutput();

// newTextCard.events.addEventListener("change", function(event) {
//     console.log(event.getValue());
// });


// let pickerCard = new SubstancePickerCard({
//     id: "substances_container",
//     label: "Substances",
//     location: "#s10e",
//     content: {
//         substances: drugs_directory
//     }
// })
// let pickerEvents = pickerCard.events;
// pickerEvents.addEventListener("select", (event) => {
//     let debugUpdateElement = document.createElement("span");
//     debugUpdateElement.innerHTML = `${event.type} > ${event.getValue()}`;
//     document.querySelector("#debug-updates").appendChild(debugUpdateElement);


//     let drugName = (event.body.value).replace('drug_','');
//     pickerCard.hide();
//     setTimeout(() => {

//         let chosenDrug_bar = new SelectedItemBar(drugName);
//         chosenDrug_bar.place("#s10e");
//         chosenDrug_bar.events.listenFor("cancel", () => {
//              pickerCard.show(300)
//         });

//     }, 650);

//     console.log("ACTION MADE: User has made a " + event.type + " event, they selected " + event.body.value)
// });







