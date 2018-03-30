(ns rea-inc.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent]
            [rea-inc.state :as state]
            [demo]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cuerdas.core :as str]))

(enable-console-print!)

(def url
  "https://api.liftit.co/v1/health")

(defn async-call
  []
  (go (let [response (<! (http/get
                          url
                          {:with-credentials? false}
                          :headers {"Origin" "*"}))]
       (prn (:status response))
       (prn (get (:headers response) "content-type"))
       (state/update-header (:headers response)))))

(defn change
  []
  (state/increment)
  (let [pow (Math/pow @state/click-count 2)
        text (str/format "The Pow number is of %s is %s" (str @state/click-count) (str pow))]
    (state/add-text text)))

(defn hello-world
  []
  [:div {:style {:border "1px red solid"}}
   [:h1 {:style {:color "red"}} "demo"]
   (for [[i item] (map vector (range 0 @state/click-count)
                   (:items @state/app-state))]
     [:h1
      {:key i}
      (:text item)])
   [:h3 "Edit this and watch it change!"]
   [:a {:href "#" :on-click async-call} "Call URL"]
   [:span (str "response: " (:headers @state/app-state))]
   [:br]
   [:a {:href "#" :on-click change} "Add Item"]
   [:br]
   [:a {:href "#" :on-click demo/call} "Alert JS"]])

(reagent/render-component
 [hello-world]
 (. js/document (getElementById "app")))

(defn on-js-reload [])
