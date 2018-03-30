(ns rea-inc.state
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce app-state (atom {:headers nil :items []}))

(defn add-text
  [text]
  (swap! app-state update-in [:items] conj {:text text}))

(defn update-header
  [header]
  (swap! app-state assoc :headers header))

(defn count-items
  []
  (count (:items @app-state)))
