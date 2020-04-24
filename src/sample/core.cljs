(ns sample.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

(def state (atom {:title "Essays"
                  :author "Bardia"}))

(defn app []
  [:div
   [:h1 (:title @state)]
   [:h2 "By " (:author @state)]])

(defn ^:dev/after-load start []
  (rdom/render [app] (js/document.getElementById "app")))

(defn init []
  (js/console.log "init")
  (start))
