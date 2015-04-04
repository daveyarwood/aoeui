# aoeui for Light Table

Finding just the right text editing setup can be hard. If you happen to be a [Dvorak](http://en.wikipedia.org/wiki/Dvorak_Simplified_Keyboard) user, it can be even harder. A lot of editors are optimized for QWERTY, making the keyboard shortcuts awkward to use in Dvorak.

I'm a long-time fan of [aoeui](http://aoeui.sourceforge.net), a simple CLI text editor with keyboard shortcuts optimized for Dvorak. It's somewhat [Emacs](https://www.gnu.org/software/emacs)y in that you can move around and do things in your editor using `Ctrl+<key>` shortcuts, but the author of aoeui's intent was to create a minimal text editor with only as many commands as you need. Emacs is awesome, but it provides such a bounty of features that (if you're like me) it's easy to end up not using most of them because you can't remember the shortcuts. The philosophy of aoeui is that your text editor shouldn't occupy that much real estate in your brain; if you can easily remember everything your text editor can do, then the rest of your brain can focus on actually editing stuff instead of tinkering with your editor setup or looking up keyboard shortcuts.

I also really like Light Table for a variety of reasons (the [official site](http://www.lighttable.com) gives a pretty good overview of its greatness), one of which is how easy it is to customize. So, an aoeui plugin for Light Table should give me just as much Emacs as I want without having to go full-on Emacs! :P

## Notes

* aoeui uses `^Space` (`Ctrl+Space`) as a modifier for many commands. This key combination happens to be taken in the default Light Table keymap as the shortcut to open and close the command bar, so, in order to deliver a more authentic aoeui experience, I've remapped Light Table's "open/close command bar" keyboard shortcut from `^Space` to `^Space^Enter` (hold down `Ctrl` and `Space` and press `Enter`).

## TODO

(Just listing out everything aoeui can do for now -- some of these features may or may not be appropriate/necessary for a Light Table plugin. See the [aoeui manpage](http://manpages.ubuntu.com/manpages/gutsy/man1/aoeui.1.html) for more info.)

### Navigation

- [x] Navigation by lines (^G/^C), screenfuls (^R/^L), characters (^H/^T), words (^N/^S)
- [ ] Navigation by sentences (^Space^N, ^Space^S)
- [ ] Navigate to very beginning (^Space^R), very end (^Space^L)
- [ ] Re-center (^Z)
- [ ] Cause current window to occupy the entire display and recenter window (^Space^Z)
- [ ] Go to other bracket (^])

### Search, bookmarks, tags

- [ ] Search (^/) (search should be its own mode, where e.g. ^V, ^H, ^T act differently, see manpage)
- [ ] Save bookmark (^Space=), go to bookmark (^Space-)
- [ ] Go to tag (^Space')

### Selection, copy/cut/paste

- [ ] Selection (^V, ^Space^V, ^Space^D)
- [ ] Clip buffer: (idea: make it independent from system clipboard, like aoeui does)
  - [ ] copy (^F) (also remove selection)
  - [ ] cut (^D) (also remove selection) (also does what Delete does when there is no selection)
  - [ ] ^Shift^D, ^Shift^F should behave like aoeui (see manpage)
  - [ ] paste/exchange (^B) (also select pasted text)

### Windows/views

- [ ] New view, same window / cycle through views / new scratch text (^W)
- [ ] Close current view (^Space^W)
- [ ] Next window (^P)
- [ ] Next window, closing previous one (^Space^P)
- [ ] Split window horizontally (^Y), vertically (^Space^Y)

### File operations

- [ ] Suspend (^Q)
- [ ] Save & quit (^Space^Q)
- [ ] Quit without saving (^Space^\\)

### Macros

- [ ] Start recording macro (^Space^O)
- [ ] Start recording global macro mapped to fn key (^SpaceF1-F12)
- [ ] End recording macro / replay view's local macro (^O)

### Folding

- [ ] Fold (^Space ,) (see manpage)
- [ ] Unfold (^Space .) (see manpage)

### Misc.

- [ ] Undo (^U), redo (^Space^U)
- [ ] Shell (^E) (see manpage)
- [ ] Enter untypeable character (^^), Unicode character (^Space^^)
- [ ] Alias ^I to tab command (I think it's pretty similar in Light Table)
- [ ] Alias ^SpaceTab / ^Space^I to Shift+tab?
- [ ] Insert new line with automatic indentation (^J or ^Enter)
- [ ] ^X, ^Space^X (see manpage)
