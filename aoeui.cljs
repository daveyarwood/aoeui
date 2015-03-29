(ns lt.plugins.aoeui
  (:require [lt.objs.command :as cmd :refer (command exec!)]
            [lt.objs.editor :as editor]))

(command {:command :aoeui.line-back
          :desc "aoeui: line up"
          :exec (fn []
                  (exec! :editor.line-up))})

(command {:command :aoeui.line-forward
          :desc "Vim: ex"
          :hidden true
          :exec (fn []
                  (exec! :editor.line-down))})
