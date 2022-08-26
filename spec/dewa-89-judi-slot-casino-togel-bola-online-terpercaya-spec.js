'use babel';

import Dewa89JudiSlotCasinoTogelBolaOnlineTerpercaya from '../lib/dewa-89-judi-slot-casino-togel-bola-online-terpercaya';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Dewa89JudiSlotCasinoTogelBolaOnlineTerpercaya', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('dewa-89-judi-slot-casino-togel-bola-online-terpercaya');
  });

  describe('when the dewa-89-judi-slot-casino-togel-bola-online-terpercaya:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.dewa-89-judi-slot-casino-togel-bola-online-terpercaya')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'dewa-89-judi-slot-casino-togel-bola-online-terpercaya:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.dewa-89-judi-slot-casino-togel-bola-online-terpercaya')).toExist();

        let dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaElement = workspaceElement.querySelector('.dewa-89-judi-slot-casino-togel-bola-online-terpercaya');
        expect(dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaElement).toExist();

        let dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaPanel = atom.workspace.panelForItem(dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaElement);
        expect(dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'dewa-89-judi-slot-casino-togel-bola-online-terpercaya:toggle');
        expect(dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.dewa-89-judi-slot-casino-togel-bola-online-terpercaya')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'dewa-89-judi-slot-casino-togel-bola-online-terpercaya:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaElement = workspaceElement.querySelector('.dewa-89-judi-slot-casino-togel-bola-online-terpercaya');
        expect(dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'dewa-89-judi-slot-casino-togel-bola-online-terpercaya:toggle');
        expect(dewa89JudiSlotCasinoTogelBolaOnlineTerpercayaElement).not.toBeVisible();
      });
    });
  });
});
