if(!lt.util.load.provided_QMARK_('lt.plugins.aoeui')) {
goog.provide('lt.plugins.aoeui');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
lt.plugins.aoeui.at_line_start_QMARK_ = (function at_line_start_QMARK_(ed){return (lt.objs.editor.cursor.call(null,ed).ch === 0);
});
lt.plugins.aoeui.at_line_end_QMARK_ = (function at_line_end_QMARK_(ed){var line = lt.objs.editor.cursor.call(null,ed).line;var pos = lt.objs.editor.cursor.call(null,ed).ch;var line_length = cljs.core.count.call(null,lt.objs.editor.line.call(null,ed,line));return cljs.core._EQ_.call(null,pos,line_length);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aoeui.line-back","aoeui.line-back",1590147887),new cljs.core.Keyword(null,"desc","desc",1016984067),"aoeui: line up",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(lt.plugins.aoeui.at_line_start_QMARK_.call(null,ed))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.line-up","editor.line-up",3404593925));
} else
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.line-left","editor.line-left",658910833));
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aoeui.line-forward","aoeui.line-forward",574213025),new cljs.core.Keyword(null,"desc","desc",1016984067),"aoeui: line down",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(lt.plugins.aoeui.at_line_end_QMARK_.call(null,ed))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.line-down","editor.line-down",658682636));
} else
{}
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"editor.line-right","editor.line-right",2899671446));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=aoeui_compiled.js.map