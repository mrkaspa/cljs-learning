(ns rea-inc.state
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce app-state (atom []))

(defonce click-count (atom 0))
