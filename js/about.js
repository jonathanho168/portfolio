// want to access all of the cards and tooltips/arrows
const taipei101 = document.querySelector('#taipei101');
const tooltip101 = document.querySelector('#tooltip101');

const trois = document.querySelector('#trois');
const tooltiptrois = document.querySelector('#tooltiptrois');

const monet = document.querySelector('#monet');
const tooltipmonet = document.querySelector('#tooltipmonet');

// for all pairs, create poppers
const poppermonet = Popper.createPopper(monet, tooltipmonet, {
    modifiers: [{
            name: 'offset',
            options: {
              offset: [0, 12],
            },
          },
        ],
});

const poppertrois = Popper.createPopper(trois, tooltiptrois, {
    modifiers: [{
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
});

const popper101 = Popper.createPopper(taipei101, tooltip101, {
    modifiers: [{
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
});

// Unfortunately, I don't know how to do currying in JS
// Otherwise I would have made everything much cleaner

// create show/hide functions for each popper
function showmonet() {
    // Make the tooltip visible
    tooltipmonet.setAttribute('data-show', '');

    // Enable the event listeners
    poppermonet.setOptions((options) => ({
        ...options,
        modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
        ],
    }));

    // Update its position
    poppermonet.update();
}

function showtrois() {
    // Make the tooltip visible
    tooltiptrois.setAttribute('data-show', '');

    // Enable the event listeners
    poppertrois.setOptions((options) => ({
        ...options,
        modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
        ],
    }));

    // Update its position
    poppertrois.update();
}

function show101() {
    // Make the tooltip visible
    tooltip101.setAttribute('data-show', '');

    // Enable the event listeners
    popper101.setOptions((options) => ({
        ...options,
        modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
        ],
    }));

    // Update its position
    popper101.update();
}

function hidemonet() {
    // Hide the tooltip
    tooltipmonet.removeAttribute('data-show');

    // Disable the event listeners
    poppermonet.setOptions((options) => ({
        ...options,
        modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
        ],
    }));
}

function hidetrois() {
    // Hide the tooltip
    tooltiptrois.removeAttribute('data-show');

    // Disable the event listeners
    poppertrois.setOptions((options) => ({
        ...options,
        modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
        ],
    }));
}

function hide101() {
    // Hide the tooltip
    tooltip101.removeAttribute('data-show');

    // Disable the event listeners
    popper101.setOptions((options) => ({
        ...options,
        modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
        ],
    }));
}

// add event listeners for each popper and each event
const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
    taipei101.addEventListener(event, show101);
    trois.addEventListener(event, showtrois);
    monet.addEventListener(event, showmonet);
});

hideEvents.forEach((event) => {
    taipei101.addEventListener(event, hide101);
    trois.addEventListener(event, hidetrois);
    monet.addEventListener(event, hidemonet);
});