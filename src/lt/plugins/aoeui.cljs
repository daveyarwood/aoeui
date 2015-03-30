(ns lt.plugins.aoeui
  (:require [lt.objs.command :refer (command exec!)]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :refer (last-active)]))

(defn at-line-start?
  [ed]
  (zero? (.-ch (editor/cursor ed))))

(defn at-line-end?
  [ed]
  false)

(editor/->cursor (last-active) "start")

(command {:command :aoeui.line-back
          :desc "aoeui: line up"
          :exec (fn []
                  (when-let [ed (last-active)]
                    (if (at-line-start? ed)
                      (exec! :editor.line-up)
                      (exec! :editor.line-left))))})

(command {:command :aoeui.line-forward
          :desc "aoeui: line down"
          :hidden true
          :exec (fn []
                  (when-let [ed (last-active)]
                    (if (at-line-end? ed)
                      (exec! :editor.line-down)
                      (exec! :editor.line-right))))})
