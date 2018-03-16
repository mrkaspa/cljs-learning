(ns rea-inc.core
  (:require [reagent.core :as reagent]
            [rea-inc.state :as state]
            [demo]))

(enable-console-print!)
(demo)

(defn change
  []
  (swap! state/click-count inc)
  (let [pow (Math/pow @state/click-count 2)
        text (concat "The Pow number is of " (str @state/click-count) " is " (str pow))]
    (swap! state/app-state #(conj % {:text text}))))

(defn hello-world []
  [:div {:style {:border "1px red solid"}}
   [:h1 {:style {:color "red"}} "demo"]
   (for [[i item] (map vector (range 0 @state/click-count)
                   @state/app-state)]
     [:h1
      {:key i}
      (:text item)])
   [:h3 "Edit this and watch it change!"]
   [:a {:href "#" :on-click change} "Hola"]])

(reagent/render-component
 [hello-world]
 (. js/document (getElementById "app")))

(defn on-js-reload [])
