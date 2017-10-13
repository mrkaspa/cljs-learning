// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36797){
var map__36798 = p__36797;
var map__36798__$1 = ((((!((map__36798 == null)))?((((map__36798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36798):map__36798);
var m = map__36798__$1;
var n = cljs.core.get.call(null,map__36798__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36798__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36800_36822 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36801_36823 = null;
var count__36802_36824 = (0);
var i__36803_36825 = (0);
while(true){
if((i__36803_36825 < count__36802_36824)){
var f_36826 = cljs.core._nth.call(null,chunk__36801_36823,i__36803_36825);
cljs.core.println.call(null,"  ",f_36826);

var G__36827 = seq__36800_36822;
var G__36828 = chunk__36801_36823;
var G__36829 = count__36802_36824;
var G__36830 = (i__36803_36825 + (1));
seq__36800_36822 = G__36827;
chunk__36801_36823 = G__36828;
count__36802_36824 = G__36829;
i__36803_36825 = G__36830;
continue;
} else {
var temp__5278__auto___36831 = cljs.core.seq.call(null,seq__36800_36822);
if(temp__5278__auto___36831){
var seq__36800_36832__$1 = temp__5278__auto___36831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36800_36832__$1)){
var c__35578__auto___36833 = cljs.core.chunk_first.call(null,seq__36800_36832__$1);
var G__36834 = cljs.core.chunk_rest.call(null,seq__36800_36832__$1);
var G__36835 = c__35578__auto___36833;
var G__36836 = cljs.core.count.call(null,c__35578__auto___36833);
var G__36837 = (0);
seq__36800_36822 = G__36834;
chunk__36801_36823 = G__36835;
count__36802_36824 = G__36836;
i__36803_36825 = G__36837;
continue;
} else {
var f_36838 = cljs.core.first.call(null,seq__36800_36832__$1);
cljs.core.println.call(null,"  ",f_36838);

var G__36839 = cljs.core.next.call(null,seq__36800_36832__$1);
var G__36840 = null;
var G__36841 = (0);
var G__36842 = (0);
seq__36800_36822 = G__36839;
chunk__36801_36823 = G__36840;
count__36802_36824 = G__36841;
i__36803_36825 = G__36842;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36843 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34647__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34647__auto__)){
return or__34647__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36843);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36843)))?cljs.core.second.call(null,arglists_36843):arglists_36843));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36804_36844 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36805_36845 = null;
var count__36806_36846 = (0);
var i__36807_36847 = (0);
while(true){
if((i__36807_36847 < count__36806_36846)){
var vec__36808_36848 = cljs.core._nth.call(null,chunk__36805_36845,i__36807_36847);
var name_36849 = cljs.core.nth.call(null,vec__36808_36848,(0),null);
var map__36811_36850 = cljs.core.nth.call(null,vec__36808_36848,(1),null);
var map__36811_36851__$1 = ((((!((map__36811_36850 == null)))?((((map__36811_36850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36811_36850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36811_36850):map__36811_36850);
var doc_36852 = cljs.core.get.call(null,map__36811_36851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36853 = cljs.core.get.call(null,map__36811_36851__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36849);

cljs.core.println.call(null," ",arglists_36853);

if(cljs.core.truth_(doc_36852)){
cljs.core.println.call(null," ",doc_36852);
} else {
}

var G__36854 = seq__36804_36844;
var G__36855 = chunk__36805_36845;
var G__36856 = count__36806_36846;
var G__36857 = (i__36807_36847 + (1));
seq__36804_36844 = G__36854;
chunk__36805_36845 = G__36855;
count__36806_36846 = G__36856;
i__36807_36847 = G__36857;
continue;
} else {
var temp__5278__auto___36858 = cljs.core.seq.call(null,seq__36804_36844);
if(temp__5278__auto___36858){
var seq__36804_36859__$1 = temp__5278__auto___36858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36804_36859__$1)){
var c__35578__auto___36860 = cljs.core.chunk_first.call(null,seq__36804_36859__$1);
var G__36861 = cljs.core.chunk_rest.call(null,seq__36804_36859__$1);
var G__36862 = c__35578__auto___36860;
var G__36863 = cljs.core.count.call(null,c__35578__auto___36860);
var G__36864 = (0);
seq__36804_36844 = G__36861;
chunk__36805_36845 = G__36862;
count__36806_36846 = G__36863;
i__36807_36847 = G__36864;
continue;
} else {
var vec__36813_36865 = cljs.core.first.call(null,seq__36804_36859__$1);
var name_36866 = cljs.core.nth.call(null,vec__36813_36865,(0),null);
var map__36816_36867 = cljs.core.nth.call(null,vec__36813_36865,(1),null);
var map__36816_36868__$1 = ((((!((map__36816_36867 == null)))?((((map__36816_36867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36816_36867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36816_36867):map__36816_36867);
var doc_36869 = cljs.core.get.call(null,map__36816_36868__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36870 = cljs.core.get.call(null,map__36816_36868__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36866);

cljs.core.println.call(null," ",arglists_36870);

if(cljs.core.truth_(doc_36869)){
cljs.core.println.call(null," ",doc_36869);
} else {
}

var G__36871 = cljs.core.next.call(null,seq__36804_36859__$1);
var G__36872 = null;
var G__36873 = (0);
var G__36874 = (0);
seq__36804_36844 = G__36871;
chunk__36805_36845 = G__36872;
count__36806_36846 = G__36873;
i__36807_36847 = G__36874;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__36818 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36819 = null;
var count__36820 = (0);
var i__36821 = (0);
while(true){
if((i__36821 < count__36820)){
var role = cljs.core._nth.call(null,chunk__36819,i__36821);
var temp__5278__auto___36875__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___36875__$1)){
var spec_36876 = temp__5278__auto___36875__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36876));
} else {
}

var G__36877 = seq__36818;
var G__36878 = chunk__36819;
var G__36879 = count__36820;
var G__36880 = (i__36821 + (1));
seq__36818 = G__36877;
chunk__36819 = G__36878;
count__36820 = G__36879;
i__36821 = G__36880;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__36818);
if(temp__5278__auto____$1){
var seq__36818__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36818__$1)){
var c__35578__auto__ = cljs.core.chunk_first.call(null,seq__36818__$1);
var G__36881 = cljs.core.chunk_rest.call(null,seq__36818__$1);
var G__36882 = c__35578__auto__;
var G__36883 = cljs.core.count.call(null,c__35578__auto__);
var G__36884 = (0);
seq__36818 = G__36881;
chunk__36819 = G__36882;
count__36820 = G__36883;
i__36821 = G__36884;
continue;
} else {
var role = cljs.core.first.call(null,seq__36818__$1);
var temp__5278__auto___36885__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___36885__$2)){
var spec_36886 = temp__5278__auto___36885__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36886));
} else {
}

var G__36887 = cljs.core.next.call(null,seq__36818__$1);
var G__36888 = null;
var G__36889 = (0);
var G__36890 = (0);
seq__36818 = G__36887;
chunk__36819 = G__36888;
count__36820 = G__36889;
i__36821 = G__36890;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
