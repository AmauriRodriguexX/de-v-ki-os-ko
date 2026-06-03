// Store global del chatbot (runes). La UI del Chatbot llega en la Ola 4;
// por ahora BottomNavBar y FABGroup ya pueden invocar open()/close().
let isOpen = $state(false);

export const chatbot = {
  get isOpen() {
    return isOpen;
  },
  open() {
    isOpen = true;
  },
  close() {
    isOpen = false;
  },
  toggle() {
    isOpen = !isOpen;
  }
};
