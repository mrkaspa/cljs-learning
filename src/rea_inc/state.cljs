(ns rea-inc.state
    (:require [reagent.core :as reagent :refer [atom]]))

(defonce app-state (atom [{:text "Hello world!"}]))

(defonce click-count (atom 1))
