'use babel';

import Dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaView from './dewa-89-judi-slot-casino-togel-bola-online-terpercaya-view';
import { CompositeDisposable } from 'atom';

export default {

  dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaView = new Dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaView(state.dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'dewa-89-judi-slot-casino-togel-bola-online-terpercaya:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaView.destroy();
  },

  serialize() {
    return {
      dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaViewState: this.dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaView.serialize()
    };
  },

  toggle() {
    console.log('Dewa89JudiSlotCasinoTogelBolaOnlineTerpercaya was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
