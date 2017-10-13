(ns rea-inc.core
  (:require [reagent.core :as reagent]
            [rea-inc.state :as state]))

(enable-console-print!)

(defn change
  []
  (swap! state/click-count inc)
  (swap! state/app-state #(conj % {:text "fck"})))

(defn hello-world []
  [:div
   (for [[i item] (map vector (range 0 @state/click-count) @state/app-state)]
     [:h1
       {:key (inc i)}
       (concat (:text item) "-" (str i))])
   [:h3 "Edit this and watch it change!"]
   [:a {:href "#" :on-click change} "Hola"]])

(reagent/render-component
  [hello-world]
  (. js/document (getElementById "app")))

(defn on-js-reload [])
